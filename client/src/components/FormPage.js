import { useState } from 'react'; 
import { Form } from 'react-bootstrap'; 
import  Button  from 'react-bootstrap/Button';


const FormPage = () => {
    const [FirstName, setFirstName] = useState(''); 
    const [SurName, setSurName] = useState('');
    const [Email, setEmail] = useState(''); 
    const [SlackAccount, setSlackAccount] = useState('');
  return (
		<main className={'container'}>
			<div className={"row"}>
                    <div className={"col-md-6"}>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>First Name: </Form.Label>
                                <Form.Control 
                                type="email"
                                 placeholder="First Name..." 
                                 required
                                 value = {FirstName}
                                 onChange = {((e) => setFirstName(e.target.value))}
                                 />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Surname: </Form.Label>
                                <Form.Control 
                                type="email" 
                                placeholder="Surname..." 
                                required
                                value = {SurName}
                                onChange = {((e) => setSurName(e.target.value))}

                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                type="email" 
                                placeholder="Enter Your Email..." 
                                required
                                value={Email}
                                onChange = {((e) => setEmail(e.target.value))}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Slack Account </Form.Label>
                                <Form.Control 
                                type ="text"
                                placeholder ="Enter your slack username..." 
                                required
                                value = {SlackAccount}
                                onChange = {((e) => setSlackAccount(e.target.value))}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Availability</Form.Label>
                                <Form.Control type="text" placeholder = "Enter your availability..." required/>
                            </Form.Group>
                            <Button variant = "primary" type = "submit"> 
                            Submit 
                            </Button>
                            <p>{SlackAccount}</p>
                            </Form>                     
                    </div>
            </div> 
		</main>
	);
}

export default FormPage; 
