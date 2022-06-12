import "./css/NewCarForm.css"
import React, { useState } from 'react';
import {Form, Row, FormGroup, Label, Button, Input, Col} from "reactstrap"
import Notifications from "../Notifications/Notifications";

function NewCarForm({ handleNewCar }) {



    const initialFormData = {
        yearmodel: 1950,
        carmake : "",
        carmodel: "" 
    }

    const [formData, setFormData] = useState(initialFormData);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    
    const handleChange = (e) => {
        const {name, value} = e.target; 
        setFormData(fData => ({
            ...fData, 
            [name]: value, 
        }));
    };
    


     async function handleSubmit(e) {        
        e.preventDefault();
        console.log("Check out state ->", formData)
        try {
            await handleNewCar(formData);
            setSuccess(true)
      
        } catch (error) {
            setError(true)            
        }
        
    }
    


return(
    <div className="form">
        {success && <Notifications type="success" message="New Car Added to the Database"/>} 
        {error && <Notifications type="danger" message="An Error Ocurred while Adding New Car to the Database"/>} 
        <Form onSubmit={handleSubmit}>
            <Row form>
                <Col md={3}>
                <FormGroup className="userData">
                    <Label for="yearmodel">Enter Your Car Info</Label>
                    <Input id="yearModel" name="yearmodel" placeholder="1985" type="number"
                        onChange={handleChange} value = {formData.yearmodel} />
                    <Input id="carmake" name="carmake" placeholder="Enter a make" type="text"
                        onChange={handleChange} value = {formData.make} />
                    <Input id="carmodel" name="carmodel" placeholder="Car Model" type="text" 
                        onChange={handleChange} value = {formData.model} />
                </FormGroup>
                </Col>
                <Button variant="primary" type="submit" onSubmit={handleSubmit}>
                    Add New Car to Garage
                </Button>
            </Row>
        </Form>
    </div>
    

)}
export default NewCarForm; 