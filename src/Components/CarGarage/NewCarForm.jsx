import "./NewCarForm.css"
import React, { useState } from 'react';
import {Form, Row, FormGroup, Label, Button, Input, Col} from "reactstrap"

function NewCarForm({ handleNewCar }) {

    const initialFormData = {
        yearmodel: 1950,
        carmake : "",
        carmodel: "" 

    }

    const [formData, setFormData] = useState(initialFormData);
    const [redirect, setRedirect] = useState(false);
    const [message, setMessage] = useState(null)

    
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
            setRedirect(true);
        } catch (e) {
            setMessage(e)
        }
    }





return(
    <div>
    
        <Form onSubmit={handleSubmit}>
            <br></br>
            <br></br>
            <br></br>
            
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