import React from 'react';
import './Navbar.css';  
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <>
        <div className='bg'>
        <div className='container mx-auto py-[60px] flex justify-between items-center'>
            <div >
                <h1 className= ' color-dark font-extrabold text-[32px]'>CareerHub</h1>
            </div>
          <div className='link text-[16px]'>
            
            <Link to="/statistics" className='color-purple'>Statistics</Link>
            <Link to="/appliedjobs">Applied Jobs</Link>
            <Link to="/blogs">Blog</Link>
          </div>
          <div>
          <button className='my-btn'>Star Applying</button>
          </div>
        
        </div>
        </div>
       
        </>
    );
};

export default Navbar;