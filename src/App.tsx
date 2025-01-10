import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import BookingModal from './components/BookingModal';
import PricingDetails from './components/PricingDetails';
import RefundPolicy from './components/RefundPolicy';
import FAQs from './components/FAQs';
import { Play, PartyPopper, Clapperboard } from 'lucide-react';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c", title: "Luxury Theater Interior" },
    { url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba", title: "Premium Screening Room" },
    { url: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f", title: "Comfortable Seating" },
    { url: "https://images.unsplash.com/photo-1536440136628-849c177e76a1", title: "Movie Experience" },
    { url: "https://images.unsplash.com/photo-1585647347384-2593bc35786b", title: "Refreshment Service" },
    { url: "https://images.unsplash.com/photo-1586899028174-e7098604235b", title: "Special Occasions" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />

      {/* Hero Section */}
      <section id="home" className="pt-16">
        <div className="relative h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Theater"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Experience Cinema Like Never Before</h1>
              <p className="text-xl mb-8">Book your private theater experience today</p>
              <div className="space-x-4">
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700"
                >
                  Book Now
                </button>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-gray-100"
                >
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-200">
              <Play className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Private Theater Booking</h3>
              <p className="text-gray-600 mb-4">Experience movies in your own private theater with state-of-the-art sound and picture quality.</p>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="text-indigo-600 hover:text-indigo-700"
              >
                Book Now →
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-200">
              <PartyPopper className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Special Celebrations</h3>
              <p className="text-gray-600 mb-4">Make your special occasions memorable with custom decorations and themed setups.</p>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="text-indigo-600 hover:text-indigo-700"
              >
                Plan Event →
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-200">
              <Clapperboard className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Experience</h3>
              <p className="text-gray-600 mb-4">Enjoy premium amenities including gourmet food, butler service, and luxury seating.</p>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="text-indigo-600 hover:text-indigo-700"
              >
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">To provide an unparalleled cinema experience in a private, luxurious setting that exceeds our customers' expectations.</p>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
                Learn More About Us
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="About Us"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={`${image.url}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                  alt={image.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <PricingDetails />
      </section>
      
      {/* Refund Policy Section */}
      <section id="refund" className="py-20">
        <RefundPolicy />
      </section>
      
      {/* FAQs Section */}
      <section id="faqs" className="py-20">
        <FAQs />
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.63162573094!2d79.8211889!3d6.9218374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1645432615000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TheaterBook</h3>
              <p className="text-gray-400">Experience cinema like never before</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white">Home</button></li>
                <li><button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white">Services</button></li>
                <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white">About</button></li>
                <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Theater Street</li>
                <li>Colombo, Sri Lanka</li>
                <li>+94 776098948</li>
                <li>support@theaterbook.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
