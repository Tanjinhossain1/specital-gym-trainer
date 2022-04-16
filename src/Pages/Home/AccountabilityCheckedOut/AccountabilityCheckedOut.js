import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const AccountabilityCheckedOut = () => {
    
    return (
        <div>
            <CardGroup className='w-50 mx-auto card-group mt-5'>
                <Card className='m-4'>
                    <Card.Img  variant="top"  src="https://gymgeek.com/wp-content/uploads/2015/12/man-and-woman-in-gym-triceps-extensions-700x465.jpg" />
                    <Card.Body>
                        <Card.Title>ACCOUNTABILITY</Card.Title>
                        <h5>$150<small>/Week</small></h5>
                        <Card.Text>
                            <p>if you are confident in the hows and whys of training and have a pretty solid knowledge of nutrition and training.this package is for you. You're confident in the gym and want the extra push from me. you want to be ad part of an awesome mind.If you enjoy training and self motivated but lack the knowledge or experience to take your training and body to the next level, then a ACCOUNTABILITY package is the next level.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </CardGroup>
        </div>
    );
};

export default AccountabilityCheckedOut;