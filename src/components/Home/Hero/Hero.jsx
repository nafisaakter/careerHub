import React from 'react';
import './Hero.css';
import hero from '../../../assets/hero.png';

const Hero = () => {
    return (
        <>
        <div className='bg'>
        <div className='container mx-auto flex justify-between items-center '>
            <div className='pr-[70px]'>
                <h1 className='color-dark leading-snug font-extrabold text-[80px]'>One Step <br/> Closer To Your </h1>
                <h2 className='dream font-extrabold text-[80px]'>Dream Job</h2>

                <p className='text-[18px] color-gray pb-[32px] '>Explore thousands of job opportunities with all the <br/>
                 information you need. Its your future.
                     Come find it. Manage all your job application from start to finish.</p>
                     <button className='my-btn'>Get Started</button>
            </div>
            <div>
                <img src={hero} className='w-full h-[700px]' alt="" />
            </div>
        </div>
        </div>
        </>
    );
};

export default Hero;