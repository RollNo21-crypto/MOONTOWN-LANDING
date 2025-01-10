import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Film, MapPin, Gift, Cake } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
  const [bookingData, setBookingData] = useState({
    location: '',
    date: '',
    time: '',
    package: '',
    occasion: '',
    occasionDetails: {},
    cake: '',
    needsPackage: '',
    additionalOptions: {
      decoration: false,
      fogEntry: '',
      photography: false,                                                                                                                                                                                      candlePath: false, // New special add-on
      ledNumber: false   // New special add-on
    },
    gifts: []
  });
  const [summary, setSummary] = useState('');

  const handleOccasionChange = (e) => {
    const occasion = e.target.value;
    setBookingData({ ...bookingData, occasion, occasionDetails: {} });
  };

  const handleAdditionalOptions = (option, value) => {
    setBookingData({
      ...bookingData,
      additionalOptions: { ...bookingData.additionalOptions, [option]: value },
    });
  };

  const handleOccasionDetailsChange = (field, value) => {
    setBookingData({
      ...bookingData,
      occasionDetails: { ...bookingData.occasionDetails, [field]: value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = '776098948';
    const message = `New Booking Request:%0A
Location: ${bookingData.location}%0A
Date: ${bookingData.date}%0A
Time: ${bookingData.time}%0A
Package: ${bookingData.package}%0A
Occasion: ${bookingData.occasion}%0A
Details: ${JSON.stringify(bookingData.occasionDetails)}%0A
Cake: ${bookingData.cake}%0A
Needs Package: ${bookingData.needsPackage}%0A
Additional Options: ${JSON.stringify(bookingData.additionalOptions)}%0A
Gifts: ${bookingData.gifts.join(', ')}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div
            className="bg-white rounded-lg max-w-md w-full p-6 relative overflow-y-auto"
            style={{ maxHeight: '90vh' }} // Ensures the modal doesn't exceed 90% of the viewport height
          >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-6">Book Your Private Theater</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Select Location</span>
              </div>
            </label>
            <select
              required
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={bookingData.location}
              onChange={(e) => setBookingData({ ...bookingData, location: e.target.value })}
            >
              <option value="">Select a location</option>
              <option value="RR Nagar">RR Nagar</option>
              <option value="Coming Soon">Coming Soon</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Select Date</span>
              </div>
            </label>
            <input
              type="date"
              required
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={bookingData.date}
              onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Select Time</span>
              </div>
            </label>
            <select
              required
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={bookingData.time}
              onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
            >
              <option value="">Select a time slot</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="7:00 PM">7:00 PM</option>
              <option value="10:00 PM">10:00 PM</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Select Package</span>
              </div>
            </label>
            <select
              required
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={bookingData.package}
              onChange={(e) => setBookingData({ ...bookingData, package: e.target.value })}
            >
              <option value="">Select a package</option>
              <option value="Family Theatre - 1599">Family Theatre - ₹1599</option>
              <option value="Couples Theatre - 1111">Couples Theatre - ₹1111</option>
              <option value="Friends Theatre - 1599">Friends Theatre - ₹1599</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4" />
                <span>Select Occasion</span>
              </div>
            </label>
            <select
              required
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={bookingData.occasion}
              onChange={handleOccasionChange}
            >
              <option value="">Select an occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Romantic Date">Romantic Date</option>
              <option value="Marriage Proposal">Marriage Proposal</option>
              <option value="Bride to Be">Bride to Be</option>
              <option value="Groom to Be">Groom to Be</option>
              <option value="Farewell">Farewell</option>
              <option value="Victory Celebration">Victory Celebration</option>
              <option value="Baby Shower">Baby Shower</option>
            </select>
          </div>

          {/* Additional occasion-specific questions */}
          {bookingData.occasion === 'Birthday' && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Enter Birthday Details</h3>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Name of Birthday Person"
                  required
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={(e) => handleOccasionDetailsChange('birthdayPerson', e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Age"
                  required
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={(e) => handleOccasionDetailsChange('age', e.target.value)}
                />
              </div>
            </div>
          )}

          {bookingData.occasion === 'Anniversary' && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Enter Anniversary Details</h3>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={(e) => handleOccasionDetailsChange('yourName', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Partner's Name"
                  required
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={(e) => handleOccasionDetailsChange('partnerName', e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Years Together"
                  required
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={(e) => handleOccasionDetailsChange('yearsTogether', e.target.value)}
                />
              </div>
            </div>
          )}

          {bookingData.occasion === 'Romantic Date' && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Enter Romantic Date Details</h3>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={(e) => handleOccasionDetailsChange('yourName', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Partner's Name"
                  required
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={(e) => handleOccasionDetailsChange('partnerName', e.target.value)}
                />
              </div>
            </div>
          )}

          {bookingData.occasion === 'Marriage Proposal' && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Enter Proposal Details</h3>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={(e) => handleOccasionDetailsChange('yourName', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Partner's Name"
                  required
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={(e) => handleOccasionDetailsChange('partnerName', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Special Message"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={(e) => handleOccasionDetailsChange('specialMessage', e.target.value)}
                />
              </div>
            </div>
          )}

          {bookingData.occasion === 'Bride to Be' && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Enter Bride to Be Details</h3>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Name of the Bride"
                  required
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={(e) => handleOccasionDetailsChange('brideName', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Special Message"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={(e) => handleOccasionDetailsChange('specialMessage', e.target.value)}
                />
              </div>
            </div>
          )}

          {bookingData.occasion === 'Groom to Be' && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Enter Groom to Be Details</h3>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Name of the Groom"
                  required
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={(e) => handleOccasionDetailsChange('groomName', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Special Message"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={(e) => handleOccasionDetailsChange('specialMessage', e.target.value)}
                />
              </div>
            </div>
          )}

          {bookingData.occasion === 'Farewell' && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Enter Farewell Details</h3>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Name of the Person"
                  required
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={(e) => handleOccasionDetailsChange('farewellPerson', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Special Message"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={(e) => handleOccasionDetailsChange('specialMessage', e.target.value)}
                />
              </div>
            </div>
          )}

          {bookingData.occasion === 'Victory Celebration' && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Enter Victory Celebration Details</h3>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Name of the Person/Team"
                  required
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={(e) => handleOccasionDetailsChange('victoryPersonTeam', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Special Message"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={(e) => handleOccasionDetailsChange('specialMessage', e.target.value)}
                />
              </div>
            </div>
          )}

          {bookingData.occasion === 'Baby Shower' && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Enter Baby Shower Details</h3>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Name of the Mother"
                  required
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={(e) => handleOccasionDetailsChange('motherName', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Special Message"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={(e) => handleOccasionDetailsChange('specialMessage', e.target.value)}
                />
              </div>
            </div>
          )}

          <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <div className="flex items-center gap-2">
                  <Cake className="w-4 h-4" />
                  <span>Select Cake</span>
                </div>
              </label>
              <select
                required
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={bookingData.cake}
                onChange={(e) => setBookingData({ ...bookingData, cake: e.target.value })}
              >
                <option value="">Select a cake</option>
                <option value="Chocolate Cake - 500">Chocolate Cake - ₹500</option>
                <option value="Black Forest Cake - 500">Black Forest Cake - ₹500</option>
                <option value="Butterscotch Cake - 500">Butterscotch Cake - ₹500</option>
                <option value="Pineapple Cake - 500">Pineapple Cake - ₹500</option>
                <option value="Red Velvet Round Cake - 600">Red Velvet Round Cake - ₹600</option>
                <option value="Irish Coffee Cake - 600">Irish Coffee Cake - ₹600</option>
                <option value="Red Velvet Heart Cake - 750">Red Velvet Heart Cake - ₹750</option>
                <option value="Choco Truffle Cake - 800">Choco Truffle Cake - ₹800</option>
                <option value="DBC Cake - 800">DBC Cake - ₹800</option>
                <option value="Choco Oreo Cake - 800">Choco Oreo Cake - ₹800</option>
                <option value="Choco Chip Loaded Cake - 800">Choco Chip Loaded Cake - ₹800</option>
                <option value="Kit Jar Cake - 1000">Kit Jar Cake - ₹1000</option>
              </select>
            </div>
           <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Do you want a Gold Package?</span>
                </div>
              </label>
              <select
                required
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={bookingData.needsPackage}
                onChange={(e) => setBookingData({ ...bookingData, needsPackage: e.target.value })}
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            
            {/* Show Gold Package if 'Yes' */}
            {bookingData.needsPackage === 'Yes' && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Gold Package Details</h3>
                <p>
                  {bookingData.package === 'Family Theatre - 1599' || bookingData.package === 'Friends Theatre - 1599'
                    ? 'Gold Package Price: ₹2500'
                    : 'Gold Package Price: ₹2000'}
                </p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>3 Hour Theatre</li>
                  <li>Decoration</li>
                  <li>Photography & Videography (with edits)</li>
                  <li>Fog Entry (4 pots)</li>
                </ul>
              </div>
            )}
            
            {/* Show individual options if 'No' */}
            {bookingData.needsPackage === 'No' && (
              <div className="mt-4 space-y-4">
                {/* Decoration Option */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Decoration (₹500)</label>
                  <select
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={bookingData.additionalOptions.decoration}
                    onChange={(e) =>
                      handleAdditionalOptions('decoration', e.target.value === 'Yes' ? true : false)
                    }
                  >
                    <option value="">Select an option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
            
                {/* Fog Entry Option */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fog Entry</label>
                  <select
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={bookingData.additionalOptions.fogEntry}
                    onChange={(e) => handleAdditionalOptions('fogEntry', e.target.value)}
                  >
                    <option value="">Select fog entry option</option>
                    <option value="1 pot - 300">1 pot - ₹300</option>
                    <option value="2 pots - 500">2 pots - ₹500</option>
                    <option value="3 pots - 700">3 pots - ₹700</option>
                    <option value="4 pots - 900">4 pots - ₹900</option>
                    <option value="Grand Fog Entry (10 pots) - 1599">Grand Fog Entry (10 pots) - ₹1599</option>
                  </select>
                </div>
            
                {/* Photography & Videography Option */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Photography & Videography (₹699)
                  </label>
                  <select
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={bookingData.additionalOptions.photography}
                    onChange={(e) =>
                      handleAdditionalOptions('photography', e.target.value === 'Yes' ? true : false)
                    }
                  >
                    <option value="">Select an option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  <p className="text-sm text-gray-500 mt-1">
                    Includes 30 minutes, 30 pictures, 15 candid shots & a 30-second Instagram reel (spot edit)
                  </p>
                </div>
              </div>
            )}
          {/* Booking Summary */}
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Booking Summary</h3>
            <ul className="space-y-2">
              <li><strong>Location:</strong> {bookingData.location || 'Not selected'}</li>
              <li><strong>Date:</strong> {bookingData.date || 'Not selected'}</li>
              <li><strong>Time:</strong> {bookingData.time || 'Not selected'}</li>
              <li><strong>Package:</strong> {bookingData.package || 'Not selected'}</li>
              <li><strong>Occasion:</strong> {bookingData.occasion || 'Not selected'}</li>
              {bookingData.cake && <li><strong>Cake:</strong> {bookingData.cake}</li>}
              {bookingData.gifts.length > 0 && (
                <li>
                  <strong>Gifts:</strong> {bookingData.gifts.join(', ')}
                </li>
              )}
              <li><strong>Special Add-Ons:</strong></li>
              <ul className="list-disc ml-5">
                {bookingData.additionalOptions.candlePath && <li>Candle Path - ₹300</li>}
                {bookingData.additionalOptions.ledNumber && <li>LED Number - ₹100</li>}
              </ul>
            </ul>
          </div>

 
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
