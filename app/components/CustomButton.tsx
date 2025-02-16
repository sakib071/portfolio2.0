import React from 'react'
import './CustomButton.css';
import { MdSimCardDownload } from "react-icons/md";

export default function CustomButton() {


  const handleDownload = () => {
    const cvUrl = "/Mohammad Sakib Chowdhury_Resume.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Mohammad Sakib Chowdhury_Resume.pdf"; // File name when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div onClick={handleDownload} className="button-icon">
      <div className="cube">
        <span className="side front">Chekout my Resume</span>
        <div className='side top text-zinc-800 flex gap-1 items-center justify-center'>
          <MdSimCardDownload size={18} />
          <span className="">Download</span>
        </div>
      </div>
    </div>
  )
}