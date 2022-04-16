import React from 'react';
import './Footer.css';


const Footer = () => {
    const date = new Date();
    const year  = date.getFullYear()

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
            <hr className='w-75 mx-auto' />
            <div className='d-flex justify-content-between align-items-center w-75 mx-auto'>
                <p><span className='symbol'>©</span> COPYRIGHT {year}. ALL RIGHTS RESERVED</p>
                <p>Website Design by My Personal Trainer Website</p>
            </div>
        </div>
    );
};

export default Footer;