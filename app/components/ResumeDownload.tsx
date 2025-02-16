import Link from 'next/link'
import React from 'react'
import { MdSimCardDownload } from "react-icons/md";

export default function ResumeDownload() {
  return (
    <Link
      href="/cv.pdf"
      download="My_CV.pdf"
      className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-900 hover:text-teal-400 text-white rounded-lg shadow-md transition"
    >
      <MdSimCardDownload size={18} />
      Download CV
    </Link>
  )
}