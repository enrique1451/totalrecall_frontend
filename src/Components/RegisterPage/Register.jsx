import "./Register.css"
import React, { useState } from "react"; 
// import { useHistory } from "react-router-dom";
import { Row, FormGroup, Label, Button, Col, Input, Form } from 'reactstrap'

function Register( { handleRegistration } ) {
    const initialFormData = { 
        username: "",
        email: "", 
        password: "", 
        fullName: "",
        
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
            await handleRegistration(formData);
            setRedirect(true);
        } catch (e) {
             
            setMessage(e)
        }
    }



    return(
        <Form onSubmit={handleSubmit}>
            <Row form>
                <Col md={3}>
                <FormGroup className="userData">
                    <Label for="userData">Enter Your Info</Label>
                    <Input id="registrationUsername" name="username" placeholder="Username" type="text"
                        onChange={handleChange} value = {formData.username} />
                     <Input id="registrationPassword" name="password" placeholder="Enter a Password" type="password"
                        onChange={handleChange} value = {formData.password} />
                     <Input id="registrationName" name="fullName" placeholder="Full Name" type="text" 
                        onChange={handleChange} value = {formData.fullName} />
                    <Input id="registrationEmail" name="email" placeholder="Enter Your Email" type="email"
                        onChange={handleChange} value = {formData.email} />
                </FormGroup>
                </Col>
                <Button variant="primary" type="submit" onSubmit={handleSubmit}>
                    Create a New Account
                </Button>
            </Row>
        </Form>
    )
}

export default Register; 
