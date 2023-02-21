import { useState } from 'react'; 
import { Form } from 'react-bootstrap'; 
import  Button  from 'react-bootstrap/Button';


const FormPage = () => {
    const [FirstName, setFirstName] = useState(''); 
    const [SurName, setSurName] = useState('');
    const [Email, setEmail] = useState(''); 
    const [SlackAccount, setSlackAccount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // this line prevents the submit button from refreshing the page when clicked. 
    }

  return (
		<main className={'container'}>
			<div className={"row"}>
                    <div className={"col-md-6"}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>First Name: </Form.Label>
                                <Form.Control 
                                 type="text"
                                 placeholder="First Name..." 
                                 required
                                 value = {FirstName}
                                 onChange = {((e) => setFirstName(e.target.value))}
                                 />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Surname: </Form.Label>
                                <Form.Control 
                                type="text" 
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
                                <Form.Control 
                                type="text" 
                                placeholder = "Enter your availability..." 
                                required
                                />
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
