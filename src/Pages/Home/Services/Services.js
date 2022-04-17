import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Services.css'
const Services = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className='text-center text-primary mt-5'>Personal Online Trainer</h1>
           <div className=''>
           <CardGroup className='w-75 mx-auto card-group '>
                <Card className='m-4 shadow-lg rounded-3 card-left'>
                    <Card.Img variant="top" src="https://gymgeek.com/wp-content/uploads/2015/12/man-and-woman-in-gym-triceps-extensions-700x465.jpg" />
                    <Card.Body>
                        <Card.Title>ACCOUNTABILITY</Card.Title>
                        <h5 className='text-danger'>$150<small>/Week</small></h5>
                        <Card.Text>
                            <p>if you are confident in the hows and whys of training and have a pretty solid knowledge of nutrition and training.this package is for you. You're confident in the gym and want the extra push from me. you want to be ad part of an awesome mind.</p>
                        </Card.Text>
                       <div className='text-center'>
                       <button onClick={()=>navigate('/accountAbilityCheckout')} className='py-2 px-5 border rounded-2 bg-info'>Checked</button>
                       </div>
                    </Card.Body>
                </Card>

                <Card className='m-4 shadow-lg rounded-3 card-right'>
                    <Card.Img variant="top" src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/01/man-weight-lifting-training-workout-gym.jpg?quality=82&strip=1" />
                    <Card.Body>
                        <Card.Title>FAST TRACK</Card.Title>
                        <h5 className='text-danger'>$200<span>/week</span></h5>
                        <Card.Text>
                            If you strive for real results and want to receive the guidance you need to set yourself up for success.then this is the package for you You'll be working with me directly and checking in twice a week.We'll fast track your progress and make necessary changes to ensure your commit.
                        </Card.Text>
                    </Card.Body>
                    <div className='text-center '>
                       <button onClick={()=>navigate('/fastTrackDetail')} className='py-2 px-5 border rounded-2 bg-info mb-3'>Checked</button>
                       </div>

                </Card>

            </CardGroup>
            <CardGroup className='w-75 mx-auto '>
                <Card className='m-4 shadow-lg rounded-3  card-right'>
                    <Card.Img variant="top" src="https://blog.myfitnesspal.com/wp-content/uploads/2018/03/How-Your-Music-Influences-Your-Workout-752x472.jpg" />
                    <Card.Body>
                        <Card.Title >ULTIMATE 8 Month</Card.Title>
                        <h5 className='text-danger'>$799<small>/Month</small></h5>
                        <Card.Text>
                            The ultimate life transformation journey package requires a 8 month commitment. i'm looking for change to their health and life.The first step always feels like the hardest in any life challenge. But you can genuinely start to change your life for the better in just eight short months. 
                        </Card.Text>
                    </Card.Body>
                    <div className='text-center mb-3'>
                       <button onClick={()=>navigate('/ultimateDetail')} className='py-2 px-5 border rounded-2 bg-info'>Checked</button>
                       </div>
                </Card>

                <Card className='m-4 shadow-lg rounded-3 card-left'>
                    <Card.Img variant="top" src="https://www.westend61.de/images/0000783991pw/group-of-people-in-gym-training-weight-lifting-HAPF01589.jpg" />
                    <Card.Body>
                        <Card.Title>6 Month Ultimate Life Transformation</Card.Title>
                        <h5 className='text-danger'>$499<small>/Month</small></h5>
                        <Card.Text>
                            Do you Want the ultimate result? Do you want a 6 month package that you can sustain that will give you the healthy benefits you crave.Do you want to learn how to achieve the body of your dreams and keep it so come.
                        </Card.Text>
                    </Card.Body>
                    <div className='text-center mb-3'>
                       <button onClick={()=>navigate('/lifeTransformCheckout')} className='py-2 px-5 border rounded-2 bg-info'>Checked</button>
                       </div>
                </Card>
            </CardGroup>
           </div>
        </div>
    );
};

export default Services;