import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {

  const [services,setServices]=useState([])

  useEffect(()=>{
    fetch('services.json')
    .then(res=>res.json())
    .then(data=>setServices(data))
  },[])
  return (
    <div>

      <div className="text-center space-y-4 mb-8">
        <h5 className="text-lg font-bold text-[#FF3811]">Service</h5>
        <h2 className="text-3xl font-semibold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
        {

      services.map(service=><ServicesCard key={service._id} service={service}></ServicesCard>)

        }
      </div>
     
    </div>
  );
};

export default Services;