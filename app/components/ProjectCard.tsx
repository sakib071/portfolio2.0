import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
// import Link from 'next/link';

interface ProjectCardProps {
  image: string;
}

export default function ProjectCard({ image }: ProjectCardProps) {
  return (
    <div>
      <motion.div whileHover={{ scale: 1.05 }} className="project-card">
        <Image src={image} width={500} height={500} alt="TurfHub Project" />
        <h3>TurfHubsssssssss</h3>
        <p>Real-time turf booking system with payments.</p>
        <div className="buttons">
          {/* <Link href="https://turfhubb.com" target="_blank">🔗 Live Demo</Link> */}
          {/* <Link href="https://github.com/sakib071/turfhub" target="_blank">💻 GitHub</Link> */}
        </div>
      </motion.div></div>
  )
}