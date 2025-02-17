import React from 'react'
import { FaFigma, FaHtml5, FaReact, FaGitAlt, FaGithub, FaSlack, FaDiscord, FaJira } from "react-icons/fa";
import { SiAdobexd, SiAdobeillustrator, SiTailwindcss, SiVitest, SiTypescript } from "react-icons/si";
// import { BiLogoTypescript } from "react-icons/bi";
import { DiJsBadge } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io5";
import { RxNotionLogo } from "react-icons/rx";
import { Tooltip } from "react-tooltip";
// import Image from 'next/image';
// import figma from '@/public/skills/figma.png';
// import xd from '@/public/skills/xd.png';
// import illustrator from '@/public/skills/illustrator.png';
// import tailwindcss from '@/public/skills/tailwindcss.png';
// import react from '@/public/skills/react.png';
// import vite from '@/public/skills/vite.png';
// import typescript from '@/public/skills/typescript.png';
// import js from '@/public/skills/js.png';
// import html from '@/public/skills/html.png';
// import css from '@/public/skills/css.png';
// import git from '@/public/skills/git.png';
// import github from '@/public/skills/github.png';
// import jira from '@/public/skills/jira.png';
// import slack from '@/public/skills/slack.png';
// import notion from '@/public/skills/notion.png';
// import discord from '@/public/skills/discord.png';

