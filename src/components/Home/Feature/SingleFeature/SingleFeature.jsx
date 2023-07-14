import React from 'react';
import './SingleFeature.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faLocationDot, } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const SingleFeature = (props) => {
   const {img,company, position, place, salary, id} = props.feature;
    return (
        <>
            <div>
                <div className='s-f-box'>
                    <img className='w-[160px] h-[40px]' src={img} alt="" />
                    <h2 className='color-dark font-extrabold text-[24px] mt-[32px]'>{position}</h2>
                    <p className='font-semibold text-[20px] mt-[8px] color-gray'>{company}</p>
                    <ul className='grid grid-cols-2 gap-4 font-semibold text-[20px] mb-[25px] color-gray'>
                        <li> <FontAwesomeIcon className='pr-1' icon={faLocationDot} />{place}</li>
                        <li> <FontAwesomeIcon className='pr-1' icon={faDollarSign} />Salary: {salary}</li>
                    </ul>
                    <Link to ={`/details/${id}`} className='view-btn'>View Details</Link>

                </div>
            </div>
        </>
    );
};

export default SingleFeature;