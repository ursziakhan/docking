// Nav.js

"use client"
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Popup from './Popup';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Nav({ initialActive }) {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(initialActive);
  const [showPopup, setShowPopup] = useState(false);
  const navRef = useRef(null);

  const open = () => {
    setToggle(!toggle);
  };

  function showPopupHandler(e) {
    setShowPopup(true);
    change(e);
  }

  function closePopupHandler(e) {
    setShowPopup(false);
    change(e);
  }

  const change = (e) => {
    let ids = e.target.id;
    ids = Number(ids);
    setActive(ids);

    if (navRef.current) {
      navRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-newback shadow p-4 font-bold ">
      <div className="max-w-[1240px] flex justify-between py-[15px] mx-auto">
        <div className="text-2xl font-bold">My Logo</div>
        {toggle ? (
          <AiOutlineClose
            onClick={open}
            className="text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={open}
            className="text-white text-2xl md:hidden block"
          />
        )}

        <ul className="hidden md:flex gap-6" ref={navRef}>
          <li className=" hover:bg-primary hover:text-newback hover:border-xl rounded p-2  ">
            <Link
              href="/"
              id="0"
              onClick={change}
              className={active === 0 ? 'bg-secondary' : ''}
            >
              Home
            </Link>
          </li>
          <li className=' hover:bg-primary hover:text-newback hover:border-xl rounded p-2 '>
            <Link
              href="/rentals"
              id="1"
              onClick={change}
              className={active === 1 ? 'bg-secondary' : ''}
            >
              Docks Rentals
            </Link>
          </li>
          <li className=' hover:bg-primary hover:text-newback hover:border-xl rounded p-2 '>
            <Link
              href="/leases"
              id="2"
              onClick={change}
              className={active === 2 ? 'bg-secondary' : ''}
            >
              Moring Leasing
            </Link>
          </li>
          <li className=' hover:bg-primary hover:text-newback hover:border-xl rounded p-2 '>
            <Link
              href="/contact"
              id="3"
              onClick={change}
              className={active === 3 ? 'bg-secondary' : ''}
            >
              Contact us
            </Link>
          </li>
          <li className=' hover:bg-primary hover:text-newback hover:border-xl rounded p-2 '>
            <Link
              href="/about"
              id="4"
              onClick={change}
              className={active === 4 ? 'bg-secondary' : ''}
            >
              About
            </Link>
          </li>
        </ul>

        <ul className="hidden md:flex text-white gap-10">
          <li className=' hover:bg-primary hover:text-newback hover:border-xl rounded p-2 '>
        
            <Link
              href="/signin"
              id="4"
              onClick={change}
              className={active === 5 ? 'bg-secondary' : ''}
            >
              Login
            </Link>
            </li>
        </ul>

        {/* Responsive Menu */}
        <ul
          className={`md:hidden w-full h-screen z-20 text-white fixed bg-black top-[92px] bg-optional text-primary
          ${toggle ? 'left-[0]' : 'left-[-100%]'}`}
        >
          <li className="p-5">
            <Link
              href="/"
              data-id="7"
              onClick={change}
              style={
                active === 7
                  ? {
                      color: 'blue', // Set the text color to blue when active
                      fontWeight: 'bold', // Set the font weight to bold when active
                    }
                  : {} // Empty object for non-active links (default styles)
              }
            >
              Home
            </Link>
          </li>
          {/* Add other mobile menu items here */}
        </ul>
      </div>
      {showPopup && <Popup closePopupHandler={closePopupHandler} />}
    </div>
  );
}

export default Nav;
