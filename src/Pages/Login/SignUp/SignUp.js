import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.int';
import { async } from '@firebase/util';
import { Spinner } from 'react-bootstrap';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
    const [eyeOpen, setEyeOpen] = useState(false);
    const [confirmPasswordEeyOpen, setConfirmPasswordEeyOpen] = useState(false)
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);

    const [passwordError, setPasswordError] = useState('');
    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser] = useSignInWithFacebook(auth);
    const [signInWithGithub, gitHubUser] = useSignInWithGithub(auth);

    if (googleUser || facebookUser || gitHubUser) {
        navigate('/home')
    }


    const handleToSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        if (password !== confirmPassword) {
            setPasswordError('Password Not Match');
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        await sendEmailVerification();
        if (sendEmailVerification) {
            toast("Send Email Verification");
            setPasswordError('')
        }
    }
    
    if (loading || updating) {
        return (
            <div className='text-center spinner-container'>
                <Spinner animation="border" variant="dark" />
            </div>
        )
    }

    return (
        <div>

            <div className='border p-3 w-25 mt-5 mx-auto bg-light rounded-3'>
                <div className=''>
                    <ToastContainer />
                    <form onSubmit={handleToSubmit}>
                        <div>
                            <h2 className='mb-5'>Create Account</h2>
                            <input className='w-100 py-2 px-2 border' type="text" name="name" id="" placeholder='Name' required />

                            <input className='w-100 px-2 py-2 border mt-4' type="email" name="email" id="" placeholder='Email' required />


                            <input className='w-100 px-2 py-2 border mt-4' type={eyeOpen ? 'text' : "password"} name="password" id="" placeholder='Password' required />
                            {eyeOpen ? <EyeIcon onClick={() => setEyeOpen(!eyeOpen)} className="  field-icon" /> : <EyeOffIcon onClick={() => setEyeOpen(!eyeOpen)} className='field-icon'></EyeOffIcon>}



                            <input className='w-100 px-2 py-2 border mt-4' type={confirmPasswordEeyOpen ? 'text' : "password"} name="confirmPassword" id="" placeholder='Confirm-Password' required />
                            {confirmPasswordEeyOpen ? <EyeIcon onClick={() => setConfirmPasswordEeyOpen(!confirmPasswordEeyOpen)} className="  field-icon" /> : <EyeOffIcon onClick={() => setConfirmPasswordEeyOpen(!confirmPasswordEeyOpen)} className='field-icon'></EyeOffIcon>}


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
                                <img onClick={() => signInWithGoogle()} width={100} className='rounded-pill pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY4fEq7Y5RS5LgBJpkLQ7SqiIVDImxmRQI2WFHHkr6WYPQEtDXPaueCbakGkixOD6xoLk&usqp=CAU" alt="" />


                                <img onClick={() => signInWithFacebook()} width={80} className='ms-4 pointer' src="https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png" alt="" />

                                <img onClick={() => signInWithGithub()} width={100} className='ms-4 rounded-pill' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;