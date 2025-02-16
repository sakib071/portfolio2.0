"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebookSquare, FaInstagram, FaBehanceSquare } from "react-icons/fa";
import { Space_Grotesk } from 'next/font/google';
import Blur01 from '@/public/blur/gradientblob-2.png';
import Blur02 from '@/public/blur/blob-01.png';
import CustomButton from "./CustomButton";
// import ResumeDownload from "./ResumeDownload";

const inter = Space_Grotesk({ subsets: ['latin'] });

const sections = ['profile', 'projects', 'work experience', 'articles', 'tour'];

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

  const handleScroll = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navOptions = sections.map((section) => (
    <li key={section} className="relative">
      {section === "tour" ? (
        <div className="group relative cursor-not-allowed text-zinc-500">
          <span className="cursor-pointer">Tour</span>
          <div className="absolute left-1/2 transform -translate-x-28 -bottom-1 bg-zinc-800 text-white text-xs px-3 py-2 rounded-md transition-opacity duration-300">
            🚀 Coming Soon
          </div>
        </div>
      ) : (
        <button
          onClick={() => handleScroll(section)}
          className={`relative cursor-pointer hover:text-teal-500 transition-colors text-base space-grotesk-400 
                  ${activeSection === section ? 'text-teal-500' : ''}`}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
          <span
            className={`absolute bottom-0 left-0 h-[2px] bg-teal-500 transition-all duration-500 transform-gpu origin-left
                  ${activeSection === section ? 'w-full' : 'w-0'}`}
          ></span>
        </button>
      )}
    </li>
  ));

  return (
    <div className="lg:flex lg:justify-start space-grotesk-400">
      {/* Blur Image 1 with Rotation Animation */}
      <Image
        src={Blur01}
        alt=""
        className="w-[500px] opacity-30 fixed top-0 -left-10 animate-rotate-slow"
      />

      <div className={`navbar lg:h-screen text-zinc-900 min-h-[12px] top-0 left-0 mx-auto`}>
        <div className="navbar-start flex flex-col items-start w-full">
          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden">
            <button
              type="button"
              className={`relative size-10 m-1 flex justify-center items-center gap-2 rounded-lg font-medium text-zinc-900 shadow-sm border border-zinc-400`}
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
          className={`lg:hidden bg-white absolute top-14 left-0 right-0 transition-all duration-500 ease-in-out overflow-hidden z-50 text-zinc-900 ${isOpen ? 'max-h-[300px] h-full opacity-100' : 'max-h-0 opacity-0'}`}
          style={{ transition: 'max-height 0.5s ease-in-out, opacity 0.5s ease-in-out' }}
        >
          <ul className="flex flex-col gap-5 mt-5 px-4 py-3">
            {navOptions}
            <CustomButton />
          </ul>
        </div>

        <div className="navbar-center hidden lg:flex flex-col mx-auto w-[450px] justify-between h-[800px] p-5 items-start gap-10 mt-5 z-50 fixed left-52">
          <div className="flex flex-col gap-10">
            <Link href="/" className="flex flex-col text-lg">
              <Image width={1000} height={1000} className="h-full w-36 z-20 rounded-lg object-contain mb-5" src="/Sakib1.png" alt="Profile Picture" />
              <p className={`text-2xl font-bold space-grotesk-700 ${inter.className}`}>Mohammad Sakib Chowdhury</p>
              <p className={`text-xl font-semibold text-teal-400 space-grotesk-400`}>Front-end Developer</p>
              <p className={`text-base font-semibold my-5 text-zinc-700 space-grotesk-500`}>I bring digital designs to life, pixel by pixel.</p>
            </Link>
            <ul className="flex flex-col gap-8 my-5">
              {navOptions}
            </ul>
          </div>

          <div className="flex flex-col-reverse justify-start items-start gap-10">
            <div className="flex gap-3">
              <a href="https://github.com/sakib071" target="_blank" className={`text-3xl text-zinc-800 hover:text-teal-400 transition-colors`} rel="noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/mohammad-sakib-chowdhury-540984163/" target="_blank" className={`text-3xl text-zinc-800 hover:text-teal-400 transition-colors`} rel="noreferrer"><FaLinkedin /></a>
              <a href="https://www.behance.net/sakib071" target="_blank" className={`text-3xl text-zinc-800 hover:text-teal-400 transition-colors`} rel="noreferrer"><FaBehanceSquare /></a>
              <a href="https://www.facebook.com/sakibchy071?mibextid=ZbWKwL" target="_blank" className={`text-3xl text-zinc-800 hover:text-teal-400 transition-colors`} rel="noreferrer"><FaFacebookSquare /></a>
              <a href="https://www.instagram.com/mohammad._.sakib?igsh=MTRtZ2J6a3R2cjNhag==" target="_blank" className={`text-3xl text-zinc-800 hover:text-teal-400 transition-colors`} rel="noreferrer"><FaInstagram /></a>
            </div>
          </div>

          <CustomButton />
        </div>
      </div>

      {/* Blur Image 2 with Rotation Animation */}
      <Image
        src={Blur02}
        alt=""
        className="w-[500px] opacity-80 blur-3xl fixed -bottom-32 -right-24 animate-rotate-slow"
      />
    </div>
  );
}