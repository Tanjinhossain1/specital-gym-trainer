import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.int';

const RequireAuth = ({children}) => {
    // get the user detail from react-firebase-hook 
   const [user,loading] = useAuthState(auth);
    let location = useLocation();

    // when user loading then show spinner 
    if (loading) {
        return (
            <div className='text-center spinner-container'>
                <Spinner animation="border" variant="dark" />
            </div>
        )
    }
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;