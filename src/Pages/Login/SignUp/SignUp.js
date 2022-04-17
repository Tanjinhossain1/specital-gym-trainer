import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.int';
import { async } from '@firebase/util';
import { Spinner } from 'react-bootstrap';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';



const SignUp = () => {
    // this is password showing state 
    const [eyeOpen, setEyeOpen] = useState(false);
    // this is also confirm-password showing state 
    const [confirmPasswordEeyOpen, setConfirmPasswordEeyOpen] = useState(false);
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate();

    // sign up the user email and password 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    // update the user profile like displayName 
    const [updateProfile, updating] = useUpdateProfile(auth);

    // using user Email Verification
    const [sendEmailVerification] = useSendEmailVerification(auth);

    const [passwordError, setPasswordError] = useState('');
    // sign in with google
    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
    // sign in with facebook 
    const [signInWithFacebook, facebookUser] = useSignInWithFacebook(auth);
    // sign in with github 
    const [signInWithGithub, gitHubUser] = useSignInWithGithub(auth);

    // when user have than go the home 
    if (user || googleUser || facebookUser || gitHubUser) {
        navigate('/home')
    }

        // form handle to submit 
    const handleToSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        // password or confirmPassword checked 
        if (password !== confirmPassword) {
            setPasswordError('Password Not Match');
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        await sendEmailVerification();
    }
    
    // when user loading then show spinner 
    if (loading || updating) {
        return (
            <div className='text-center spinner-container'>
                <Spinner animation="border" variant="dark" />
            </div>
        )
    }

    return (
        <div>

            <div className='border p-3 mt-5 mx-auto  rounded-3 signup-container'>
                <div className=''>
                    <form onSubmit={handleToSubmit}>
                        <div>
                            <h2 className='mb-5'>Create Account</h2>
                            <input className='w-100 py-2 px-2 border' type="text" name="name" id="" placeholder='Name' required />

                            <input className='w-100 px-2 py-2 border mt-4' type="email" name="email" id="" placeholder='Email' required />


                            <input className='w-100 px-2 py-2 border mt-4' type={eyeOpen ? 'text' : "password"} name="password" id="" placeholder='Password' required />
                            {eyeOpen ? <EyeIcon onClick={() => setEyeOpen(!eyeOpen)} className="  field-icon" /> : <EyeOffIcon onClick={() => setEyeOpen(!eyeOpen)} className='field-icon'></EyeOffIcon>}



                            <input className='w-100 px-2 py-2 border mt-4' type={confirmPasswordEeyOpen ? 'text' : "password"} name="confirmPassword" id="" placeholder='Confirm-Password' required />
                            {confirmPasswordEeyOpen ? <EyeIcon onClick={() => setConfirmPasswordEeyOpen(!confirmPasswordEeyOpen)} className="  field-icon" /> : <EyeOffIcon onClick={() => setConfirmPasswordEeyOpen(!confirmPasswordEeyOpen)} className='field-icon'></EyeOffIcon>}

                            <input className='mt-4' onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="" />
                            {agree ? <label className='text-success ms-2' htmlFor="terms">Allow Success</label>:<label className='text-danger ms-2' htmlFor="terms"> Allow All Condition</label>}
                            

                            <p className='text-danger'> {passwordError}</p>
                            <p className='text-danger'> {error?.message.slice(22, 42)}</p>
                            <input  disabled={!agree} className=' rounded-pill w-100 py-2 border submit-button mt-4' type="submit" id="" value='Sign Up' />

                            <p className='mt-3 text-center'>Already Have An Account? <Link to='/login'>Login</Link></p>

                            <div className='d-flex '>
                                <hr className='w-100' />
                                <p className='mx-3'>or</p>
                                <hr className='w-100' />
                            </div>
                            <div className='text-center '>
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