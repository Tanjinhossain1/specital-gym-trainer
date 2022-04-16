import React from 'react';
import { Card } from 'react-bootstrap';

const UltimateDetail = () => {
    return (
        <div>
            <Card className='w-50 mx-auto card-group mt-5'>
                    <Card.Img variant="top" src="https://blog.myfitnesspal.com/wp-content/uploads/2018/03/How-Your-Music-Influences-Your-Workout-752x472.jpg" />
                    <Card.Body>
                        <Card.Title>ULTIMATE 8 Month</Card.Title>
                        <h5>$799<small>/Month</small></h5>
                        <Card.Text>
                            The ultimate life transformation journey package requires a 8 month commitment. i'm looking for change to their health and life.The first step always feels like the hardest in any life challenge. But you can genuinely start to change your life for the better in just six short months. With the choice of one,two,or three weekly workout sessions,the ball is truly in your court.When combined with advanced nutritional support throughout the process, a new and improved life start now.
                        </Card.Text>
                    </Card.Body>
                  
                </Card>
        </div>
    );
};

export default UltimateDetail;