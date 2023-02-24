import React, { useState } from 'react'

function Register() {
const [name,setName] =useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleChange =(event) => {
  if (event.target.name === "name"){
    setName(event.target.value);
  }
  else if (event.target.name === "email"){
    setEmail(event.target.value);
  }
  else if (event.target.name === "password"){
    setPassword(event.target.value);}
  };
  const handleSubmit =(event) => {
    event.preventDefault();
    const user={name,email,password}

    fetch('http://localhost:3001/register',
    {method: 'POST',
    headers: {'Content-Type': 'application'},
    body : JSON.stringify(user)})
    .then(response => {return response.json})
    .then(data =>{
    if(data.token){
    alert('YOU ARE REGISTERED');
    localStorage.setItem('token',data.token);
    window.location.href="/login";
    }else{
    alert('YOU ARE NOT REGISTERED');
    window.location.href="/register";
    }})
    .catch(err =>console.error(err))}                                
  return (

    <div>
  
    <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name={'name'} value={name}
                      onChange={handleChanges}/>
    </Form.Group>
    <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name={'email'} value={email}
                      onChange={handleChanges}/>
    </Form.Group>
    <Form.Group controlId="formBasicEmail">
        <Form.Label>password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" name={'password'} value={passwordl}
                      onChange={handleChanges}/>
    </Form.Group>
    <Button type="submit" className="btn succes" onClick={handleSubmit}>Register</Button>
    </Form>
    </div>
  )
}
export default Register
