import "./css/NewCarForm.css"
import React, { useState } from 'react';
import {Form, Row, FormGroup, Label, Button, Input, Col} from "reactstrap"

function NewCarForm({ handleNewCar }) {
    const initialFormData = {
        yearmodel: Number(1950),
        carmake : "",
        carmodel: "" 
    }

    const [formData, setFormData] = useState(initialFormData);

    
    const handleChange = (e) => {
        const {name, value} = e.target; 
        setFormData(fData => ({
            ...fData, 
            [name]: value, 
        }));
    };



     async function handleSubmit(e) {
        try{
            e.preventDefault();
            await  handleNewCar(formData);
            } finally {
                setFormData({yearmodel: Number(1950), carmake:"", carmodel:""})
                }
            }
    


return(
    <div className="form">
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