"use client";  // Ensure it's a client component

import Lottie from "lottie-react";

export default function LottieAnimation({ animationData }: { animationData: any }) {
  return <Lottie animationData={animationData} className="w-72 h-72" />;
}
