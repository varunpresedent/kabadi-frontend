"use client";
import Image from "next/image";
import { useState } from "react";
import { FaFolder, FaFolderOpen } from "react-icons/fa";

const galleryFolders = [
  {
    name: "\ud83c\udfc6 Tournament 2023",
    subfolders: [
      {
        name: "\u26bd Match 1",
        images: [
          { src: "/placeholder.svg?height=300&width=400", alt: "Match 1A" },
          { src: "/placeholder.svg?height=300&width=400", alt: "Match 1B" },
          { src: "/placeholder.svg?height=300&width=400", alt: "Match 1C" },
        ],
      },
      {
        name: "\ud83c\udfc0 Match 2",
        images: [
          { src: "/placeholder.svg?height=300&width=400", alt: "Match 2A" },
          { src: "/placeholder.svg?height=300&width=400", alt: "Match 2B" },
        ],
      },
    ],
  },
  {
    name: "\u26fa Training Camp 2023",
    subfolders: [
      {
        name: "\ud83c\udfcb\ufe0f Session 1",
        images: [
          { src: "/placeholder.svg?height=300&width=400", alt: "Session 1A" },
          { src: "/placeholder.svg?height=300&width=400", alt: "Session 1B" },
        ],
      },
    ],
  },
];

export default function Gallery() {
  const [openFolder, setOpenFolder] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container mx-auto px-6 py-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">\ud83d\udcf8 Photo Gallery</h1>
      
      <div className="space-y-6">
        {galleryFolders.map((folder, folderIndex) => (
          <div key={folderIndex} className="bg-gray-100 shadow-lg rounded-lg p-6">
            <h2
              className="text-2xl font-semibold flex items-center gap-3 cursor-pointer hover:text-blue-600 transition-all"
              onClick={() => setOpenFolder(openFolder === folderIndex ? null : folderIndex)}
            >
              {openFolder === folderIndex ? <FaFolderOpen className="text-yellow-500" /> : <FaFolder className="text-yellow-500" />}
              {folder.name}
            </h2>

            {openFolder === folderIndex && (
              <div className="mt-4 space-y-4">
                {folder.subfolders.map((subfolder, subfolderIndex) => (
                  <div key={subfolderIndex} className="bg-white rounded-lg p-4 shadow-md">
                    <h3 className="text-xl font-medium text-gray-700">{subfolder.name}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
                      {subfolder.images.map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          className="relative h-64 group overflow-hidden rounded-lg shadow-md cursor-pointer"
                          onClick={() => setSelectedImage(image)}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transform transition duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                            <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100">
                              {image.alt}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal for image preview */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-2xl">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={600}
              height={400}
              className="rounded-lg"
            />
            <p className="text-center mt-2 text-gray-700 font-medium">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
