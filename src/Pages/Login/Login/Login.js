import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.int';

const Login = () => {
    const [eyeOpen, setEyeOpen] = useState(false);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate();
      const [signInWithGoogle,googleUser,googleLoading] = useSignInWithGoogle(auth);
      const [signInWithFacebook, facebookUser] = useSignInWithFacebook(auth);

      const location = useLocation();
      let from = location.state?.from?.pathname || "/";

      if(user || googleUser || facebookUser){
          navigate(from)
      }
      if (loading || googleLoading) {
        return (
            <div className='text-center spinner-container'>
                <Spinner animation="border" variant="dark" />
            </div>
        )
    }
      const handleToSubmit = (event) =>{
          event.preventDefault();
          const email = event.target.email.value;
          const password = event.target.password.value;
          signInWithEmailAndPassword(email,password)
      }
    return (
        <div>
            <div className='border p-3 w-25 mt-5 mx-auto bg-light rounded-3'>
                <div className=''>
                   <form onSubmit={handleToSubmit}>
                   <div>
                        <h2 className=''>Login</h2>
                        <input className='w-100 px-2 py-2 border mt-4' type="email" name="email" id="" placeholder='Email' />
                        <input className='w-100 px-2 py-2 border mt-4' type={eyeOpen ?'text': "password"} name="password" id="" placeholder='Password' required />
                           {eyeOpen ?  <EyeIcon onClick={()=>setEyeOpen(!eyeOpen)} className="  field-icon" />: <EyeOffIcon onClick={()=>setEyeOpen(!eyeOpen)} className='field-icon'></EyeOffIcon> }

                           <p className='text-danger'> {error?.message.slice(22, 42)}</p>
                        <input className=' rounded-pill w-100 py-2 border submit-button mt-4' type="submit"  id="" value='Login' />

                            <p className='mt-3 text-center'>Don't Have An Account? <Link to='/signup'>Create New Account</Link></p>

                            <div className='d-flex '>
                                <hr className='w-100'/>
                                <p className='mx-3'>or</p>
                                <hr className='w-100'/>
                            </div>
                            <div className='text-center'>
                                <img onClick={()=>signInWithGoogle()} width={100} className='rounded-pill pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY4fEq7Y5RS5LgBJpkLQ7SqiIVDImxmRQI2WFHHkr6WYPQEtDXPaueCbakGkixOD6xoLk&usqp=CAU" alt="" />

                                <img onClick={()=>signInWithFacebook()} width={80} className='ms-4 pointer' src="https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png" alt="" />

                                <img width={100} className='ms-4 rounded-pill' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
                            </div>
                    </div>
                   </form>
                </div>
            </div>
        </div>
    );
};

export default Login;