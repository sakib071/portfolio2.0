"use client";

import React, { useEffect, useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

import ArticlePage from "./articles/page";
import HomePage from "./profile/page";
import ProjectsPage from "./projects/page";
import WorkPage from "./work-experience/page";
import TourPage from "./tour/page";

const loadingStates = [
  { text: "Booting up my creativity" },
  { text: "Fine-tuning the pixels" },
  { text: "Bringing ideas to life" },
  { text: "Welcome to my digital playground!" },
];

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem("hasLoaded");

    if (!hasLoadedBefore) {
      sessionStorage.setItem("hasLoaded", "true");
      setTimeout(() => setLoading(false), loadingStates.length * 1000);
    } else {
      setLoading(false);
    }
  }, []);

  // 🔥 Ensure nothing renders before loading is done
  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loader loadingStates={loadingStates} loading={loading} duration={1000} />
        <button
          className="fixed top-4 right-4 text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      </div>
    );
  }

  return (
    <div>
      <HomePage />
      <ProjectsPage />
      <WorkPage />
      <ArticlePage />
      <TourPage />
    </div>
  );
}
