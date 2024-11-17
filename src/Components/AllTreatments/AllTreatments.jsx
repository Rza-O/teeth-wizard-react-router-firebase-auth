import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const AllTreatments = () => {
    const services = useLoaderData();
    return (
        <div className='grid grid-cols-4 w-[80%] mx-auto max-w-[1200] gap-6 mt-7'>
            {
                services.map(service => <ServiceCard service={service}></ServiceCard>)
            }
        </div>
    );
};

export default AllTreatments;