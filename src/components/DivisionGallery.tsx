import React from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  url: string;
  caption: string;
}

interface DivisionGalleryProps {
  images: GalleryImage[];
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export function DivisionGallery({ images, isOpen, onClose, title }: DivisionGalleryProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-6xl mx-auto bg-white rounded-xl">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-2xl font-bold">{title}</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div key={index} className="space-y-2">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <p className="text-sm text-gray-600 text-center">{image.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}