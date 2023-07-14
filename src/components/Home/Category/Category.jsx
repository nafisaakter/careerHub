import React, { useEffect } from 'react';
import { useState } from 'react';
import SingleCategory from './SingleCategory/SingleCategory';

const Category = () => {
    const [categorys, setCategory] = useState([])
    useEffect(() => {
        fetch("category.json")
          .then((res) => res.json())
          .then((data) => setCategory(data));
      }, []);
    return (
        <>
            <div>
                <div className='text-center pt-[130px] pb-[32px]'>
                    <h2 className='color-dark font-extrabold text-[48px] mb-[16px]'>Job Category List</h2>
                    <p>Explore thousands of job 
                        opportunities with all the information you need. Its your future</p>
                </div>
                <div className="container mx-auto flex justify-between items-center">
            {categorys.map((category) => (
              <SingleCategory category={category}></SingleCategory>
            ))}
          </div>
                
            </div>
        </>
    );
};

export default Category;