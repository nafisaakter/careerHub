import React from 'react';
import { useState,useEffect } from 'react';
import SingleFeature from './SingleFeature/SingleFeature';
const Feature = () => {
    const [features, setFeature] = useState([]);
    const [showAll, setShowAll] = useState(false);
    useEffect(() => {
        fetch("jobs.json")
            .then((res) => res.json())
            .then((data) => setFeature(data));
    }, []);
    const handleShowAll = () => {
        setShowAll(true);
      };
    return (
        <>
            <div>
            <div className='container mx-auto items-center'>
        <div className='text-center pt-[130px] pb-[32px]'>
          <h2 className='color-dark font-extrabold text-[48px] mb-[16px]'>Featured Jobs</h2>
          <p>Explore thousands of job opportunities with all the information you need. It's your future</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {showAll
            ? features.map((feature) => (
                <SingleFeature key={feature.id} feature={feature} />
              ))
            : features.slice(0, 4).map((feature) => (
                <SingleFeature key={feature.id} feature={feature} />
              ))}
        </div>
       <div className='flex justify-center'>
       {!showAll && (
          <button
            className="my-btn mt-[40px] mb-[130px]"
            onClick={handleShowAll}
          >
            See All Jobs
          </button>
        )}
       </div>
      </div>
         
              
            </div>
        </>
    );
};

export default Feature;