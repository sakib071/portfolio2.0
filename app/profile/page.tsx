"use client"

import React, { useState } from 'react'
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SkillsComponent from '../components/SkillsComponent';
import { BiSolidPhone } from 'react-icons/bi';
import Image from 'next/image';
import Link from 'next/link';


export default function HomePage() {

  const [copied, setCopied] = useState("");

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(text);
      setTimeout(() => setCopied(""), 2000); // Reset copied state after 2 seconds
    });
  };

  return (
    <div id='profile' className='profile min-h-screen'>
      <div className={`px-5 lg:p-0 lg:pt-20 relative text-zinc-700 font-semibold mx-auto`}>
        <Link href="/" className="lg:hidden flex flex-col text-lg">
          <Image width={1000} height={1000} className="h-full w-36 z-20 rounded-lg object-contain mb-5" src="/Sakib1.png" alt="Profile Picture" />
          <p className={`text-2xl font-bold space-grotesk-700`}>Mohammad Sakib Chowdhury</p>
          <p className={`text-xl font-semibold text-teal-400 space-grotesk-400`}>Front-end Developer</p>
          <p className={`text-base font-semibold mt-5 mb-10 text-zinc-700 space-grotesk-500`}>I bring digital designs to life, pixel by pixel.</p>
        </Link>
        <p className="text-base w-full text-zinc-700 text-justify space-grotesk-400">As a front-end developer with a passion for building intuitive and dynamic web applications, I specialize in modern frameworks like <span className="text-teal-400 space-grotesk-500-italic">NextJS, React</span> and <span className="text-teal-400 space-grotesk-500-italic">Tailwind CSS</span> to craft seamless, user-friendly experiences. With a deep understanding of design tools like <span className="text-teal-400 space-grotesk-500-italic">Figma</span> and <span className="text-teal-400 space-grotesk-500-italic">Adobe XD</span>, alongside development technologies such as <span className="text-teal-400 space-grotesk-500-italic">Vite, TypeScript, JavaScript, and Git,</span> I’m committed to optimizing workflows and delivering visually compelling, responsive solutions. <br /> <br /> My skills in problem-solving, attention to detail, and project planning help me deliver efficient, high-quality results in collaborative environments.</p>

        <div className="mt-10 space-y-3">
          <div
            className="flex gap-2 text-base w-fit space-grotesk-400 items-center cursor-pointer"
            onClick={() => handleCopy("mdsakibchy071@gmail.com")}
          >
            <IoMdMail className="text-teal-400" />
            <p className="hover:underline">mdsakibchy071@gmail.com</p>
            {copied === "mdsakibchy071@gmail.com" && (
              <span className="text-teal-400 text-xs ml-2 bg-zinc-800 rounded-md px-2 py-1">Copied!</span>
            )}
          </div>
          <div
            className="flex gap-2 text-base w-fit space-grotesk-400 items-center cursor-pointer"
            onClick={() => handleCopy("+880 1533 019 713")}
          >
            <BiSolidPhone className="text-teal-400" />
            <p className="hover:underline">+880 1533 019 713</p>
            {copied === "+880 1533 019 713" && (
              <span className="text-teal-400 text-xs ml-2 bg-zinc-800 rounded-md px-2 py-1">Copied!</span>
            )}
          </div>
          <div className="flex gap-2 text-base space-grotesk-400 items-center">
            <FaGithub className="text-teal-400" />
            <a
              className="hover:underline"
              href="https://github.com/sakib071"
              target="_blank"
              rel="noreferrer"
            >
              sakib071
            </a>
          </div>
          <div className="flex gap-2 text-base space-grotesk-400 items-center">
            <FaLinkedin className="text-teal-400" />
            <a
              className="hover:underline"
              href="https://www.linkedin.com/in/mohammad-sakib-chowdhury-540984163/"
              target="_blank"
              rel="noreferrer"
            >
              mohammad-sakib-chowdhury
            </a>
          </div>
          {/* <div className="flex gap-2 text-base space-grotesk-400 items-center">
            <FaSquareFacebook className="text-teal-400" />
            <a
              className="hover:underline"
              href="https://www.facebook.com/sakibchy071?mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer"
            >
              Mohammad Sakib Chowdhury
            </a>
          </div> */}
        </div>
      </div>
      <SkillsComponent />
    </div>
  )
}