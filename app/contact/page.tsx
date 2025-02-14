"use client";

import { useState } from "react";
import Image from "next/image";
import { FaInstagram, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-6 py-10 relative">
      {/* Background Blur when Modal is Open */}
      {isModalOpen && <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40"></div>}

      {/* Profile Card */}
      <div className="bg-white shadow-xl rounded-lg overflow-hidden max-w-md w-full p-6 text-center z-50">
        {/* Clickable Image */}
        <div
          className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-500 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <Image src="/president.jpg" alt="Kabaddi President" layout="fill" objectFit="cover" />
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mt-4">Siva Naga Varun</h1>
        <p className="text-gray-500">Kabaddi  President</p>

        <div className="mt-4 space-y-3">
          <p className="flex items-center justify-center text-gray-700">
            <FaEnvelope className="text-blue-500 mr-2" /> john.doe@example.com
          </p>
          <p className="flex items-center justify-center text-gray-700">
            <FaInstagram className="text-pink-500 mr-2" /> @john_kabaddi
          </p>
          <p className="flex items-center justify-center text-gray-700">
            <FaMapMarkerAlt className="text-red-500 mr-2" /> Vizag, India
          </p>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg shadow-lg">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-700 transition"
            >
              <IoClose size={24} />
            </button>

            {/* Large Image Display */}
            <Image src="/president.jpg" alt="Kabaddi President" width={400} height={400} className="rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
}
