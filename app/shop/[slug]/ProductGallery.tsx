"use client";

import { useState } from "react";

interface Props {
  image: string;
  gallery?: string[];
  name: string;
}

export default function ProductGallery({
  image,
  gallery = [],
  name,
}: Props) {
  const images = [image, ...gallery.filter((img) => img !== image)];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="space-y-5">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
        <img
          src={selectedImage}
          alt={name}
          className="h-[650px] w-full object-cover transition duration-500 hover:scale-110"
        />
      </div>

      {images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto">
          {images.map((img) => (
            <button
              key={img}
              onClick={() => setSelectedImage(img)}
              className={`overflow-hidden rounded-xl border-2 transition ${
                selectedImage === img
                  ? "border-red-600"
                  : "border-white/10"
              }`}
            >
              <img
                src={img}
                alt=""
                className="h-24 w-24 object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}