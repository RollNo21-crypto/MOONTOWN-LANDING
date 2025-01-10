import React from 'react';
import { AlertCircle, Clock, CheckCircle, XCircle } from 'lucide-react';

const RefundPolicy = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Refund Policy</h2>
          <p className="text-gray-600">We want you to be completely satisfied with your booking</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Clock className="w-6 h-6 text-indigo-600 mr-2" />
              <h3 className="text-xl font-semibold">Cancellation Timeline</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" />
                <div>
                  <p className="font-semibold">More than 48 hours before</p>
                  <p className="text-gray-600">Full refund minus processing fees</p>
                </div>
              </li>
              <li className="flex items-start">
                <AlertCircle className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <div>
                  <p className="font-semibold">24-48 hours before</p>
                  <p className="text-gray-600">75% refund of the total amount</p>
                </div>
              </li>
              <li className="flex items-start">
                <XCircle className="w-5 h-5 text-red-500 mr-2 mt-1" />
                <div>
                  <p className="font-semibold">Less than 24 hours</p>
                  <p className="text-gray-600">No refund available</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <AlertCircle className="w-6 h-6 text-indigo-600 mr-2" />
              <h3 className="text-xl font-semibold">Special Circumstances</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" />
                <div>
                  <p className="font-semibold">Technical Issues</p>
                  <p className="text-gray-600">Full refund or complimentary rebooking if the cancellation is due to technical problems on our end</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" />
                <div>
                  <p className="font-semibold">Weather Conditions</p>
                  <p className="text-gray-600">Free rescheduling available for severe weather conditions</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">How to Request a Refund</h3>
          <div className="space-y-4">
            <p className="text-gray-600">To request a refund, please contact our customer support:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Call us at: +94 776098948</li>
              <li>Email: refunds@theaterbook.com</li>
              <li>WhatsApp: +94 776098948</li>
            </ul>
            <p className="text-gray-600">Our team will process your request within 2-3 business days.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;