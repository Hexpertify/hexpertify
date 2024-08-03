import React from 'react'
import {Link} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import Service from '../Components/Services'

const Home = () => {
  const { user} = UserAuth();

  return (
    <>
    <div className='flex  w-full justify-center mx-auto px-4 mt-8'>
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20  px-2">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          {/* <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1 ">
          At <span className='font-semibold'>HeXpertify</span>  <br /> We Specialize In Helping Individuals & Businesses Consult Skilled Professionals Of Any <span className='font-semibold'>Sector...</span>
          </h1> */}
          <p className="text-3xl sm:text-5xl text-white py-1 ">
              One Stop Solution To Meet <span className='text-blue-400 font-semibold'>PRO</span>fessionals Online
          </p>
          <Link to='/services'>
          <button
              type="button"
              
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-2 rounded-xl cursor-pointer hover:bg-[#2546bd] "
            >
              {/* <AiFillPlayCircle className="text-white mr-2" /> */}
              {user? (
                <button  className="text-white text-base font-semibold">CONNECTED</button>
                 ) : (
                  <p className="text-white text-base font-semibold">
                    Connect with Us
                  </p>
                  )}
            </button>
            </Link>
          </div>
        </div>
    </div>
    <Service/>
    </>
  )
}

export default Home
