import React, { useState } from 'react';
import { Check } from 'lucide-react';

const PricingDetails = () => {
  const [step, setStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const packages = [
    {
      name: 'Family Theater',
      price: 1599,
      description: 'Perfect for family celebrations',
      features: ['8-10 people', '3 Hours Duration', 'Premium Sound System', 'Comfortable Seating', 'Private Ambiance']
    },
    {
      name: 'Group Theater',
      price: 1599,
      description: 'Ideal for friend gatherings',
      features: ['6-8 people', '3 Hours Duration', 'Premium Sound System', 'Comfortable Seating', 'Private Ambiance']
    },
    {
      name: 'Couple Theater',
      price: 1111,
      description: 'Romantic setting for couples',
      features: ['2 people', '3 Hours Duration', 'Premium Sound System', 'Couple Seating', 'Private Ambiance']
    }
  ];

  const addOns = [
    { name: 'Photography & Videography', price: 699 },
    { name: 'Basic Decoration', price: 500 },
    { name: 'Candle Path', price: 300 },
    { name: 'LED Number', price: 100 },
    { name: '1 Pot Fog Entry', price: 300 },
    { name: '2 Pots Fog Entry', price: 500 },
    { name: '3 Pots Fog Entry', price: 700 },
    { name: '4 Pots Fog Entry', price: 900 },
    { name: 'Grand Fog Entry (10 Pots)', price: 1599 }
  ];

  const timeSlots = [
    '9:30 AM to 12:30 PM',
    '12:30 PM to 3:30 PM',
    '3:30 PM to 6:30 PM',
    '6:30 PM to 9:30 PM',
    '9:30 PM to 12:30 AM'
  ];

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    setStep(2);
  };

  const handleAddOnToggle = (addOn) => {
    if (selectedAddOns.includes(addOn)) {
      setSelectedAddOns(selectedAddOns.filter((item) => item !== addOn));
    } else {
      setSelectedAddOns([...selectedAddOns, addOn]);
    }
  };

  const handleTimeSlotSelect = (slot) => {
    setSelectedTimeSlot(slot);
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const calculateSubtotal = () => {
    const addOnsTotal = selectedAddOns.reduce((total, addOn) => total + addOn.price, 0);
    return selectedPackage ? selectedPackage.price + addOnsTotal : addOnsTotal;
  };

  const calculateAdvance = () => {
    return Math.round(calculateSubtotal() * 0.3);
  };

  return (
    <div className="py-10 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-2">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 text-sm ${
                  step >= s ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-gray-300 text-gray-500'
                }`}
              >
                {s}
              </div>
            ))}
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-xs">
            <h3 className="text-md font-bold mb-2">Booking Summary</h3>
            {selectedPackage && (
              <p className="mb-2 text-sm">
                {selectedPackage.name} ({selectedPackage.features[0]}) - ₹{selectedPackage.price}
              </p>
            )}
            {selectedAddOns.length > 0 && (
              <ul className="mb-2 text-sm">
                {selectedAddOns.map((addOn) => (
                  <li key={addOn.name} className="flex justify-between">
                    <span>{addOn.name}</span>
                    <span>₹{addOn.price}</span>
                  </li>
                ))}
              </ul>
            )}
            <p className="font-bold text-sm">Subtotal: ₹{calculateSubtotal()}</p>
            <p className="font-bold text-sm">Advance (30%): ₹{calculateAdvance()}</p>
            <p className="font-bold text-sm">Balance: ₹{calculateSubtotal() - calculateAdvance()}</p>
          </div>
        </div>

        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Select Your Theater</h2>
            <div className="grid gap-4">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300 cursor-pointer"
                  onClick={() => handlePackageSelect(pkg)}
                >
                  <h3 className="text-lg font-bold mb-1">{pkg.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{pkg.description}</p>
                  <p className="text-indigo-600 font-bold">₹{pkg.price}</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <button
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
                onClick={handleNextStep}
                disabled={!selectedPackage}
              >
                Continue to Next Step
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Select Time Slot</h2>
            <div className="grid gap-4">
              {timeSlots.map((slot) => (
                <div
                  key={slot}
                  className={`p-3 border rounded-lg cursor-pointer text-center text-sm ${
                    selectedTimeSlot === slot ? 'border-indigo-600 bg-indigo-100' : 'border-gray-300'
                  }`}
                  onClick={() => handleTimeSlotSelect(slot)}
                >
                  {slot}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <button
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300"
                onClick={handlePrevStep}
              >
                Back
              </button>
              <button
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
                onClick={handleNextStep}
                disabled={!selectedTimeSlot}
              >
                Continue to Next Step
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Select Add-Ons</h2>
            <div className="grid gap-4">
              {addOns.map((addOn) => (
                <div
                  key={addOn.name}
                  className={`bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300 cursor-pointer text-sm ${
                    selectedAddOns.includes(addOn) ? 'border-2 border-indigo-600' : ''
                  }`}
                  onClick={() => handleAddOnToggle(addOn)}
                >
                  <h4 className="font-semibold mb-1">{addOn.name}</h4>
                  <p className="text-indigo-600 font-bold">₹{addOn.price}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <button
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300"
                onClick={handlePrevStep}
              >
                Back
              </button>
              <button
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
                onClick={handleNextStep}
              >
                Continue to Next Step
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Booking Summary</h2>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-2">Selected Package</h3>
              <p className="mb-1 text-sm">Name: {selectedPackage.name}</p>
              <p className="mb-1 text-sm">Price: ₹{selectedPackage.price}</p>
              <p className="mb-3 text-sm">Description: {selectedPackage.description}</p>

              <h3 className="text-lg font-bold mb-2">Selected Add-Ons</h3>
              {selectedAddOns.length > 0 ? (
                <ul className="space-y-1 text-sm">
                  {selectedAddOns.map((addOn) => (
                    <li key={addOn.name} className="flex justify-between">
                      <span>{addOn.name}</span>
                      <span>₹{addOn.price}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm">No add-ons selected.</p>
              )}

              <div className="text-center mt-6">
                <button
                  className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
                  onClick={() => alert('Booking Confirmed!')}
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingDetails;
