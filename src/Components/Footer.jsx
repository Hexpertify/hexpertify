import React from "react";


const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">

    <div className="flex justify-center items-center flex-col mt-5">
      {/* <p className="text-white text-xs text-center">Come join us and hear for the unexpected miracle</p> */}
      <a className="text-white text-sm text-center underline font-medium mt-2 cursor-pointer" href="https://mail.google.com/mail/?view=cm&fs=1&to=hexpertifyapp@gmail.com&su=Subject&body=Body%20Text">hexpertifyapp@gmail.com</a>
      
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">HEXPERTIFY &copy; {new Date().getFullYear()}</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;