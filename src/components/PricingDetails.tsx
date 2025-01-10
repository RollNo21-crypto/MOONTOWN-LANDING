import React from 'react';
import { Check } from 'lucide-react';

const PricingDetails = () => {
  const plans = [
    {
      name: 'Basic',
      price: '15,000',
      features: [
        'Up to 4 guests',
        '2-hour session',
        'Standard sound system',
        'Complimentary popcorn',
        'Basic seating arrangement'
      ]
    },
    {
      name: 'Premium',
      price: '25,000',
      features: [
        'Up to 6 guests',
        '3-hour session',
        'Premium sound system',
        'Snack package included',
        'Recliner seats',
        'Personalized service'
      ]
    },
    {
      name: 'Luxury',
      price: '35,000',
      features: [
        'Up to 8 guests',
        '4-hour session',
        'Dolby Atmos sound',
        'Full refreshment package',
        'Premium recliners',
        'Dedicated butler service',
        'Custom ambiance setup'
      ]
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-gray-600">Choose the perfect package for your private cinema experience</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-center mb-4">{plan.name}</h3>
                <div className="text-center mb-8">
                  <span className="text-4xl font-bold">Rs. {plan.price}</span>
                  <span className="text-gray-600">/session</span>
                </div>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-gray-50">
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200">
                  Select {plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4">Additional Services</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Food & Beverages</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Premium Snack Package - Rs. 5,000</li>
                <li>Gourmet Menu - Rs. 8,000</li>
                <li>Beverage Package - Rs. 3,000</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Special Occasions</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Birthday Decoration - Rs. 7,500</li>
                <li>Anniversary Setup - Rs. 10,000</li>
                <li>Custom Theme Decoration - Rs. 15,000</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingDetails;