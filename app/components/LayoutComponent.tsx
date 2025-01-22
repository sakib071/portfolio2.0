"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { Space_Grotesk } from 'next/font/google'


const inter = Space_Grotesk({ subsets: ['latin'] })

const sections = ['profile', 'projects', 'work experience', 'articles'];

export default function Layoutcomponent({ }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Toggle the navbar
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust as needed to trigger earlier or later
    );

    sections.forEach((section) => {
      const target = document.getElementById(section);
      if (target) observer.observe(target);
    });

    return () => observer.disconnect(); // Clean up on component unmount
  }, []);
  const navOptions = sections.map((section) => (
    <li key={section} className="relative">
      <a
        href={`#${section}`}
        className={`relative cursor-pointer hover:text-teal-500 transition-colors text-base space-grotesk-400 
                ${activeSection === section ? 'text-teal-500' : ''}
            `}
      >
        {section.charAt(0).toUpperCase() + section.slice(1)}
        <span
          className={`absolute bottom-0 left-0 h-[2px] bg-teal-500 transition-all duration-500 transform-gpu origin-left
                ${activeSection === section ? 'w-full' : 'w-0'}
            `}
        ></span>
      </a>
    </li>
  ));
  return (
    <div className="lg:flex lg:justify-start space-grotesk-400">
      <div className={`navbar lg:h-screen bg-zinc-900 text-white min-h-[12px] top-0 left-0 mx-auto`}>
        <div className="navbar-start flex flex-col items-start w-full">
          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden">
            <button
              type="button"
              className={`relative size-10 m-1 flex justify-center items-center gap-2 rounded-lg font-medium text-zinc-400 shadow-sm border border-zinc-400`}
              aria-expanded={isOpen}
              onClick={handleToggle}
            >
              {!isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-14 left-0 right-0 transition-all duration-500 ease-in-out overflow-hidden z-50 bg-zinc-900 text-white ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
          style={{ transition: 'max-height 0.5s ease-in-out, opacity 0.5s ease-in-out' }}
        >
          <ul className="flex flex-col gap-5 mt-5 px-4 py-3">
            {navOptions}
          </ul>
        </div>

        <div className="navbar-center hidden lg:flex flex-col mx-auto w-[450px] justify-between h-[800px] p-5 items-start gap-10 mt-10 z-50 fixed left-52">
          <div className="flex flex-col gap-10">
            <Link href="/" className="flex flex-col text-lg">
              <Image width={300} height={300} className="h-40 w-32 rounded-lg object-cover mb-5" src="/Sakib.jpg" alt="Profile Picture" />
              <p className={`text-2xl font-bold space-grotesk-700 ${inter.className}`}>Mohammad Sakib Chowdhury</p>
              <p className={`text-xl font-semibold text-teal-400 space-grotesk-400`}>Front-end Developer</p>
              <p className={`text-base font-semibold mt-5 mb-10 text-zinc-300 space-grotesk-500`}>I bring digital designs to life, pixel by pixel.</p>
            </Link>
            <ul className="flex flex-col gap-10">
              {navOptions}
            </ul>
          </div>
          <div className="flex flex-col-reverse justify-start items-start gap-10">
            <div className="flex gap-3">
              <a href="https://github.com/sakib071" target="_blank" className={`text-2xl text-zinc-200 hover:text-teal-400 transition-colors`} rel="noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/mohammad-sakib-chowdhury-540984163/" target="_blank" className={`text-2xl text-zinc-200 hover:text-teal-400 transition-colors`} rel="noreferrer"><FaLinkedin /></a>
              <a href="https://www.facebook.com/sakibchy071?mibextid=ZbWKwL" target="_blank" className={`text-2xl text-zinc-200 hover:text-teal-400 transition-colors`} rel="noreferrer"><FaFacebookSquare /></a>
              <a href="https://www.instagram.com/mohammad._.sakib?igsh=MTRtZ2J6a3R2cjNhag==" target="_blank" className={`text-2xl text-zinc-200 hover:text-teal-400 transition-colors`} rel="noreferrer"><FaInstagram /></a>
            </div>


            {/* Theme toggle */}
            {/* <label className="swap swap-rotate">
                  <input onClick={toggleTheme} type="checkbox" className={`border ${theme === 'dark' ? 'border-zinc-700' : 'border-zinc-300'} rounded-full flex items-center justify-center`} value="synthwave" />
                  <svg className="swap-off h-4 w-4 m-1 fill-current flex items-center justify-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>
                  <svg className="swap-on h-4 w-4 m-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label> */}
          </div>
        </div>

      </div>
    </div>
  );
}
