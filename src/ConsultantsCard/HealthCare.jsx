import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/profile.jpeg'
import img1 from "../assets/Dr.Ramesh.jpg"
import { UserAuth } from '../context/AuthContext';

const ProfileCard = ({ name, role, experience, fees, languages, image }) => {
  const { user } = UserAuth();

  return (
    <>
    {user?.displayName ? (
    
        <Link to='/form'>
        <div className="bg-black/50 rounded-lg shadow-lg overflow-hidden m-4 max-w-xs">
          <img className="w-full h-36 object-cover object-center" src={image} alt={name} />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2 text-white">{name}</h2>
            <p className="text-sm text-gray-700 mb-2">{role}</p>
            <p className="text-sm text-gray-700 mb-2">Experience:{experience}</p>
            <p className="text-sm text-gray-700 mb-2">Languages:{languages}</p>
            <p className="text-sm text-gray-700 mb-2">Fees: &#8377;{fees}</p>
            {/* You can add more information about the profile here */}
            <button className="bg-[#2952e3] hover:bg-[#172c76] text-white font-bold py-2 px-4 rounded-xl">
            Book Consultation
            </button>
          </div>
        </div>
        </Link>
      ) : (
    <Link to='/login'>
    <div className="bg-black/50 rounded-lg shadow-lg overflow-hidden m-4 max-w-xs">
      <img className="w-full h-36 object-cover object-center" src={image} alt={name} />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-white">{name}</h2>
        <p className="text-sm text-gray-700 mb-2">{role}</p>
        <p className="text-sm text-gray-700 mb-2">Experience:{experience}</p>
            <p className="text-sm text-gray-700 mb-2">Languages:{languages}</p>
            <p className="text-sm text-gray-700 mb-2">Fees: &#8377;{fees}</p>
        {/* You can add more information about the profile here */}
        <button className="bg-[#2952e3] hover:bg-[#172c76] text-white font-bold py-2 px-4 rounded-xl">
        Book Consultation
        </button>
      </div>
    </div>
    </Link>
    )}
    </>
  );
};

const HealthCare = () => {
  const profiles = [
    {
      name: "Dr.Ramesh Anjith",
      role: "Dr.Ramesh Anjith holds a prestigious MBBS degree from Chetinad Medical College,Chennai.Dr.Anjith has expertise in diagnosing & treating wide range of medical conditions.",
      experience:" 4 Years",
      languages: " English, Tamil",
      fees:"200",
      image: img1,
    },
    // {
    //   name: "Jane Smith",
    //   role: "",
    //   image: img,
    // },
    // {
    //   name: "Smith",
    //   role: "",
    //   image: img,
    // },
    // Add more profiles as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8  md:max-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-white underline">Our Experts</h1>
      <p className='text-white mb-4'>Here our Experts to help you!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
          
        ))}
      </div>
    </div>
  );
};

export default HealthCare;
