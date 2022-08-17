import "./css/NewCarForm.css"
import React, { useState } from 'react';
import { Button, Form } from "reactstrap";
import AsyncSelect from 'react-select/async'
import axios from "axios";

function NewCarForm({ handleNewCar }) {

    // const [formData, setFormData] = useState(initialFormData);

    //Dropdown menus implementation 
    // eslint-disable-next-line
    const [inputValue, setValue] = useState('')
    const [selectedYear, setSelectedYear] = useState("")
    const [selectedMake, setSelectedMake] = useState("")
    const [selectedModel, setSelectedModel] = useState("")



    const handleInputChange = value => {
        setValue(value); 
    };

        // const handleChange = (e) => {
    //     const {name, value} = e.target; 
    //     setFormData(fData => ({
    //         ...fData, 
    //         [name]: value, 
    //     }));
    // };


    
    const handleYearChange = value => {
        setSelectedYear(value)
    }

    const handleModelChange = value => {
        setSelectedModel(value) 
        }
    
    const handleMakeChange = value => {
        setSelectedMake(value)
    }

    

    const fetchYear = async () => {
        const unproxiedURL = "http://localhost:3001/"
        const backendRoute = "products/vehicle/modelYears?issueType=r"
        const modelYears =  await axios.get(
            `${unproxiedURL}${backendRoute}`,
            )
        const res = modelYears.data.results
        return res; 
    }

    const fetchMake = async () => {
        const unproxiedURL = "http://localhost:3001/"
        const backendRoute = "products/vehicle/makes"
        const manufacturer =  await axios.get(
            `${unproxiedURL}${backendRoute}`,
            {
                "params": {
                    "modelYear": selectedYear.modelYear,
                    "issueType":"r"
                }
            })
        const res = manufacturer.data.results
        return res; 
    }

    const fetchModel = async () => {
        const unproxiedURL = "http://localhost:3001/"
        const backendRoute = "products/vehicle/models"
        const model =  await axios.get(
            `${unproxiedURL}${backendRoute}`,
            {
                "params": {
                    "modelYear": selectedYear.modelYear,
                    "make": selectedMake.make,
                    "issueType":"r"
                }
   
            })
        const res = model.data.results
        return res; 
    }

    const newCar = {
        "yearmodel": selectedModel.modelYear, 
        "carmake": selectedModel.make, 
        "carmodel": selectedModel.model
    }



     async function handleSubmit(e) {
        e.preventDefault();
        await  handleNewCar(newCar);
        }
         
         
         
    


return(
    
    <div className="form">
        <Form onSubmit={handleSubmit}>
            <AsyncSelect cacheOptions={true} defaultOptions value={selectedYear} getOptionLabel={y => y.modelYear}  getOptionValue={y => y.id} loadOptions={fetchYear} onInputChange={handleInputChange} onChange={handleYearChange}/>

            <AsyncSelect cacheOptions={true} defaultOptions value={selectedMake} getOptionLabel={y => y.make}  getOptionValue={y => y.id} loadOptions={fetchMake} onInputChange={handleInputChange} onChange={handleMakeChange}/>

            <AsyncSelect cacheOptions={true} defaultOptions value={selectedModel} getOptionLabel={y => y.model}  getOptionValue={y => y.id} loadOptions={fetchModel} onInputChange={handleInputChange} onChange={handleModelChange}/>
    
                <Button className="carSubmission" variant="primary" type="submit" onSubmit={handleSubmit}>
                            Add New Car to Garage
                </Button>
        </Form>
    </div>
)}
export default NewCarForm; 