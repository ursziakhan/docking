import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-newback text-primary ">
      <div className="container mx-auto w-4/5 md:w-4/5 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 flex  max-w-8xl ">
          <div className="mb-8 ">
            <h3 className="text-xl font-bold mb-4 p-2">company Logo</h3>
            <p className="text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at tortor vel nulla consectetur rhoncus.</p>
          </div>
          <div className="mb-8  ">
            <h3 className="text-xl font-bold mb-4 p-2">Contact</h3>
            <p className="text-sm ">Email:ursziakhan@.com</p>
            <p clasgmailsName="text-sm ">Phone: +46 720-450414</p>
          </div>
          <div className="mb-8 ">
            <h3 className="text-xl font-bold mb-4 p-2">Links</h3>
            <ul className="text-sm flex   ">
            
              <li><a href="leases" className="text-blue-300 hover:text-blue-500 hover:bg-primary p-2 hover:text-newback rounded">Leases</a></li>
              <li><a href="rentals" className="text-blue-300 hover:text-blue-500 hover:bg-primary p-2 hover:text-newback rounded ">Rentals</a></li>
              <li><a href="contact" className="text-blue-300 hover:text-blue-500 hover:bg-primary p-2 hover:text-newback rounded">Contact</a></li>
              <li><a href="login" className="text-blue-300 hover:text-blue-500 hover:bg-primary p-2 hover:text-newback rounded">Login</a></li>

            </ul>
          </div>
          <div className="mb-8 sm:ml-6  ">
            <h3 className="text-xl font-bold mb-4 p-2 ">Follow Us</h3>
            <div className="flex gap-4 sm:p-2">
              <a href="#" className="  border-2 border-[#edf2f7] p-2 rounded-full hover:bg-primary p-2 hover:text-newback rounded"> <FaFacebookF  className='text-sm'/></a>
              <a href="#" className="border-2 border-[#edf2f7] p-2 rounded-full  hover:bg-primary p-2 hover:text-newback rounded"><FaInstagram  className='text-sm'/></a>
            
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-600" />
        <p className="text-center text-sm">© 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
