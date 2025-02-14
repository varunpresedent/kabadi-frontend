"use client";

import { useEffect, useState } from "react";

export default function About() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-12">
      {/* Header Section */}
      <h1 className="text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-600 via-red-500 to-orange-500 text-transparent bg-clip-text">
        About <span className="text-black">Le Panga3.0</span> Event
      </h1>

      {/* Event Details */}
      <div className="text-lg text-gray-800 space-y-5 leading-relaxed max-w-3xl mx-auto">
        <p>
          Welcome to <b className="text-red-600">Le Panga3.0</b>, the ultimate **Kabaddi** battle where strength, strategy, and spirit collide! 🏆🔥
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>⚡ High-energy matches with top Kabaddi teams</li>
          <li>🔥 Thrilling tackles and breathtaking raids</li>
          <li>🎁 Live audience interaction and giveaways</li>
          <li>🏋️‍♂️ Exclusive training sessions with pro players</li>
        </ul>
      </div>
    </div>
  );
}
