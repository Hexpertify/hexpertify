import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/Boney.png'
import img1 from "../assets/Rijo.png"
import img2 from "../assets/Sairaj.png"
import img3 from "../assets/Mridul.png"
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

const MarketingConsultations = () => {
  const profiles = [
    {
      name: "Rijo Antony",
      role: "Rijo Antony is a digital marketer with expertise in different niches.Mr.Antony have crafted and executed digital marketing strategies for more than 40 clients across the globe.",
      experience: " 6 Years",
      languages: " English, Malayalam",
      fees: "29+299(2 sessions with a crafted strategy)",
      image: img1,
    },
    {
      name: "Sairaj Kadam",
      role: "Sairaj operates a multipurpose agency dedicated to offering comprehensive services to Every kind business. Through strategic advice, consulting, and creative solutions, I specialize in helping businesses achieve growth and success.",
      experience: " 1 Years",
      languages: " English, Hindi, Marathi",
      fees: "Free",
      image: img2,
    },
    {
      name: "Boney Paulson",
      role: "Boney Paulson leads a consultancy firm called Finvale Consultancy Services, offering a wide range of services such ad Business Proposals, Pitch Decks, Investor Presentations, ESI & PF filings, GST & ITR filing.",
      experience: " 3 Years",
      languages: " English, Hindi, Malayalam",
      fees: "1199",
      image: img,
    },
    {
      name: "Mridul Chandhok , BBA",
      role: "Mridul is a Business Consultant focused on Growth and Strategy consulting,Market Research and Analysis,Brand Development and Storytelling,Business Basics and also helps you in implementing those strategies.",
      experience: "2 years",
      languages: "English,Hindi,German",
      image: img3,
      fees: "1499"
    }
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

export default MarketingConsultations;
