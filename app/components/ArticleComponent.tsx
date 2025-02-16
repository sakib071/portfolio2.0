"use client";

import React, { useEffect, useState } from 'react'
import { BsDot } from 'react-icons/bs';
import { MoonLoader } from 'react-spinners';

export default function ArticleComponent({ }) {

  interface Article {
    id: number;
    title: string[];
    published: string;
    reading_time: string;
    description: string;
  }

  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/articles.json");
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        console.error("Error fetching article data:", err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  console.log(articles);

  if (loading) return <div className='flex justify-center item-center w-full h-32'><MoonLoader color="rgba(45, 212, 191, 1)" /></div>;
  if (error) return <p>Error loading articles: {error.message}</p>;


  return (
    <div id='articles' className={`articles h-screen py-20 px-5 lg:px-0 relative text-zinc-900 font-semibold mx-auto`}>
      <h3 className="text-2xl uppercase space-grotesk-600">Articles</h3>

      <div className="mt-5 grid grid-cols-1 gap-5">
        <ol className="space-grotesk-400 space-y-12">
          {
            articles && articles?.map((item) => {
              return (
                <li key={item.id} className="items-center justify-between w-full">
                  <div className="flex gap-3 items-center mb-2 text-sm text-gray-800 dark:text-zinc-900">
                    <p className="space-grotesk-400">{item.published}</p>
                    <BsDot />
                    <p className="space-grotesk-400">{item.reading_time}</p>
                  </div>
                  <p className="space-grotesk-700 text-xl mb-2 hover:underline dark:text-teal-500">{item.title}</p>
                  <p className={`text-base text-zinc-900`}>{item.description}  <a href="#" className="text-base space-grotesk-400 underline">Continue reading</a></p>
                </li>
              )
            })
          }
        </ol>
      </div>
    </div>
  )
}