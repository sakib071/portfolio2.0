"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { MoonLoader } from 'react-spinners';


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



  if (loading) return <div className='flex justify-center item-center w-full h-32  mt-32'><MoonLoader color="rgba(45, 212, 191, 1)" /></div>;
  if (error) return <p>Error loading projects: {error.message}</p>;

  return (
    <div id="projects" className="projects pt-32">
      <div className={`px-5 lg:px-0 relative  font-semibold mx-auto`}>
        <h3 className="text-2xl uppercase text-zinc-900 space-grotesk-600">Web Development Projects</h3>
        <div className="mt-5 grid grid-cols-1 gap-5">
          {
            projects && projects.map((item) => {
              return (
                <article
                  key={item.id}
                  className="relative overflow-hidden rounded-lg h-[500px] shadow transition hover:shadow-lg group"
                >
                  <Image
                    width={1300}
                    height={1300}
                    alt={item?.title}
                    src={item?.img}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />

                  <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-400/25 h-[500px] bottom-0 transition-opacity duration-500">
                    <div className="p-4 sm:p-6">
                      <Link href={item.live_link} target='_blank' className='hover:underline'>
                        <h3 className="my-3 text-2xl space-grotesk-600 text-white">{item?.title}</h3>
                      </Link>
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
                      <p className="mt-2 space-grotesk-400 text-sm/relaxed text-white/95">
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
        <h3 className="text-2xl uppercase text-zinc-900 space-grotesk-600">UI/UX Projects</h3>
        <div className="mt-5 grid grid-cols-1 gap-5">
          {
            ui && ui?.map((item) => {
              return (
                <article
                  key={item.id}
                  className="relative overflow-hidden rounded-lg h-[500px] shadow transition hover:shadow-lg group"
                >
                  <Image
                    width={1300}
                    height={1300}
                    alt={item?.title}
                    src={item?.img}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />

                  <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 h-[500px] transition-opacity duration-500">
                    <div className="p-4 sm:p-6 flex flex-col justify-end h-full">
                      <Link href={item.live_link} className='hover:underline' target='_blank'>
                        <h3 className="my-3 text-2xl space-grotesk-600 text-white">{item?.title}</h3>
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

                      <p className="mt-2 space-grotesk-400 text-sm/relaxed text-white/95">
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