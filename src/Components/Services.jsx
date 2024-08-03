import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import img1 from '../assets/Fitness Coach.jpg'
import img2 from '../assets/Personal Stylist.jpg'
import img3 from '../assets/Investment&Financial Advisors.jpg'
import img4 from '../assets/doctor.png'
import img5 from '../assets/Legal Guidance.jpg'
import img6 from '../assets/Web&App Development.jpg'
import img7 from '../assets/Marketing Consultant.jpg'
import img8 from '../assets/carrer Counselling.jpg'


const ServiceCard = ({ name, path, image }) => {
  const { user } = UserAuth();

  return (
    <>
        <Link to={path}>
        <div className="h-96 bg-black/50 rounded-lg shadow-lg overflow-hidden m-4 max-w-xs  shadow-white/35 relative flex flex-col justify-between">
        <img className="w-full h-36 object-cover object-center " src={image} alt={name} />
          <div className="p-6 ">
            <h2 className="text-xl font-bold mb-6 text-white">{name}</h2>
            <br />
            {/* You can add more information about the profile here */}
            <div className=''>
                <button className="bg-[#2952e3] hover:bg-[#172c76] text-white font-bold py-2 px-4 rounded-xl ">
            Book Consultation
            </button>
            </div>
            
          </div>
        </div>
        </Link>
      
    </>
  );
};

const services = () => {
  const profiles = [
    {
      name: "Doctors",
      path: '/services/healthcare&wellness',
      image: img4,
    },
    {
      name: "Legal Advisors",
      path: '/services/Legal Guidance',
      image: img5,
    },
    {
      name: "Marketing & Business Consultants",
      path: '/services/marketingconsultations',
      image: img7,
    },
    {
      name: "Carrer & Admission Counsellors",
      path: '/services/carrercounsellingconsultation',
      image: img8,
    },
    {
      name: "Investment & Financial Advisors",
      path: '/services/investment&financialadvisors',
      image: img3,
    },
    {
      name: "Web & App Developers",
      path: '/services/web-appdevelopment',
      image: img6,
    },
    {
      name: "Costume Designers/Personal Stylists",
      path: '/services/personalstylists-fashiondesigners',
      image: img2,
    },
    {
      name: "Personal Trainers/Fitness Coach",
      path: '/services/personaltrainer-fitnesscoach',
      image: img1,
    },
    // Add more profiles as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8  ">
      <h1 className="text-3xl font-bold mb-8 text-white underline">Our Services</h1>
      <p className='text-white mb-4'>Here are our sectors to help you!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {profiles.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default services;
