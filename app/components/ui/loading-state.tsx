// components/ui/loading.tsx
"use client";

import React, { useEffect, useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const loadingStates = [
  { text: "Buying a condo" },
  { text: "Travelling in a flight" },
  { text: "We like it" },
  { text: "Welcome to F**** C***" },
];

export default function LoadingState() {
  const [loading, setLoading] = useState(true); // Start with loading as true
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem("hasLoaded");

    if (!hasLoadedBefore) {
      sessionStorage.setItem("hasLoaded", "true");

      // Automatically stop loading after the specified duration
      setTimeout(() => {
        setLoading(false);
      }, loadingStates.length * 1000);
    } else {
      setLoading(false); // Skip loading if already visited before
    }

    setHasLoaded(true); // Mark that the effect has been run
  }, []);

  return (
    <div>
      {loading && hasLoaded && (
        <div className="w-full h-[60vh] flex items-center justify-center">
          <Loader loadingStates={loadingStates} loading={loading} duration={1000} />
          <button
            className="fixed top-4 right-4 text-black dark:text-white z-[120]"
            onClick={() => setLoading(false)}
          >
            <IconSquareRoundedX className="h-10 w-10" />
          </button>
        </div>
      )}
    </div>
  );
}
