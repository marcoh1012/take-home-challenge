import React, { useState } from 'react'
import { Col, Button, Jumbotron, Container, Form, FormGroup,Label, Input } from 'reactstrap';
import axios from 'axios'

const INITIAL_STATE = {
    firstName: '',
    lastname:'',
    email : ''
}

function SignUp(){

    const [form, setForm] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm( fData => ({...fData,
        [name]: value}))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        addUser()
    }

    async function addUser(){
        try{
            await axios.post('http://localhost:5000/users', form)
            setForm(INITIAL_STATE)
        }
        catch {
            console.log('something went wrong')
        }
    }
    
    return(
        <Container >
            <Jumbotron fluid style={{marginTop: '5rem'}}>
            <h1>Yodlr Registration Portal</h1>
            <Form onSubmit={handleSubmit} style={{paddingRight: '2rem'}}>
                <FormGroup row>
                    <Label for="firstName" sm={2}>First Name:</Label>
                    <Col sm={10}>
                    <Input type="text" name="firstName" id="firstName" placeholder="First name" value={form.firstName} onChange={handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="lastName" sm={2}>Last Name:</Label>
                    <Col sm={10}>
                    <Input type="text" name="lastName" id="lastName" placeholder="Last name" value={form.lastName} onChange={handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='email' sm={2}>Email:</Label>
                    <Col sm={10}>
                    <Input type="email" name="email" placeholder='Email' value={form.email} onChange={handleChange}/>
                    </Col> 
                </FormGroup>
                <Button color='primary' type="submit" onClick={handleSubmit}>Submit</Button>
            </Form>
            <hr></hr>
            <p>
              <Button color='info' href="/admin" style={{margin: '2rem', marginRight: '3.5rem'}}>Admin Page</Button>
            </p>
            </Jumbotron>
        </Container>
    )
}

export default SignUp