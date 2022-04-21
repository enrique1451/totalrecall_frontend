import "./Login.css"
import React, { useState } from "react"; 

import { Row, FormGroup, Label, Button, Col, Input, Form } from 'reactstrap'



const Login = ({ handleLogin }) => {
    
  const initialFormData = {
      username: "",
      password: ""
    }

  const [formData, setFormData] = useState(initialFormData);
  const [redirect, setRedirect] = useState(false);
  const [message, setMessage] = useState(null)


  console.log(
    "* Login =--->",
    formData,
    redirect,
    message) 

    

    

  const handleChange = (e) => {
    const {
      name,
      value
    } = e.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await handleLogin(formData);

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
                <Label for="userData">Enter Your Credentials</Label>
                <Input id="username" name="username" placeholder="Enter Your Username" type="text" onChange={handleChange} value = {formData.username} />
                 <Input id="password" name="password" placeholder="Enter Your Password" type="password" onChange={handleChange} value = {formData.password} />
            </FormGroup>
            </Col>
            <Button variant="primary" type="submit" onSubmit={handleSubmit}>
                Login to Your Account!
            </Button>
        </Row>
    </Form>
)
}



export default Login;