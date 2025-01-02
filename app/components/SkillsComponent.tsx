import React from 'react'
import { FaFigma, FaHtml5, FaReact, FaGitAlt, FaGithub, FaJsSquare, FaSlack, FaDiscord } from "react-icons/fa";
import { SiAdobexd, SiAdobeillustrator, SiTailwindcss, SiVitest } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io5";
import { RxNotionLogo } from "react-icons/rx";

export default function SkillsComponent({ }) {
  return (
    <div className={`relative bg-zinc-900 text-white mx-auto mt-20`}>
      <h3 className="text-2xl uppercase space-grotesk-600 text-teal-400">Skills</h3>
      <div className={`flex gap-20 mt-5 bg-zinc-900 text-gray-200`}>
        <div className="space-y-3">
          <p>Design Tools:</p>
          <p>Development:</p>
          <p>Collaboration:</p>
          <p>Soft Skills:</p>
        </div>
        <div className="space-y-3">
          <ul className="flex gap-2 justify-start items-start text-left">
            <li className="flex gap-2 items-center"><FaFigma />Figma,</li>
            <li className="flex gap-2 items-center"><SiAdobexd />Adobe XD,</li>
            <li className="flex gap-2 items-center"><SiAdobeillustrator />Adobe illustrator</li>
          </ul>
          <ul className="flex gap-2 justify-start">
            <li className="flex gap-2 items-center"><TbBrandNextjs />NextJS,</li>
            <li className="flex gap-2 items-center"><FaReact />React,</li>
            <li className="flex gap-2 items-center"><SiVitest />Vite,</li>
            <li className="flex gap-2 items-center"><BiLogoTypescript />TypeScript,</li>
            <li className="flex gap-2 items-center"><FaJsSquare />JavaScript,</li>
            <li className="flex gap-2 items-center"><FaHtml5 />HTML 5,</li>
            <li className="flex gap-2 items-center"><IoLogoCss3 />CSS,</li>
            <li className="flex gap-2 items-center"><SiTailwindcss />Tailwind CSS</li>
          </ul>
          <ul className="flex gap-2">
            <li className="flex gap-2 items-center"><FaGitAlt />Git,</li>
            <li className="flex gap-2 items-center"><FaGithub />GitHub,</li>
            <li className="flex gap-2 items-center"><FaSlack />Slack,</li>
            <li className="flex gap-2 items-center"><RxNotionLogo />Notion,</li>
            <li className="flex gap-2 items-center"><FaDiscord />Discord</li>
          </ul>
          <ul className="flex gap-2">
            <li>Problem-solving,</li>
            <li>Attention to details,</li>
            <li>Time management,</li>
            <li>Project planning</li>
          </ul>
        </div>
      </div>
    </div>
  )
}