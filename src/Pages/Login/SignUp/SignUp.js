import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.int';

const SignUp = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [passwordError, setPasswordError] = useState('');
    if (user) {
        navigate('/home')
    }
    const handleToSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirm - password.value;
        if (password !== confirmPassword) {
            setPasswordError('Password Not Match');
            return;
        }
        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div>
            <div className='border p-3 w-25 mt-5 mx-auto bg-light rounded-3'>
                <div className=''>
                    <form onSubmit={handleToSubmit}>
                        <div>
                            <h2 className='mb-5'>Create Account</h2>
                            <input className='w-100 py-2 border' type="text" name="name" id="" placeholder='Name' />

                            <input className='w-100 py-2 border mt-4' type="email" name="email" id="" placeholder='Email' />


                            <input className='w-100 py-2 border mt-4' type="password" name="password" id="" placeholder='Password' />


                            <input className='w-100 py-2 border mt-4' type="password" name="confirm-password" id="" placeholder='Confirm-Password' />
                            <p className='text-danger'> {passwordError}</p>
                            <p className='text-danger'> {error?.message.slice(22, 42)}</p>
                            <input className=' rounded-pill w-100 py-2 border submit-button mt-4' type="submit" id="" value='Sign Up' />

                            <p className='mt-3 text-center'>Already Have An Account? <Link to='/login'>Login</Link></p>

                            <div className='d-flex '>
                                <hr className='w-100' />
                                <p className='mx-3'>or</p>
                                <hr className='w-100' />
                            </div>
                            <div className='text-center'>
                                <img width={100} className='rounded-pill pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY4fEq7Y5RS5LgBJpkLQ7SqiIVDImxmRQI2WFHHkr6WYPQEtDXPaueCbakGkixOD6xoLk&usqp=CAU" alt="" />
                                <img width={80} className='ms-4 pointer' src="https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png" alt="" />

                                <img width={100} className='ms-4 rounded-pill' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;