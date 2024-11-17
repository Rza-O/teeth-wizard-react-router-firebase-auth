import React from 'react';
import Banner from '../Banner/Banner';
import { NavLink, useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';
import Feedback from '../Feedback/Feedback';

const Home = () => {
    const services = useLoaderData();
    const { serviceData, feedBackData } = services;
    return (
        <div>
            <Banner></Banner>
            <div className='grid grid-cols-4 w-[80%] mx-auto max-w-[1200] gap-6 mt-7'>
                {
                    serviceData.slice(0, 4).map(service => <ServiceCard service={service}></ServiceCard>)
                }
            </div>
            <NavLink to='/allTreatments'>
                <button className='mx-auto block btn btn-primary mt-4 '>Show More</button>
            </NavLink>

            <Feedback feedBackData={feedBackData}></Feedback>
        </div>
    );
};

export default Home;