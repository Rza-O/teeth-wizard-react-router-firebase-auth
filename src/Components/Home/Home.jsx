import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Home = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div>
            <Banner></Banner>
            <div className='grid grid-cols-4 w-[80%] mx-auto max-w-[1200] gap-6 mt-7'>
                {
                    services.map(service => <ServiceCard service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Home;