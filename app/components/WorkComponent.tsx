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
      time: "Feb, 2024 - Present",
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
    <div className={`pt-32 px-5 lg:px-0 relative w-full text-zinc-900 font-semibold mx-auto`}>
      <h3 className="text-2xl uppercase space-grotesk-600">Work Experience</h3>
      <div className="mt-5 grid grid-cols-1 gap-5">
        <ol className="relative border-s border-gray-200 ml-3 mt-5 space-grotesk-400">
          {experienceData.map((item) => (
            <li key={item.id} className="mb-10 ms-6 border hover:border-teal-400 rounded-lg">
              <span className="absolute flex items-center justify-center size-10 text-2xl rounded-full -start-5  text-zinc-900">
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
    </div>
  )
}