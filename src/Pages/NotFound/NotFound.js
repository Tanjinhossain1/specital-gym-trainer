import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
           
            <div className='text-center'>
                <img className='w-25' src="https://www.ecommerce-nation.com/wp-content/uploads/2018/10/404-error.jpg.webp" alt="" />
            </div>
             <div className='notfound'>
                <h2 className='text-center'>Page Not Found</h2>
            </div>
        </div>
    );
};

export default NotFound;