import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div>
            <div className='footer-container w-75 mx-auto mt-5'>
                <div>
                    <h4>Services</h4>
                    <div>
                    <p className='mb-2 pointer mt-4 text-decoration-underline'>Personal Training</p>
                    <p className='mb-2 pointer text-decoration-underline'>Nutrition Coaching</p>
                    <p className=' pointer text-decoration-underline'>Online Personal Training</p>
                    </div>
                </div>
                <div>
                    <h4>Company</h4>
                    <p className='mb-2 mt-4 text-decoration-underline pointer'>About</p>
                    <p className='pointer text-decoration-underline'>Blog</p>
                </div>
                <div>
                <h4 className=''>Support</h4>
                <p className='text-decoration-underline pointer'>Contact</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;