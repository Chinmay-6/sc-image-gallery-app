import { FC } from "react";
import { SearchResult } from "@/app/gallery/page";
import Image from "next/image";

interface ModalProps {
  image: SearchResult;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg max-w-lg w-full relative">
        <button className="absolute top-2 right-2 text-black" onClick={onClose}>
          ✕
        </button>
        <Image
          src={image.url} // or `src` property based on your image data
          alt={image.alt || "Expanded image"}
          width={800}
          height={600}
          className="w-full h-auto rounded-lg"
        />
        <h2 className="text-xl font-semibold mt-4 text-black" >{image.title || "Image Title"}</h2>
        <p className="mt-2 text-gray-600">{image.description || "Description goes here"}</p>
      </div>
    </div>
  );
};

export default Modal;
