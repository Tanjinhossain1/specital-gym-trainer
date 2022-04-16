import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className='border p-3 w-25 mt-5 mx-auto bg-light rounded-3'>
                <div className=''>
                    <div>
                        <h2 className=''>Create Account</h2>
                        <input className='w-100 py-2 border mt-4' type="email" name="email" id="" placeholder='Email' />

                        <input className='w-100 py-2 border mt-4' type="password" name="password" id="" placeholder='Password' />

                        <input className=' rounded-pill w-100 py-2 border submit-button mt-4' type="submit"  id="" value='Sign Up' />

                            <p className='mt-3 text-center'>Don't Have An Account? <Link to='/signup'>Create New Account</Link></p>

                            <div className='d-flex '>
                                <hr className='w-100'/>
                                <p className='mx-3'>or</p>
                                <hr className='w-100'/>
                            </div>
                            <div className='text-center'>
                                <img width={100} className='rounded-pill pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY4fEq7Y5RS5LgBJpkLQ7SqiIVDImxmRQI2WFHHkr6WYPQEtDXPaueCbakGkixOD6xoLk&usqp=CAU" alt="" />
                                <img width={80} className='ms-4 pointer' src="https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png" alt="" />

                                <img width={100} className='ms-4 rounded-pill' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;