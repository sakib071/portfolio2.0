import { FocusCards } from '@/components/ui/focus-cards';
import React from 'react'
import Sakib01 from '@/public/tour/Sakib-01.webp';
import Sakib02 from '@/public/tour/Sakib-02.webp';
import friend from '@/public/tour/friend.webp';
import bazar from '@/public/photography/bazar.webp';
import village from '@/public/photography/village.webp';
import window from '@/public/photography/window.webp';
import camping01 from '@/public/photography/camping-01.webp';
import camping02 from '@/public/photography/camping-02.webp';
import saintmartin from '@/public/photography/saint-martin.webp';

export default function TourPage() {

  const cards = [
    {
      title: "Cox's Bazar 01",
      src: Sakib01.src
      ,
    },
    {
      title: "Cox's Bazar 02",
      src: Sakib02.src
      ,
    },
    {
      title: "From another mother",
      src: friend.src
      ,
    },
    {
      title: "Chokoria",
      src: bazar.src
      ,
    },
    {
      title: "Village",
      src: village.src
      ,
    },
    {
      title: "Window",
      src: window.src
      ,
    },
    {
      title: "Camping 01",
      src: camping01.src
      ,
    },
    {
      title: "Camping 02",
      src: camping02.src
      ,
    },
    {
      title: "Saint-Martin",
      src: saintmartin.src
      ,
    },
  ];


  return (
    <div  id='tour & photography' className='tour & photography min-h-screen py-20 px-5 lg:px-0 relative w-full text-white font-semibold mx-auto'>
      <div className='relative'>
        <h3 className="text-2xl uppercase space-grotesk-600">Tour & Photography</h3>
        <span className='absolute w-64 h-1 bg-teal-400'></span>
      </div>
      <FocusCards cards={cards} />
    </div>
  )
}