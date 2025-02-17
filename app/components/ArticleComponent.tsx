"use client";

import React, { useEffect, useState } from 'react'
import { BsDot } from 'react-icons/bs';

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
  if (loading) {
    if (!articles || articles.length === 0) {
      return <p>No articles found.</p>;
    }

    return (
      <div className='pt-20 px-5 lg:px-0 relative w-full text-white font-semibold mx-auto'>
        {articles.map((item) => (
          <div key={item.id} className="w-full">
            <div className="flex flex-row gap-2">
              <div className="animate-pulse bg-gray-300 size-20 rounded-lg"></div>
              <div className="flex flex-col gap-2">
                <div className="animate-pulse bg-gray-300 w-72 h-4 rounded-lg"></div>
                <div className="animate-pulse bg-gray-300 w-64 h-3 mt-2 rounded-lg"></div>
                <div className="animate-pulse bg-gray-300 w-60 h-2 rounded-lg"></div>
                <div className="animate-pulse bg-gray-300 w-60 h-2 rounded-lg"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (error) {
    return <p>Error loading articles: {error.message}</p>;
  }

  return (
    <section id='articles' className="articles min-h-screen pt-20 px-5 lg:px-0 relative text-white font-semibold mx-auto">
      <div className='relative'>
        <h3 className="text-2xl uppercase space-grotesk-600">Articles</h3>
        <span className='absolute w-[105px] h-1 bg-teal-400'></span>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5">
        <ol className="space-grotesk-400 space-y-12">
          {
            articles && articles?.map((item) => {
              return (
                <li key={item.id} className="items-center justify-between w-full">
                  <div className="flex gap-3 items-center mb-2 text-sm text-teal-400 dark:text-white">
                    <p className="space-grotesk-400">{item.published}</p>
                    <BsDot />
                    <p className="space-grotesk-400">{item.reading_time}</p>
                  </div>
                  <p className="space-grotesk-700 text-xl mb-2 hover:underline dark:text-teal-500">{item.title}</p>
                  <p className={`text-base text-white`}>{item.description}  <a href="#" className="text-base space-grotesk-400 underline">Continue reading</a></p>
                </li>
              )
            })
          }
        </ol>
      </div>
    </section>
  )
}