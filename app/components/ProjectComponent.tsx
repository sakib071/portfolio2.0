"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


export default function ProjectComponent({ }) {

  interface Project {
    id: number;
    title: string;
    img: string;
    tech_used: string[];
    live_link: string;
    description: string;
  }

  interface UI {
    id: number;
    title: string;
    img: string;
    tech_used: string[];
    live_link: string;
    description: string;
  }

  const [projects, setProjects] = useState<Project[]>([]);
  const [ui, setUi] = useState<UI[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch both projects.json and ui.json concurrently
        const [projectsResponse, uiResponse] = await Promise.all([
          fetch("/projects.json"),
          fetch("/ui.json"),
        ]);

        if (!projectsResponse.ok || !uiResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        const projectsData = await projectsResponse.json();
        const uiData = await uiResponse.json();

        setProjects(projectsData);
        setUi(uiData); // Assuming you have a state for UI data
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);



  if (loading) return <div className='pt-20 px-5 lg:px-0 relative w-full text-white font-semibold mx-auto'>
    {projects.map((item) => (
      <div key={item.id} className="w-full">
        <div className="flex flex-row gap-2 pt-10">
          <div className="animate-pulse bg-gray-300 size-20 rounded-lg"></div>
          <div className="flex flex-col gap-2">
            <div className="animate-pulse bg-gray-300 w-72 h-4 rounded-lg"></div>
            <div className="animate-pulse bg-gray-300 w-64 h-3 mt-2 rounded-lg"></div>
            <div className="animate-pulse bg-gray-300 w-60 h-3 rounded-lg"></div>
            <div className="animate-pulse bg-gray-300 w-56 h-2 rounded-lg"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
  if (error) return <p>Error loading projects: {error.message}</p>;

  return (
    <div id="projects" className="projects py-20">
      <div className={`px-5 lg:px-0 relative font-semibold mx-auto`}>
        <div className='relative'>
          <h3 className="text-2xl uppercase space-grotesk-600">Web Development Projects</h3>
          <span className='absolute w-[222px] h-1 bg-teal-400'></span>
        </div>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {
            projects && projects.map((item) => {
              return (
                <article
                  key={item.id}
                  className="relative overflow-hidden rounded-xl h-[350px] w-full shadow transition hover:shadow-lg group"
                >
                  <Image
                    width={1300}
                    height={1300}
                    alt={item?.title}
                    src={item?.img}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="relative h-[350px] transition-opacity duration-500 group">
                    <div className="p-4 flex flex-col justify-end h-full bg-gradient-to-tr from-black/85 to-white/5">
                      <Link href={item.live_link} target='_blank' className='hover:underline'>
                        <h3 className="my-3 text-2xl space-grotesk-600 text-white">{item?.title}</h3>
                      </Link>

                      <div className='flex flex-wrap'>
                        {
                          Array.isArray(item?.tech_used) && item?.tech_used?.map((tech, index) => (
                            <span
                              key={`${index}`}
                              className="inline-block text-xs text-white/95 px-2 py-1 rounded-full bg-gray-800 mr-1"
                            >
                              {tech}
                            </span>
                          ))
                        }
                      </div>

                      <p className="mt-2 hidden group-hover:block transition-all ease-in-out duration-500 space-grotesk-400 text-sm/relaxed text-white/95">
                        {item?.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })
          }
        </div>
      </div>
      <div className={`pt-20 px-5 lg:px-0 relative font-semibold mx-auto`}>
        <div className='relative'>
          <h3 className="text-2xl uppercase space-grotesk-600">UI/UX Projects</h3>
          <span className='absolute w-[62px] h-1 bg-teal-400'></span>
        </div>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {
            ui && ui?.map((item) => {
              return (
                <article
                  key={item.id}
                  className="relative overflow-hidden rounded-xl h-[350px] w-full shadow transition hover:shadow-lg group"
                >
                  <Image
                    width={1300}
                    height={1300}
                    alt={item?.title}
                    src={item?.img}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />

                  <div className="relative h-[350px] transition-opacity duration-500 group">
                    <div className="p-4 flex flex-col justify-end h-full bg-gradient-to-tr from-black/85 to-white/5">
                      <Link href={item.live_link} className='hover:underline' target='_blank'>
                        <h3 className="my-3 text-xl space-grotesk-600 text-white">{item?.title}</h3>
                      </Link>
                      <div className="flex">
                        {
                          Array.isArray(item?.tech_used) && item?.tech_used?.map((tech, index) => (
                            <span
                              key={`${index}`}
                              className="inline-block w-fit text-xs text-white/95 px-2 py-1 rounded-full bg-gray-800 mr-1"
                            >
                              {tech}
                            </span>
                          ))
                        }
                      </div>

                      <p className="mt-2 hidden group-hover:block transition-all ease-in-out duration-500 space-grotesk-400 text-sm/relaxed text-white/95">
                        {item?.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })
          }
        </div>
      </div>
    </div>
  )
}