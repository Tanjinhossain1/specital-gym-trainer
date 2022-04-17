import React from 'react';
import { Card } from 'react-bootstrap';
import './UserSay.css'

const UserSay = () => {
    // user review hear
    return (
        <div>
            <h1 className='text-center text-success mt-5'>What My Amazing Clients Say!</h1>
            <div className='user-card-group mx-auto w-75 mt-5'>
                <Card className='mb-5 me-4' border="secondary" style={{ width: '18rem' }}>
                    <Card.Body className='bg-black text-white '>
                        <Card.Text>
                        You are great, always there with help and advise which you can trust to talk to. I can now train at home saving time whilst being more efficient.
                        </Card.Text>
                        <h4 className='text-warning'>Arafat Hossain</h4>
                    </Card.Body>
                </Card>

                <Card  className='mb-5 me-4' border="secondary" style={{ width: '18rem' }}>
                    <Card.Body className='bg-black text-white'>
                        <Card.Text>
                        Your online coaching has helped me feel more comfortable within myself and given me the confidence to eat better foods and train with my goals in mind.
                        </Card.Text>
                        <h4 className='text-warning'>Hridoy Hossain</h4>
                    </Card.Body>
                </Card>

                <Card className='mb-5 ' border="secondary" style={{ width: '18rem' }}>
                    <Card.Body className='bg-black text-white '>
                        <Card.Text>
                        During my plan with you, I exceeded even my own expectations by losing 13lb and dropping 2 dress sizes from a size 12 to a size 8!
                        </Card.Text>
                        <h4 className='text-warning'>Robin Ahmed</h4>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default UserSay;