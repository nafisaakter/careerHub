import React from "react";
import "./ViewDetails.css";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from 'axios';
const ViewDetails = () => {
  const { id } = useParams();
  const [features, setFeature] = useState([]);

  useEffect(() => {
    fetch("../../../public/jobs.json")
      .then((res) => res.json())
      .then((data) => setFeature(data.find((job) => job.id === Number(id))));
  }, []);
  const [appliedJobs, setAppliedJobs] = useState([]); 
  const hanleApplyJob = async (id) => {
   try{
     const res = await axios.post('/api/apply', {id});
     if(res.data.success){
       alert('Applied Successfully');
       setAppliedJobs([...appliedJobs, id]);
     }
   }
   catch(err){
     console.log(err);
   }
   };
  return (
    <div>
      <div>
        <h2 className="color-dark font-extrabold text-[32px] mb-[140px] mt-[125px] text-center">
          Job Details
        </h2>
      </div>
      <div className="container mx-auto items-center mb-[125px]">
        <div className="grid grid-cols-3 gap-4 justify-center ">
          <div className="col-span-2">
          <p className="font-extrabold text-[16px] text-[#1A1919] details-head">
                Job Description: <span className="font-normal text-[16px] details-pargrp">{features.jobDescription}</span>
              </p>
              <p className="font-extrabold text-[16px] text-[#1A1919] details-head">
                Job Resposibility: <span className="font-normal text-[16px] details-pargrp">{features.jobRes}</span>
              </p>
          
            <h2 className="details-head">Educational Requirements:</h2>
            <p className="details-pargrp">{features.requirements}</p>
            <h2 className="details-head">Experiences:</h2>
            <p className="details-pargrp">{features.experience}</p>
          </div>
          <div className="col-span-1">
            <div className="card p-[30px]">
              <h2 className="text-[20px] font-extrabold brdr pb-[25px]">Job Details</h2>
              <p className="font-bold text-[20px] text-[#474747] pt-[25px] pb-[10px]">
                Salary: <span className="font-normal text-[16px]">{features.salary}</span>
              </p>
              <p className="font-bold text-[20px] text-[#474747]">
              Job Title: <span className="font-normal text-[16px]">{features.position}</span>
              </p>
              <div>
                <h2 className="text-[20px] font-extrabold brdr pt-[30px] pb-[25px]">
                  Contact Information
                </h2>
                <p className="font-bold text-[20px] text-[#474747] pt-[25px] pb-[10px]">
                Phone: <span className="font-normal text-[16px]">+35690222</span>
              </p>
              <p className="font-bold text-[20px] text-[#474747] pb-[10px]">
                Email: <span className="font-normal text-[16px]">abc@gmail.com</span>
              </p>
              <p className="font-bold text-[20px] text-[#474747]">
                Address: <span className="font-normal text-[16px]">{features.place}</span>
              </p>
                
              </div>
            </div>
            <button onClick={() => hanleApplyJob(id)} className="my-btn mt-[25px] text-center">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
