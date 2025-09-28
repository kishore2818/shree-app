import React from 'react';
import { Calendar, Gift, Home, Car, Sparkles, Clock } from 'lucide-react';
import { BookingType } from '../types';

interface BookingServicesProps {
  onBooking: (type: BookingType) => void;
}

const BookingServices: React.FC<BookingServicesProps> = ({ onBooking }) => {
  const services = [
    {
      type: 'darshan' as BookingType,
      title: 'Darshan Booking',
      description: 'Book your temple visit slots with real-time availability',
      icon: Calendar,
      color: 'from-blue-500 to-blue-600',
      available: '250 slots today',
      price: 'Free - ₹500'
    },
    {
      type: 'seva' as BookingType,
      title: 'Seva & Puja',
      description: 'Special rituals, homams, and religious ceremonies',
      icon: Sparkles,
      color: 'from-purple-500 to-purple-600',
      available: '15 types available',
      price: '₹200 - ₹5000'
    },
    {
      type: 'accommodation' as BookingType,
      title: 'Accommodation',
      description: 'Guest houses, cottages & partner hotel bookings',
      icon: Home,
      color: 'from-green-500 to-green-600',
      available: '25 rooms available',
      price: '₹800 - ₹3000'
    },
    {
      type: 'prasad' as BookingType,
      title: 'Prasad Delivery',
      description: 'Sacred offerings delivered to your doorstep',
      icon: Gift,
      color: 'from-yellow-400 to-yellow-500',
      available: 'Same day delivery',
      price: '₹100 - ₹1500'
    },
    {
      type: 'parking' as BookingType,
      title: 'Parking Slots',
      description: 'Reserve vehicle parking in advance',
      icon: Car,
      color: 'from-pink-600 to-pink-700',
      available: '120 spots available',
      price: '₹20 - ₹100'
    }
  ];

  return (
    <section id="bookings" className="py-20 bg-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Booking Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience seamless temple visits with our comprehensive booking platform. 
            Everything you need for a divine journey, all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.type}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="w-8 h-8" />
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">Live</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-blue-100 text-sm">{service.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-green-600 font-medium">{service.available}</span>
                    <span className="text-sm text-gray-600">{service.price}</span>
                  </div>
                  
                  <button
                    onClick={() => onBooking(service.type)}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Booking Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <h4 className="font-bold text-lg text-gray-900">Real-time Availability</h4>
              <p className="text-gray-600">Live slot updates every 30 seconds</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-lg text-gray-900">Instant Confirmation</h4>
              <p className="text-gray-600">QR codes sent immediately</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-lg text-gray-900">Priority Support</h4>
              <p className="text-gray-600">Elderly & disabled assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingServices;