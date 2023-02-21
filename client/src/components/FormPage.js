import React from 'react'; 
import { Form } from 'react-bootstrap'; 
import  Button  from 'react-bootstrap/Button';


const FormPage = () => {
  return (
		<main className={'container'}>
			<div className={"row"}>
                    <div className={"col-md-6"}>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>First Name: </Form.Label>
                                <Form.Control type="email" placeholder="First Name..."/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Surname: </Form.Label>
                                <Form.Control type="email" placeholder="Surname..." />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Send Email</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your Email..." />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Slack Account </Form.Label>
                                <Form.Control type ="text" placeholder ="Enter your slack username..." />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Availability</Form.Label>
                                <Form.Control type="text" placeholder = "Enter your availability..."/>
                            </Form.Group>
                            <Button variant = "primary" type = "submit"> 
                            Submit 
                            </Button>
                            </Form>                     
                    </div>
            </div> 
		</main>
	);
}

export default FormPage; 
