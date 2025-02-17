import React from 'react'
import { PiSuitcaseSimple } from 'react-icons/pi'

export default function WorkComponent({ }) {

  const experienceData = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "Todvob AI",
      time: "Nov, 2024 - Present",
      client: null,
      href: "#",
    },
    {
      id: 2,
      role: "Freelance Frontend Developer & UI Designer",
      company: "Client: London-based business | Remote",
      time: "Feb, 2024 - Dec 2024",
      client: "London-based business",
      href: "#",
    },
    {
      id: 3,
      role: "Database Manager",
      company: "IRD Foundation, Dhaka",
      time: "May, 2024 – August, 2024",
      client: null,
      href: "#",
    },
  ];


  return (
    <section id='work experience' className={`work experience min-h-screen pt-20 px-5 lg:px-0 relative w-full text-white font-semibold mx-auto`}>
      <div className='relative'>
        <h3 className="text-2xl uppercase space-grotesk-600">Work Experience</h3>
        <span className='absolute w-[68px] h-1 bg-teal-400'></span>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5">
        <ol className="relative border-s border-gray-200 ml-3 mt-5 space-grotesk-400">
          {experienceData.map((item) => (
            <li key={item.id} className="mb-10 ms-6 border hover:border-teal-400 rounded-lg">
              <span className="absolute flex items-center justify-center size-10 text-2xl rounded-full -start-5  text-white">
                <PiSuitcaseSimple />
              </span>
              <div className="items-center justify-between p-4 w-full border border-zinc-600 rounded-lg shadow-sm sm:flex">
                <time className="mb-1 text-base space-grotesk-400 sm:order-last sm:mb-0">
                  {item.time}
                </time>
                <div className="text-sm">
                  <a
                    href={item.href}
                    className="font-semibold space-grotesk-700 text-lg text-teal-400 hover:underline"
                  >
                    {item.role}
                  </a>
                  <p className="text-base space-grotesk-400">{item.company}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}