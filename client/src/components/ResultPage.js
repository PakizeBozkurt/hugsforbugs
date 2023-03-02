import React from 'react';
import Button from "react-bootstrap/Button";

const ResultPage = (props) => {
 const handleBack=(e)=>{
     e.preventDefault();
     window.location.href = '/availability';
 }
 const handleAll=(e)=>{
        e.preventDefault();
        props.filter("monthly")
 }
    return (
        <div>
          <h1>No Result!</h1>
            <p>
                There is no available trainee for this date. Please try another date.
            </p>
            <div>
                <Button onClick={handleBack} variant="primary" type="submit">
                    Back
                </Button>
                <Button onClick={handleAll} variant="primary" type="submit">
                    All Available
                </Button>
            </div>
        </div>
    );
};

export default ResultPage;