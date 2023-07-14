import React from 'react';
import './SingleCategory.css';

const SingleCategory = (props) => {
    const {nam, image, availableJobs} = props.category;
    return (
        <>
         <div className=''>
         <div className='sigle-box bg '>
            <div className='p-[40px]'>
            <div className='ico-bg flex items-center justify-center '>
            <img className="w-[40px] h-[40px] " src={image} alt="" />
            </div>
                <h2 className='color-dark font-extrabold text-[20px] pt-[32px] '>{nam}</h2>
                <p className='text-[16px] color-gray mt-[8px]'>{availableJobs} Jobs Available</p>
            </div>

            </div>
         </div>
            
        </>
    );
};

export default SingleCategory;