export default function SkillsComponent({ }) {
  return (
    <div className={`relative lg:block hidden text-white mx-auto mt-20`}>
      <div className='relative'>
        <h3 className="text-2xl uppercase space-grotesk-600 text-white">Skills</h3>
        <span className='absolute w-[75px] h-1 bg-teal-400'></span>
      </div>
      <div className={`flex gap-20 mt-5 text-white`}>
        <div className="space-y-3">
          <p>Design Tools:</p>
          <p>Development:</p>
          <p>Collaboration:</p>
          <p>Soft Skills:</p>
        </div>
        {/* <div className="space-y-3 font-normal">
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
            <li className="flex gap-2 items-center"><FaJira />Jira,</li>
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
        </div> */}

        <div className="space-y-3 font-normal">
          <ul className="flex gap-2 justify-start items-start text-left">
            <li><a data-tooltip-id="figma-tooltip"><FaFigma className="w-6 h-6" /></a></li>
            <li><a data-tooltip-id="xd-tooltip"><SiAdobexd className="w-6 h-6" /></a></li>
            <li><a data-tooltip-id="illustrator-tooltip"><SiAdobeillustrator className="w-6 h-6" /></a></li>
          </ul>

          <ul className="flex gap-2 justify-start">
            <li><a data-tooltip-id="nextjs-tooltip"><TbBrandNextjs className="w-6 h-6" /></a></li>
            <li><a data-tooltip-id="react-tooltip"><FaReact className="w-6 h-6" /></a></li>
            <li><a data-tooltip-id="vite-tooltip"><SiVitest className="w-6 h-6" /></a></li>
            <li><a data-tooltip-id="typescript-tooltip"><SiTypescript className="w-6 h-6" /></a></li>
            <li><a data-tooltip-id="javascript-tooltip"><DiJsBadge className="w-6 h-6" /></a></li>
            <li><a data-tooltip-id="html-tooltip"><FaHtml5 className="w-6 h-6" /></a></li>
            <li><a data-tooltip-id="css-tooltip"><IoLogoCss3 className="w-6 h-6" /></a></li>
            <li><a data-tooltip-id="tailwind-tooltip"><SiTailwindcss className="w-6 h-6" /></a></li>
          </ul>

          <ul className="flex gap-2">
            <li><a data-tooltip-id="git-tooltip"><FaGitAlt className="w-6 h-6" /></a></li>
            <li><a data-tooltip-id="github-tooltip"> <FaGithub className="w-6 h-6" /></a></li>
            <li><a data-tooltip-id="jira-tooltip"><FaJira className="w-6 h-6" /></a></li>
            <li><a data-tooltip-id="slack-tooltip"><FaSlack className="w-6 h-6" /></a></li>
            <li><a data-tooltip-id="notion-tooltip"><RxNotionLogo className="w-6 h-6" /></a></li>
            <li><a data-tooltip-id="discord-tooltip"><FaDiscord className="w-6 h-6" /></a></li>
          </ul>

          <ul className="flex gap-2">
            <li>Problem-solving, </li>
            <li>Attention to details, </li>
            <li>Time management, </li>
            <li>Project planning</li>
          </ul>

          <Tooltip id="figma-tooltip" content="Figma" />
          <Tooltip id="xd-tooltip" content="Adobe XD" />
          <Tooltip id="illustrator-tooltip" content="Adobe Illustrator" />
          <Tooltip id="nextjs-tooltip" content="NextJS" />
          <Tooltip id="react-tooltip" content="React" />
          <Tooltip id="vite-tooltip" content="Vite" />
          <Tooltip id="typescript-tooltip" content="TypeScript" />
          <Tooltip id="javascript-tooltip" content="JavaScript" />
          <Tooltip id="html-tooltip" content="HTML 5" />
          <Tooltip id="css-tooltip" content="CSS" />
          <Tooltip id="tailwind-tooltip" content="Tailwind CSS" />
          <Tooltip id="git-tooltip" content="Git" />
          <Tooltip id="github-tooltip" content="GitHub" />
          <Tooltip id="jira-tooltip" content="Jira" />
          <Tooltip id="slack-tooltip" content="Slack" />
          <Tooltip id="notion-tooltip" content="Notion" />
          <Tooltip id="discord-tooltip" content="Discord" />
        </div>



        {/* ------------------------------------------------ */}

        {/* <div className="space-y-3 font-normal">
          <ul className="flex gap-2 justify-start items-start text-left">
            <li><a data-tooltip-id="figma-tooltip"><Image className='w-full h-10' src={figma} alt='figma' /></a></li>
            <li><a data-tooltip-id="xd-tooltip"><Image className='w-full h-10' src={xd} alt='xd' /></a></li>
            <li><a data-tooltip-id="illustrator-tooltip"><Image className='w-full h-10' src={illustrator} alt='illustrator' /></a></li>
          </ul>

          <ul className="flex gap-2 justify-start">
            <li><a data-tooltip-id="nextjs-tooltip"><Image className='w-full h-10' src={illustrator} alt='illustrator' /></a></li>
            <li><a data-tooltip-id="react-tooltip"><Image className='w-full h-10' src={tailwindcss} alt='tailwindcss' /></a></li>
            <li><a data-tooltip-id="vite-tooltip"><Image className='w-full h-10' src={react} alt='react' /></a></li>
            <li><a data-tooltip-id="typescript-tooltip"><Image className='w-full h-10' src={vite} alt='vite' /></a></li>
            <li><a data-tooltip-id="javascript-tooltip"><Image className='w-full h-10' src={typescript} alt='typescript' /></a></li>
            <li><a data-tooltip-id="html-tooltip"><Image className='w-full h-10' src={js} alt='js' /></a></li>
            <li><a data-tooltip-id="css-tooltip"><Image className='w-full h-10' src={html} alt='html' /></a></li>
            <li><a data-tooltip-id="tailwind-tooltip"><Image className='w-full h-10' src={css} alt='css' /></a></li>
          </ul>

          <ul className="flex gap-2">
            <li><a data-tooltip-id="git-tooltip"><Image className='w-full h-10' src={git} alt='git' /></a></li>
            <li><a data-tooltip-id="github-tooltip"><Image className='w-full h-10' src={github} alt='github' /></a></li>
            <li><a data-tooltip-id="jira-tooltip"><Image className='w-full h-10' src={jira} alt='jira' /></a></li>
            <li><a data-tooltip-id="slack-tooltip"><Image className='w-full h-10' src={slack} alt='slack' /></a></li>
            <li><a data-tooltip-id="notion-tooltip"><Image className='w-full h-10' src={notion} alt='notion' /></a></li>
            <li><a data-tooltip-id="discord-tooltip"><Image className='w-full h-10' src={discord} alt='discord' /></a></li>
          </ul>

          <ul className="flex gap-2">
            <li>Problem-solving</li>
            <li>Attention to details</li>
            <li>Time management</li>
            <li>Project planning</li>
          </ul>

          <Tooltip id="figma-tooltip" content="Figma" />
          <Tooltip id="xd-tooltip" content="Adobe XD" />
          <Tooltip id="illustrator-tooltip" content="Adobe Illustrator" />
          <Tooltip id="nextjs-tooltip" content="NextJS" />
          <Tooltip id="react-tooltip" content="React" />
          <Tooltip id="vite-tooltip" content="Vite" />
          <Tooltip id="typescript-tooltip" content="TypeScript" />
          <Tooltip id="javascript-tooltip" content="JavaScript" />
          <Tooltip id="html-tooltip" content="HTML 5" />
          <Tooltip id="css-tooltip" content="CSS" />
          <Tooltip id="tailwind-tooltip" content="Tailwind CSS" />
          <Tooltip id="git-tooltip" content="Git" />
          <Tooltip id="github-tooltip" content="GitHub" />
          <Tooltip id="jira-tooltip" content="Jira" />
          <Tooltip id="slack-tooltip" content="Slack" />
          <Tooltip id="notion-tooltip" content="Notion" />
          <Tooltip id="discord-tooltip" content="Discord" />
        </div> */}
      </div>
    </div>
  )
}