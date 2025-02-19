import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Image01 from '@/public/Sakib1.png';
import Image02 from '@/public/Sakib.jpg';

const images = [
  Image01,
  Image02,
];

export default function ProfilePhotoComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden w-36 h-36 relative">
      <AnimatePresence mode="wait">
        {images.map((src, index) => (
          index === currentIndex && (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }} // Adjust duration for smoother/faster transition
              className="absolute inset-0"
            >
              <Image
                src={src}
                width={1000}
                height={1000}
                className="h-full w-full z-20 rounded-lg object-cover"
                alt="Profile Picture"
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>
    </div>
  );
}