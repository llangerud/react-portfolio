import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'

function Contact () {

  function validateEmail (email) {
    // eslint-disable-next-line
    let regEx = /^([a-z0-9_\.-]+)@([\a-z\.-]+)\.([a-z\.]{2,6})$/;
    return regEx.test(String(email).toLowerCase());
  }

const [required, setRequired] = useState('');
const [email, setEmail] = useState('');
const [name, setName] = useState('');
const [message, setMessage] = useState('');

const checkForText = (e) => { 
if (!e.target.value) {
setRequired('this field is required')
return;
};
};
const validate = (e) => {
e.preventDefault();
if (!validateEmail(email)) {
  alert('please enter a valid email');
  return;
}
alert('thanks!')
setEmail('');
setMessage('');
setName('');


};
const inputChange = (e) => {
  const { target } = e;
  const inputValue = target.value;
  setEmail(inputValue);
}

  return (
        <Container>
          <br></br>
          <br></br>
          <h1>Contact Me</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" as="textarea" 
             onBlur = {e => {checkForText(e)}} value= {email} onChange = {e => {inputChange(e)}}
            />
             <Form.Text className="text-muted">
          {required}
          </Form.Text>
            </Form.Group>
    
          <Form.Group className="mb-3" controlId="ControlTextarea2">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="name" as="textarea" onBlur = {e => {checkForText(e)}} value= {name} onChange = {e => {inputChange(e)}}/>
            <Form.Text className="text-muted">
          {required}
          </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="form.ControlTextarea1">
        <Form.Label>Include a message</Form.Label>
        <Form.Control as="textarea" rows={3} onBlur = {e => {checkForText(e)}} value= {message} onChange = {e => {inputChange(e)}}/>
        <Form.Text className="text-muted">
          {required}
          </Form.Text>
      </Form.Group>
          <Button variant="primary" type="submit" onClick={e => {validate(e)}}>
            Submit
          </Button>
        </Form>
        </Container>
      );
    }

    export default Contact;
    

