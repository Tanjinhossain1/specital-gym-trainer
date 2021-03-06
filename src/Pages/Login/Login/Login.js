import { async } from '@firebase/util';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import React, { useRef, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.int';


const Login = () => {
    // using useRef 
    let emailRef = useRef('')
    const [eyeOpen, setEyeOpen] = useState(false);

    // using SignIn With Email And Password
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
    // using reset email password 
    const [sendPasswordResetEmail, sending ] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    // sign in with google 
    const [signInWithGoogle, googleUser, googleLoading] = useSignInWithGoogle(auth);
    // sign with facebook 
    const [signInWithFacebook, facebookUser] = useSignInWithFacebook(auth);
    // sign in with github
    const [signInWithGithub, gitHubUser] = useSignInWithGithub(auth);

    // using location for user login then return him/her back page
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // when any one method is working then navigate from user page
    if (user || googleUser || facebookUser || gitHubUser) {
        navigate(from)
    }

    // when user click login button then behind the create user show spinner 
    if (loading || sending || googleLoading) {
        return (
            <div className='text-center spinner-container'>
                <Spinner animation="border" variant="dark" />
            </div>
        )
    }

    // all input container form submit 
    const handleToSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
        console.log(email, password)
    }

    // password reset handler 
    const passwordReset = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Reset Password Sent')
        } else {
            toast('please enter your email')
        }

    }
   
    return (
        <div>
            <div className='border p-3 mt-5 mx-auto  rounded-3 signup-container '>
                <ToastContainer></ToastContainer>
                <div className=''>
                    <form onSubmit={handleToSubmit}>
                        <div>
                            <h2 className=''>Login</h2>
                            <input className='w-100 px-2 py-2 border mt-4' ref={emailRef} type="email" name="email" id="" placeholder='Email' required />

                            <input className='w-100 px-2 py-2 border mt-4' type={eyeOpen ? 'text' : "password"} name="password" id="" placeholder='Password' required />


                            {eyeOpen ? <EyeIcon onClick={() => setEyeOpen(!eyeOpen)} className="  field-icon" /> : <EyeOffIcon onClick={() => setEyeOpen(!eyeOpen)} className='field-icon'></EyeOffIcon>}

                            <p className='text-danger'> {error?.message.slice(22, 42)}</p>
                            <input className=' rounded-pill w-100 py-2 border submit-button mt-4' type="submit" id="" value='Login' />

                            <p className='mt-3 text-center'>Don't Have An Account? <Link to='/signup'>Create New Account</Link></p>

                        </div>

                    </form>

                   <p className='text-center'>Lost Your Password?  <button onClick={passwordReset} className='btn btn-link'>Forgat Password</button></p>

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

            </div>
        </div>
    );
};

export default Login;