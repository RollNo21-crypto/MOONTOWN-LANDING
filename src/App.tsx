import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import BookingModal from './components/BookingModal';
import PricingDetails from './components/PricingDetails';
import RefundPolicy from './components/RefundPolicy';
import Gallery from './components/Gallery';
import WhatsappChat from './components/WhatsappChat';
// import BookingEngine from './components/BookingEngine';
import FAQs from './components/FAQs';
import moonVideo from './assets/videos/134492-759734879_medium.mp4';
import moonAltVideo from './assets/videos/celebration.mp4';
import promo1 from './assets/videos/promo1.mp4';
import promo2 from './assets/videos/promo2.mp4';
import '@fortawesome/fontawesome-free/css/all.min.css';


import { Play, PartyPopper, Clapperboard } from 'lucide-react';
import Aboutus from './components/Aboutus';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c", title: "Luxury MoonTown Private Theatre Interior" },
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
      <section id="home" className="relative w-full min-h-[98vh] overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 min-w-full min-h-full object-cover"
        >
          <source src={moonVideo} type="video/mp4" />
          <source src={moonAltVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay and Content */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4 sm:text-3xl animate-slide-down">
              Experience Cinema Like Never Before
            </h1>
            <p className="text-xl mb-8 sm:text-lg animate-fade-in">
              Book your private MoonTown Private Theatre experience today
            </p>
            <div className="space-x-4 animate-slide-up">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition sm:px-6 sm:py-2 sm:text-sm"
              >
                Book Now
              </button>
              <button
                onClick={() =>
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition sm:px-6 sm:py-2 sm:text-sm"
              >
                Know More
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
        <section id="services" className="py-10 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-800 animate-fade-in">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 animate-slide-up">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-6 relative icon-container">
                  <Play className="w-8 h-8 text-white fill-current icon" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Private MoonTown Private Theatre Booking
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Experience movies in your own private MoonTown Private Theatre with
                  state-of-the-art sound and picture quality.
                </p>
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
                >
                  Book Now →
                </button>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 animate-slide-up">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mb-6 relative icon-container">
                  <PartyPopper className="w-8 h-8 text-white fill-current icon" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Special Celebrations
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Make your special occasions memorable with custom decorations and
                  themed setups.
                </p>
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
                >
                  Plan Event →
                </button>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 animate-slide-up">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full mb-6 relative icon-container">
                  <Clapperboard className="w-8 h-8 text-white fill-current icon" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Premium Experience
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Enjoy premium amenities including gourmet food, butler service, and
                  luxury seating.
                </p>
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
                >
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </section>

      {/* About Section */}
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
                <source src={moonAltVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* As Seen on Media Section */}
          <div className="mt-16">
            <h3 className="text-4xl font-extrabold text-center mb-16 animate-fade-in">
              As Seen on Media
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* First Media Video Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105">
                <div className="relative">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    muted
                    preload="metadata"
                  >
                    <source src={promo1} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-4">
                  <h4 className="text-xl font-semibold mb-2">
                    Experience Our Premium Store
                  </h4>
                  <p className="text-gray-600">
                    Take a tour of our state-of-the-art facilities designed to deliver
                    the ultimate luxury and comfort. Witness the magic behind every
                    cinematic moment.
                  </p>
                </div>
              </div>

              {/* Second Media Video Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105">
                <div className="relative">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    muted
                    preload="metadata"
                  >
                    <source src={promo2} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-4">
                  <h4 className="text-xl font-semibold mb-2">
                    Behind the Scenes of Our Luxurious Setting
                  </h4>
                  <p className="text-gray-600">
                    Discover how we bring a touch of elegance to every experience.
                    From meticulous planning to flawless execution, see what goes
                    into creating unforgettable moments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* <section id="aboutus" >
        <Aboutus/>
      </section> */}



      {/* Gallery Section */}
      <section id="gallery" >
        <Gallery />
      </section>


    {/* Pricing Section */}
      <section id="pricing" >
        <PricingDetails />
      </section>

{/*  <section id="bookingeng" >
        <BookingEngine />
      </section> */}

       <section id="whatsappchat" >
        <WhatsappChat />
      </section>

      {/* Refund Policy Section */}
      <section id="refund" className=" bg-gray-100">
        <RefundPolicy />
      </section>
      
      {/* FAQs Section */}
      <section id="faqs" >
        <FAQs />
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-10 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.909053450794!2d77.51386149999999!3d12.9135666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fa5cd542397%3A0x5e77e607dfc3cd32!2sMoonTown%20Private%20Theatre!5e0!3m2!1sen!2sin!4v1736485342987!5m2!1sen!2sin"
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
              <h3 className="text-xl font-bold mb-4">MoonTown Private TheatreBook</h3>
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
                <li>Jnanakshi arcade, 11&12, Janankshi Layout,</li>
                <li>opp. Sri jnanakshi vidyamandir, Janankshi Layout,</li>
                <li> 5th Stage, Rajarajeshwari Nagar, Bengaluru, Karnataka - 560098</li>
                <li>+91 8217516064</li>
                <li>support@moontown.com</li>
                
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
