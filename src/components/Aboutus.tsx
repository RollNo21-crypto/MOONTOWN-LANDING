import React, { useState } from 'react';

const Aboutus: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: "promo1.mp4",
      title: "Experience Our Premium Store",
    },
    {
      src: "promo2.mp4",
      title: "Behind the Scenes of Our Luxurious Setting",
    },
  ];

  return (
    <div>
      <section id="about" className="py-10 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center mb-16 animate-fade-in">
            About Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slide-right">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our mission is to provide an unparalleled cinema experience in a
                private, luxurious setting that exceeds our customers' expectations.
                We strive to create an atmosphere where every movie night feels like
                a special occasion.
              </p>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We envision redefining entertainment by offering personalized,
                high-quality cinematic experiences tailored to our customers’ needs.
              </p>
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
                Learn More About Us
              </button>
            </div>

            {/* Right Content - Main Video */}
            <div className="rounded-lg overflow-hidden shadow-md animate-slide-left">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                controls
              >
                <source src="moonAltVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* As Seen on Media Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-semibold text-center mb-8">As Seen on Media</h3>
            <div className="relative">
              {/* Slider Container */}
              <div className="overflow-hidden rounded-lg shadow-lg">
                <div
                  className="flex transition-transform duration-700"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 flex flex-col items-center bg-white"
                    >
                      <video
                        className="w-full h-full object-cover"
                        controls
                        muted
                        preload="metadata"
                      >
                        <source src={slide.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <h4 className="text-xl font-semibold mt-4 px-4">
                        {slide.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slide Tracker */}
              <div className="flex justify-center mt-4 space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-4 w-4 rounded-full border-2 ${
                      currentSlide === index
                        ? "bg-indigo-600 border-indigo-600"
                        : "bg-gray-200 border-gray-400"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
