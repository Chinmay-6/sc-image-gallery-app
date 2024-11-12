"use client";

import { useState } from "react";
import { ImageGrid } from "@/components/image-grid";
import { SearchResult } from "./page";
import { CloudinaryImage } from "@/components/cloudinary-image";
import Modal from "@/components/Modal"; // import a custom Modal component

export default function GalleryGrid({ images }: { images: SearchResult[] }) {
  const [selectedImage, setSelectedImage] = useState<SearchResult | null>(null);

  // Open the modal with the clicked image data
  const handleImageClick = (imageData: SearchResult) => {
    setSelectedImage(imageData);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <ImageGrid
        images={images}
        getImage={(imageData: SearchResult) => (
          <CloudinaryImage
            key={imageData.public_id}
            imageData={imageData}
            width="400"
            height="300"
            alt="an image of something"
            onClick={() => handleImageClick(imageData)}
          />
        )}
      />

      {/* Show the modal when an image is selected */}
      {selectedImage && (
        <Modal image={selectedImage} onClose={closeModal} />
      )}
    </>
  );
}
