import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  type GalleryImage = {
    url: string;
    title: string;
    category: string;
    images: string[];
  };

  const galleryImages: GalleryImage[] = [ 
    {
      url: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
      title: "Luxury MoonTown Private Theatre Interior",
      category: "Interior",
      images: [
        "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
        "https://loremflickr.com/640/360/movie,seats",
        "https://loremflickr.com/640/360/auditorium",
        "https://loremflickr.com/640/360/private,theater",
      ],
    },
    {
      url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
      title: "Premium Screening Room",
      category: "Screening Room",
      images: [
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
        "https://loremflickr.com/640/360/projector",
        "https://loremflickr.com/640/360/screening",
        "https://loremflickr.com/640/360/movie,screen",
      ],
    },
    {
      url: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f",
      title: "Comfortable Seating",
      category: "Seating",
      images: [
        "https://images.unsplash.com/photo-1595769816263-9b910be24d5f",
        "https://loremflickr.com/640/360/seats",
        "https://loremflickr.com/640/360/luxury,chairs",
        "https://loremflickr.com/640/360/seating,comfort",
      ],
    },
    {
      url: "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
      title: "Movie Experience",
      category: "Experience",
      images: [
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
        "https://loremflickr.com/640/360/entertainment",
        "https://loremflickr.com/640/360/cinema,fun",
        "https://loremflickr.com/640/360/movies",
      ],
    },
    {
      url: "https://images.unsplash.com/photo-1585647347384-2593bc35786b",
      title: "Refreshment Service",
      category: "Refreshments",
      images: [
        "https://images.unsplash.com/photo-1585647347384-2593bc35786b",
        "https://loremflickr.com/640/360/snacks",
        "https://loremflickr.com/640/360/beverages",
        "https://loremflickr.com/640/360/popcorn,drinks",
      ],
    },
    {
      url: "https://images.unsplash.com/photo-1586899028174-e7098604235b",
      title: "Special Occasions",
      category: "Occasions",
      images: [
        "https://images.unsplash.com/photo-1586899028174-e7098604235b",
        "https://loremflickr.com/640/360/birthday,celebration",
        "https://loremflickr.com/640/360/events",
        "https://loremflickr.com/640/360/party",
      ],
    },
  ];
  
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [currentTitle, setCurrentTitle] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [autoplay, setAutoplay] = useState<boolean>(true);
  const modalRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number | null>(null);

  const openModal = (images: string[], title: string) => {
    setCurrentImages(images);
    setCurrentTitle(title);
    setCurrentIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === currentImages.length - 1 ? 0 : prevIndex + 1));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'Escape') closeModal();
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startXRef.current !== null) {
      const endX = e.changedTouches[0].clientX;
      const diffX = startXRef.current - endX;

      if (diffX > 50) {
        // Swipe left
        nextSlide();
      } else if (diffX < -50) {
        // Swipe right
        prevSlide();
      }
      startXRef.current = null;
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isModalOpen]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (autoplay && isModalOpen) {
      timer = setInterval(nextSlide, 3000); // Autoplay every 3 seconds
    }
    return () => clearInterval(timer);
  }, [autoplay, isModalOpen, currentIndex]);

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-16">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openModal(image.images, image.title)}
            >
              <img
                src={`${image.url}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                alt={image.title}
                loading="lazy"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center">
                <h3 className="text-white text-lg font-semibold">{image.title}</h3>
                <p className="text-white text-sm mt-2">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          ref={modalRef}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-300"
          onMouseEnter={() => setAutoplay(true)}
          onMouseLeave={() => setAutoplay(true)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative max-w-lg w-10/12 bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in">
            {/* Top-Right Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 z-10"
              aria-label="Close Modal"
            >
              <X size={20} />
            </button>

            {/* Slideshow */}
            <div className="relative">
              <img
                src={`${currentImages[currentIndex]}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                alt={currentTitle}
                className="w-full h-[300px] object-cover transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <button
                  onClick={prevSlide}
                  className="bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label="Next Slide"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="p-4 flex justify-center space-x-2">
              {currentImages.map((thumb, index) => (
                <img
                  key={index}
                  src={`${thumb}?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80`}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-12 h-12 object-cover rounded-lg cursor-pointer ${
                    index === currentIndex ? 'ring-2 ring-indigo-500' : ''
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{currentTitle}</h3>
              <p className="text-gray-600 mt-1">
                {currentIndex + 1} of {currentImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
