import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        <div>
            <div className='border p-3 w-25 mt-5 mx-auto bg-light rounded-3'>
                <div className=''>
                    <div>
                        <h2 className='mb-5'>Create Account</h2>
                        <input className='w-100 py-2 border' type="text" name="name" id="" placeholder='Name' />

                        <input className='w-100 py-2 border mt-4' type="email" name="email" id="" placeholder='Email' />


                        <input className='w-100 py-2 border mt-4' type="password" name="password" id="" placeholder='Password' />


                        <input className='w-100 py-2 border mt-4' type="password" name="confirm-password" id="" placeholder='Confirm-Password' />

                        <input className=' rounded-pill w-100 py-2 border submit-button mt-4' type="submit"  id="" value='Sign Up' />

                            <p className='mt-3 text-center'>Already Have An Account? <Link to='/login'>Login</Link></p>

                            <div className='d-flex '>
                                <hr className='w-100'/>
                                <p className='mx-3'>or</p>
                                <hr className='w-100'/>
                            </div>
                            <div>
                                <img width={100} className='google-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY4fEq7Y5RS5LgBJpkLQ7SqiIVDImxmRQI2WFHHkr6WYPQEtDXPaueCbakGkixOD6xoLk&usqp=CAU" alt="" />
                                <img width={80} className='ms-4' src="https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png" alt="" />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;