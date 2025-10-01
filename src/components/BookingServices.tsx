// import React from 'react';
// import { Calendar, Gift, Home, Car, Sparkles, Clock } from 'lucide-react';
// import { BookingType } from '../types';

// interface BookingServicesProps {
//   onBooking: (type: BookingType) => void;
// }

// const BookingServices: React.FC<BookingServicesProps> = ({ onBooking }) => {
//   const services = [
//     {
//       type: 'darshan' as BookingType,
//       title: 'Darshan Booking',
//       description: 'Book your temple visit slots with real-time availability',
//       icon: Calendar,
//       color: 'from-blue-500 to-blue-600',
//       available: '250 slots today',
//       price: 'Free - ₹500'
//     },
//     {
//       type: 'seva' as BookingType,
//       title: 'Seva & Puja',
//       description: 'Special rituals, homams, and religious ceremonies',
//       icon: Sparkles,
//       color: 'from-purple-500 to-purple-600',
//       available: '15 types available',
//       price: '₹200 - ₹5000'
//     },
//     {
//       type: 'accommodation' as BookingType,
//       title: 'Accommodation',
//       description: 'Guest houses, cottages & partner hotel bookings',
//       icon: Home,
//       color: 'from-green-500 to-green-600',
//       available: '25 rooms available',
//       price: '₹800 - ₹3000'
//     },
//     {
//       type: 'prasad' as BookingType,
//       title: 'Prasad Delivery',
//       description: 'Sacred offerings delivered to your doorstep',
//       icon: Gift,
//       color: 'from-yellow-400 to-yellow-500',
//       available: 'Same day delivery',
//       price: '₹100 - ₹1500'
//     },
//     {
//       type: 'parking' as BookingType,
//       title: 'Parking Slots',
//       description: 'Reserve vehicle parking in advance',
//       icon: Car,
//       color: 'from-pink-600 to-pink-700',
//       available: '120 spots available',
//       price: '₹20 - ₹100'
//     }
//   ];

//   return (
//     <section id="bookings" className="py-20 bg-blue-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Booking Services
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Experience seamless temple visits with our comprehensive booking platform. 
//             Everything you need for a divine journey, all in one place.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => {
//             const IconComponent = service.icon;
//             return (
//               <div
//                 key={service.type}
//                 className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
//               >
//                 <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
//                   <div className="flex items-center justify-between mb-4">
//                     <IconComponent className="w-8 h-8" />
//                     <div className="flex items-center space-x-1">
//                       <Clock className="w-4 h-4" />
//                       <span className="text-sm">Live</span>
//                     </div>
//                   </div>
//                   <h3 className="text-xl font-bold mb-2">{service.title}</h3>
//                   <p className="text-blue-100 text-sm">{service.description}</p>
//                 </div>
                
//                 <div className="p-6">
//                   <div className="flex justify-between items-center mb-4">
//                     <span className="text-sm text-green-600 font-medium">{service.available}</span>
//                     <span className="text-sm text-gray-600">{service.price}</span>
//                   </div>
                  
//                   <button
//                     onClick={() => onBooking(service.type)}
//                     className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200"
//                   >
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Quick Booking Stats */}
//         <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <div className="w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
//               </div>
//               <h4 className="font-bold text-lg text-gray-900">Real-time Availability</h4>
//               <p className="text-gray-600">Live slot updates every 30 seconds</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Sparkles className="w-8 h-8 text-blue-600" />
//               </div>
//               <h4 className="font-bold text-lg text-gray-900">Instant Confirmation</h4>
//               <p className="text-gray-600">QR codes sent immediately</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Gift className="w-8 h-8 text-purple-600" />
//               </div>
//               <h4 className="font-bold text-lg text-gray-900">Priority Support</h4>
//               <p className="text-gray-600">Elderly & disabled assistance</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BookingServices;





// import React, { useState } from 'react';
// import { Calendar, Gift, Home, Car, Sparkles, Clock, Download, QrCode } from 'lucide-react';
// import { BookingType } from '../types';

// interface BookingServicesProps {
//   onBooking: (type: BookingType) => void;
// }

// interface BookingDetails {
//   type: BookingType;
//   title: string;
//   bookingId: string;
//   date: string;
//   time: string;
//   price: string;
//   visitorName: string;
//   visitorCount: number;
// }

// const BookingServices: React.FC<BookingServicesProps> = ({ onBooking }) => {
//   const [showQRModal, setShowQRModal] = useState(false);
//   const [currentBooking, setCurrentBooking] = useState<BookingDetails | null>(null);
//   const [qrCodeUrl, setQrCodeUrl] = useState<string>('');

//   const services = [
//     {
//       type: 'darshan' as BookingType,
//       title: 'Darshan Booking',
//       description: 'Book your temple visit slots with real-time availability',
//       icon: Calendar,
//       color: 'from-blue-500 to-blue-600',
//       available: '250 slots today',
//       price: 'Free - ₹500'
//     },
//     {
//       type: 'seva' as BookingType,
//       title: 'Seva & Puja',
//       description: 'Special rituals, homams, and religious ceremonies',
//       icon: Sparkles,
//       color: 'from-purple-500 to-purple-600',
//       available: '15 types available',
//       price: '₹200 - ₹5000'
//     },
//     {
//       type: 'accommodation' as BookingType,
//       title: 'Accommodation',
//       description: 'Guest houses, cottages & partner hotel bookings',
//       icon: Home,
//       color: 'from-green-500 to-green-600',
//       available: '25 rooms available',
//       price: '₹800 - ₹3000'
//     },
//     {
//       type: 'prasad' as BookingType,
//       title: 'Prasad Delivery',
//       description: 'Sacred offerings delivered to your doorstep',
//       icon: Gift,
//       color: 'from-yellow-400 to-yellow-500',
//       available: 'Same day delivery',
//       price: '₹100 - ₹1500'
//     },
//     {
//       type: 'parking' as BookingType,
//       title: 'Parking Slots',
//       description: 'Reserve vehicle parking in advance',
//       icon: Car,
//       color: 'from-pink-600 to-pink-700',
//       available: '120 spots available',
//       price: '₹20 - ₹100'
//     }
//   ];

//   // Generate booking details and QR code
//   const generateBookingDetails = (service: typeof services[0]) => {
//     const bookingId = `TEMPLE${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
//     const now = new Date();
//     const bookingDate = new Date(now.getTime() + 24 * 60 * 60 * 1000); // Tomorrow
    
//     const bookingDetails: BookingDetails = {
//       type: service.type,
//       title: service.title,
//       bookingId,
//       date: bookingDate.toLocaleDateString('en-IN'),
//       time: '09:00 AM - 11:00 AM',
//       price: service.price.split(' - ')[1] || service.price.split(' - ')[0],
//       visitorName: 'Guest Devotee',
//       visitorCount: 1
//     };

//     return bookingDetails;
//   };

//   // Generate QR code using a service
//   const generateQRCode = (bookingDetails: BookingDetails) => {
//     const qrData = JSON.stringify({
//       bookingId: bookingDetails.bookingId,
//       type: bookingDetails.type,
//       date: bookingDetails.date,
//       time: bookingDetails.time,
//       title: bookingDetails.title,
//       price: bookingDetails.price
//     });

//     // Using QR Code Generator API (you can replace with your preferred QR service)
//     const encodedData = encodeURIComponent(qrData);
//     const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodedData}&format=png`;
    
//     return qrUrl;
//   };

//   const handleBooking = (service: typeof services[0]) => {
//     // Simulate booking process
//     const bookingDetails = generateBookingDetails(service);
//     const qrCode = generateQRCode(bookingDetails);
    
//     setCurrentBooking(bookingDetails);
//     setQrCodeUrl(qrCode);
//     setShowQRModal(true);
    
//     // Call the original onBooking callback
//     onBooking(service.type);
//   };

//   const downloadQRCode = () => {
//     if (qrCodeUrl) {
//       const link = document.createElement('a');
//       link.href = qrCodeUrl;
//       link.download = `temple-booking-${currentBooking?.bookingId}.png`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     }
//   };

//   const closeModal = () => {
//     setShowQRModal(false);
//     setCurrentBooking(null);
//     setQrCodeUrl('');
//   };

//   return (
//     <>
//       <section id="bookings" className="py-20 bg-blue-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Booking Services
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Experience seamless temple visits with our comprehensive booking platform. 
//               Everything you need for a divine journey, all in one place.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => {
//               const IconComponent = service.icon;
//               return (
//                 <div
//                   key={service.type}
//                   className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
//                 >
//                   <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
//                     <div className="flex items-center justify-between mb-4">
//                       <IconComponent className="w-8 h-8" />
//                       <div className="flex items-center space-x-1">
//                         <Clock className="w-4 h-4" />
//                         <span className="text-sm">Live</span>
//                       </div>
//                     </div>
//                     <h3 className="text-xl font-bold mb-2">{service.title}</h3>
//                     <p className="text-blue-100 text-sm">{service.description}</p>
//                   </div>
                  
//                   <div className="p-6">
//                     <div className="flex justify-between items-center mb-4">
//                       <span className="text-sm text-green-600 font-medium">{service.available}</span>
//                       <span className="text-sm text-gray-600">{service.price}</span>
//                     </div>
                    
//                     <button
//                       onClick={() => handleBooking(service)}
//                       className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200"
//                     >
//                       Book Now
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Quick Booking Stats */}
//           <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="text-center">
//                 <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <div className="w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
//                 </div>
//                 <h4 className="font-bold text-lg text-gray-900">Real-time Availability</h4>
//                 <p className="text-gray-600">Live slot updates every 30 seconds</p>
//               </div>
//               <div className="text-center">
//                 <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Sparkles className="w-8 h-8 text-blue-600" />
//                 </div>
//                 <h4 className="font-bold text-lg text-gray-900">Instant Confirmation</h4>
//                 <p className="text-gray-600">QR codes sent immediately</p>
//               </div>
//               <div className="text-center">
//                 <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Gift className="w-8 h-8 text-purple-600" />
//                 </div>
//                 <h4 className="font-bold text-lg text-gray-900">Priority Support</h4>
//                 <p className="text-gray-600">Elderly & disabled assistance</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* QR Code Modal */}
//       {showQRModal && currentBooking && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all">
//             {/* Header */}
//             <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-t-2xl text-white">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-3">
//                   <QrCode className="w-8 h-8" />
//                   <div>
//                     <h3 className="text-xl font-bold">Booking Confirmed!</h3>
//                     <p className="text-green-100 text-sm">Your {currentBooking.title} is confirmed</p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={closeModal}
//                   className="text-white hover:text-green-200 transition-colors"
//                 >
//                   <Clock className="w-6 h-6" />
//                 </button>
//               </div>
//             </div>

//             {/* Booking Details */}
//             <div className="p-6">
//               <div className="text-center mb-6">
//                 <div className="bg-gray-100 p-4 rounded-lg inline-block mb-4">
//                   <img 
//                     src={qrCodeUrl} 
//                     alt="Booking QR Code" 
//                     className="w-48 h-48 mx-auto"
//                   />
//                 </div>
//                 <p className="text-sm text-gray-600 mb-2">
//                   Scan this QR code at the temple entrance
//                 </p>
//                 <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
//                   <p className="text-sm text-yellow-800 font-medium">
//                     Booking ID: <span className="font-bold">{currentBooking.bookingId}</span>
//                   </p>
//                 </div>
//               </div>

//               <div className="space-y-3 mb-6">
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="text-gray-600">Service Type</span>
//                   <span className="font-semibold">{currentBooking.title}</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="text-gray-600">Date</span>
//                   <span className="font-semibold">{currentBooking.date}</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="text-gray-600">Time Slot</span>
//                   <span className="font-semibold">{currentBooking.time}</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="text-gray-600">Visitor</span>
//                   <span className="font-semibold">{currentBooking.visitorName}</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2">
//                   <span className="text-gray-600">Amount Paid</span>
//                   <span className="font-semibold text-green-600">₹{currentBooking.price}</span>
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex space-x-3">
//                 <button
//                   onClick={downloadQRCode}
//                   className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
//                 >
//                   <Download className="w-5 h-5" />
//                   <span>Download QR</span>
//                 </button>
//                 <button
//                   onClick={closeModal}
//                   className="flex-1 bg-gray-500 text-white py-3 rounded-xl font-semibold hover:bg-gray-600 transition-colors"
//                 >
//                   Done
//                 </button>
//               </div>

//               {/* Important Notes */}
//               <div className="mt-4 p-3 bg-blue-50 rounded-lg">
//                 <p className="text-xs text-blue-800 text-center">
//                   📱 Keep this QR code ready for scanning at the temple entrance. 
//                   Please arrive 15 minutes before your scheduled time.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default BookingServices;








// import React, { useState } from 'react';
// import { Calendar, Gift, Home, Car, Sparkles, Clock, Download, QrCode, Bike } from 'lucide-react';
// import { BookingType } from '../types';

// interface BookingServicesProps {
//   onBooking: (type: BookingType) => void;
// }

// interface BookingDetails {
//   type: BookingType;
//   title: string;
//   bookingId: string;
//   date: string;
//   time: string;
//   price: string;
//   vehicleType: string;
// }

// const BookingServices: React.FC<BookingServicesProps> = ({ onBooking }) => {
//   const [showQRModal, setShowQRModal] = useState(false);
//   const [currentBooking, setCurrentBooking] = useState<BookingDetails | null>(null);
//   const [qrCodeUrl, setQrCodeUrl] = useState<string>('');

//   const services = [
//     {
//       type: 'darshan' as BookingType,
//       title: 'Darshan Booking',
//       description: 'Book your temple visit slots with real-time availability',
//       icon: Calendar,
//       color: 'from-blue-500 to-blue-600',
//       available: '250 slots today',
//       price: 'Free - 500'
//     },
//     {
//       type: 'seva' as BookingType,
//       title: 'Seva & Puja',
//       description: 'Special rituals, homams, and religious ceremonies',
//       icon: Sparkles,
//       color: 'from-purple-500 to-purple-600',
//       available: '15 types available',
//       price: '200 - 5000'
//     },
//     {
//       type: 'accommodation' as BookingType,
//       title: 'Accommodation',
//       description: 'Guest houses, cottages & partner hotel bookings',
//       icon: Home,
//       color: 'from-green-500 to-green-600',
//       available: '25 rooms available',
//       price: '800 - 3000'
//     },
//     {
//       type: 'prasad' as BookingType,
//       title: 'Prasad Delivery',
//       description: 'Sacred offerings delivered to your doorstep',
//       icon: Gift,
//       color: 'from-yellow-400 to-yellow-500',
//       available: 'Same day delivery',
//       price: '100 - 1500'
//     },
//     {
//       type: 'parking' as BookingType,
//       title: 'Parking Slots',
//       description: 'Reserve vehicle parking in advance',
//       icon: Car,
//       color: 'from-pink-600 to-pink-700',
//       available: '120 spots available',
//       price: '20 - 100'
//     }
//   ];

//   // Generate booking details and QR code
//   const generateBookingDetails = (service: typeof services[0]) => {
//     const bookingId = `TEMPLE${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
//     const now = new Date();
    
//     const bookingDetails: BookingDetails = {
//       type: service.type,
//       title: service.title,
//       bookingId,
//       date: now.toLocaleDateString('en-IN'),
//       time: '09:00 AM - 11:00 AM',
//       price: service.price.split(' - ')[1] || service.price.split(' - ')[0],
//       vehicleType: 'Two Wheeler'
//     };

//     return bookingDetails;
//   };

//   // Generate QR code using a service
//   const generateQRCode = (bookingDetails: BookingDetails) => {
//     const qrData = JSON.stringify({
//       bookingId: bookingDetails.bookingId,
//       type: bookingDetails.type,
//       date: bookingDetails.date,
//       time: bookingDetails.time,
//       title: bookingDetails.title,
//       price: bookingDetails.price,
//       vehicleType: bookingDetails.vehicleType
//     });

//     // Using QR Code Generator API (you can replace with your preferred QR service)
//     const encodedData = encodeURIComponent(qrData);
//     const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodedData}&format=png`;
    
//     return qrUrl;
//   };

//   const handleBooking = (service: typeof services[0]) => {
//     // Simulate booking process
//     const bookingDetails = generateBookingDetails(service);
//     const qrCode = generateQRCode(bookingDetails);
    
//     setCurrentBooking(bookingDetails);
//     setQrCodeUrl(qrCode);
//     setShowQRModal(true);
    
//     // Call the original onBooking callback
//     onBooking(service.type);
//   };

//   const downloadQRCode = () => {
//     if (qrCodeUrl) {
//       const link = document.createElement('a');
//       link.href = qrCodeUrl;
//       link.download = `temple-booking-${currentBooking?.bookingId}.png`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     }
//   };

//   const closeModal = () => {
//     setShowQRModal(false);
//     setCurrentBooking(null);
//     setQrCodeUrl('');
//   };

//   return (
//     <>
//       <section id="bookings" className="py-20 bg-blue-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Booking Services
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Experience seamless temple visits with our comprehensive booking platform. 
//               Everything you need for a divine journey, all in one place.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => {
//               const IconComponent = service.icon;
//               return (
//                 <div
//                   key={service.type}
//                   className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
//                 >
//                   <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
//                     <div className="flex items-center justify-between mb-4">
//                       <IconComponent className="w-8 h-8" />
//                       <div className="flex items-center space-x-1">
//                         <Clock className="w-4 h-4" />
//                         <span className="text-sm">Live</span>
//                       </div>
//                     </div>
//                     <h3 className="text-xl font-bold mb-2">{service.title}</h3>
//                     <p className="text-blue-100 text-sm">{service.description}</p>
//                   </div>
                  
//                   <div className="p-6">
//                     <div className="flex justify-between items-center mb-4">
//                       <span className="text-sm text-green-600 font-medium">{service.available}</span>
//                       <span className="text-sm text-gray-600">₹{service.price}</span>
//                     </div>
                    
//                     <button
//                       onClick={() => handleBooking(service)}
//                       className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200"
//                     >
//                       Book Now
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Quick Booking Stats */}
//           <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="text-center">
//                 <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <div className="w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
//                 </div>
//                 <h4 className="font-bold text-lg text-gray-900">Real-time Availability</h4>
//                 <p className="text-gray-600">Live slot updates every 30 seconds</p>
//               </div>
//               <div className="text-center">
//                 <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Sparkles className="w-8 h-8 text-blue-600" />
//                 </div>
//                 <h4 className="font-bold text-lg text-gray-900">Instant Confirmation</h4>
//                 <p className="text-gray-600">QR codes sent immediately</p>
//               </div>
//               <div className="text-center">
//                 <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Gift className="w-8 h-8 text-purple-600" />
//                 </div>
//                 <h4 className="font-bold text-lg text-gray-900">Priority Support</h4>
//                 <p className="text-gray-600">Elderly & disabled assistance</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* QR Code Modal */}
//       {showQRModal && currentBooking && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all">
//             {/* Header */}
//             <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-t-2xl text-white">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-3">
//                   <QrCode className="w-8 h-8" />
//                   <div>
//                     <h3 className="text-xl font-bold">Booking Confirmed!</h3>
//                     <p className="text-green-100 text-sm">Your {currentBooking.title} is confirmed</p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={closeModal}
//                   className="text-white hover:text-green-200 transition-colors"
//                 >
//                   <Clock className="w-6 h-6" />
//                 </button>
//               </div>
//             </div>

//             {/* Booking Details */}
//             <div className="p-6">
//               <div className="text-center mb-6">
//                 <div className="bg-gray-100 p-4 rounded-lg inline-block mb-4">
//                   <img 
//                     src={qrCodeUrl} 
//                     alt="Booking QR Code" 
//                     className="w-48 h-48 mx-auto"
//                   />
//                 </div>
//                 <p className="text-sm text-gray-600 mb-2">
//                   Scan this QR code at the temple entrance
//                 </p>
//                 <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
//                   <p className="text-sm text-yellow-800 font-medium">
//                     Booking ID: <span className="font-bold">{currentBooking.bookingId}</span>
//                   </p>
//                 </div>
//               </div>

//               <div className="space-y-3 mb-6">
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="text-gray-600">Service Type</span>
//                   <span className="font-semibold">{currentBooking.title}</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="text-gray-600">Date</span>
//                   <span className="font-semibold">{currentBooking.date}</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="text-gray-600">Time Slot</span>
//                   <span className="font-semibold">{currentBooking.time}</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="text-gray-600">Vehicle Type</span>
//                   <span className="font-semibold flex items-center space-x-1">
//                     <Bike className="w-4 h-4" />
//                     <span>{currentBooking.vehicleType}</span>
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center py-2">
//                   <span className="text-gray-600">Amount Paid</span>
//                   <span className="font-semibold text-green-600">₹{currentBooking.price}</span>
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex space-x-3">
//                 <button
//                   onClick={downloadQRCode}
//                   className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
//                 >
//                   <Download className="w-5 h-5" />
//                   <span>Download QR</span>
//                 </button>
//                 <button
//                   onClick={closeModal}
//                   className="flex-1 bg-gray-500 text-white py-3 rounded-xl font-semibold hover:bg-gray-600 transition-colors"
//                 >
//                   Done
//                 </button>
//               </div>

//               {/* Important Notes */}
//               <div className="mt-4 p-3 bg-blue-50 rounded-lg">
//                 <p className="text-xs text-blue-800 text-center">
//                   📱 Keep this QR code ready for scanning at the temple entrance. 
//                   Please arrive 15 minutes before your scheduled time.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default BookingServices;






import React, { useState } from 'react';
import { Calendar, Gift, Home, Car, Sparkles, Clock, Download, QrCode, Bike, ArrowLeft, Users, UserCheck, Crown, Heart } from 'lucide-react';
import { BookingType } from '../types';

interface BookingServicesProps {
  onBooking: (type: BookingType) => void;
}

interface BookingDetails {
  type: BookingType;
  title: string;
  bookingId: string;
  date: string;
  time: string;
  price: string;
  specialInfo?: string;
  specialIcon?: React.ComponentType<any>;
}

interface DarshanOption {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: React.ComponentType<any>;
  color: string;
  availableSlots: string;
}

const BookingServices: React.FC<BookingServicesProps> = ({ onBooking }) => {
  const [showQRModal, setShowQRModal] = useState(false);
  const [showDarshanOptions, setShowDarshanOptions] = useState(false);
  const [currentBooking, setCurrentBooking] = useState<BookingDetails | null>(null);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      type: 'darshan' as BookingType,
      title: 'Darshan Booking',
      description: 'Book your temple visit slots with real-time availability',
      icon: Calendar,
      color: 'from-blue-500 to-blue-600',
      available: '250 slots today',
      price: 'Free - 500',
      specialIcon: Heart,
      specialInfo: 'Disabled Access'
    },
    {
      type: 'seva' as BookingType,
      title: 'Seva & Puja',
      description: 'Special rituals, homams, and religious ceremonies',
      icon: Sparkles,
      color: 'from-purple-500 to-purple-600',
      available: '15 types available',
      price: '200 - 5000',
      specialIcon: Sparkles,
      specialInfo: 'Ritual Types'
    },
    {
      type: 'accommodation' as BookingType,
      title: 'Accommodation',
      description: 'Guest houses, cottages & partner hotel bookings',
      icon: Home,
      color: 'from-green-500 to-green-600',
      available: '25 rooms available',
      price: '800 - 3000',
      specialIcon: Home,
      specialInfo: 'Room Types'
    },
    {
      type: 'prasad' as BookingType,
      title: 'Prasad Delivery',
      description: 'Sacred offerings delivered to your doorstep',
      icon: Gift,
      color: 'from-yellow-400 to-yellow-500',
      available: 'Same day delivery',
      price: '100 - 1500',
      specialIcon: Gift,
      specialInfo: 'Prasad Types'
    },
    {
      type: 'parking' as BookingType,
      title: 'Parking Slots',
      description: 'Reserve vehicle parking in advance',
      icon: Car,
      color: 'from-pink-600 to-pink-700',
      available: '120 spots available',
      price: '20 - 100',
      specialIcon: Bike,
      specialInfo: 'Two Wheeler'
    }
  ];

  const darshanOptions: DarshanOption[] = [
    {
      id: 'normal',
      title: 'Normal Darshan',
      description: 'Regular queue darshan with general access',
      price: 'Free',
      icon: Users,
      color: 'from-blue-400 to-blue-500',
      availableSlots: '150 available'
    },
    {
      id: 'special',
      title: 'Special Darshan',
      description: 'Faster access with shorter waiting time',
      price: '200',
      icon: UserCheck,
      color: 'from-green-400 to-green-500',
      availableSlots: '80 available'
    },
    {
      id: 'vip',
      title: 'VIP Darshan',
      description: 'Premium experience with priority access',
      price: '500',
      icon: Crown,
      color: 'from-purple-400 to-purple-500',
      availableSlots: '20 available'
    },
    {
      id: 'disabled',
      title: 'Disabled Persons',
      description: 'Special access for differently abled devotees',
      price: 'Free',
      icon: Heart,
      color: 'from-orange-400 to-orange-500',
      availableSlots: '15 available'
    }
  ];

  // Generate booking details and QR code
  const generateBookingDetails = (service: typeof services[0], darshanType?: string) => {
    const bookingId = `TEMPLE${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    const now = new Date();
    
    const bookingDetails: BookingDetails = {
      type: service.type,
      title: service.title,
      bookingId,
      date: now.toLocaleDateString('en-IN'),
      time: '09:00 AM - 11:00 AM',
      price: darshanType ? 
        darshanOptions.find(opt => opt.id === darshanType)?.price || service.price.split(' - ')[1] || service.price.split(' - ')[0] 
        : service.price.split(' - ')[1] || service.price.split(' - ')[0],
      specialInfo: service.specialInfo,
      specialIcon: service.specialIcon
    };

    return bookingDetails;
  };

  // Generate QR code using a service
  const generateQRCode = (bookingDetails: BookingDetails) => {
    const qrData = JSON.stringify({
      bookingId: bookingDetails.bookingId,
      type: bookingDetails.type,
      date: bookingDetails.date,
      time: bookingDetails.time,
      title: bookingDetails.title,
      price: bookingDetails.price,
      specialInfo: bookingDetails.specialInfo
    });

    // Using QR Code Generator API (you can replace with your preferred QR service)
    const encodedData = encodeURIComponent(qrData);
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodedData}&format=png`;
    
    return qrUrl;
  };

  const handleBooking = (service: typeof services[0]) => {
    if (service.type === 'darshan') {
      setSelectedService(service);
      setShowDarshanOptions(true);
    } else {
      // For other services, proceed directly
      const bookingDetails = generateBookingDetails(service);
      const qrCode = generateQRCode(bookingDetails);
      
      setCurrentBooking(bookingDetails);
      setQrCodeUrl(qrCode);
      setShowQRModal(true);
      
      onBooking(service.type);
    }
  };

  const handleDarshanTypeSelect = (darshanType: string) => {
    if (selectedService) {
      const bookingDetails = generateBookingDetails(selectedService, darshanType);
      const qrCode = generateQRCode(bookingDetails);
      
      setCurrentBooking(bookingDetails);
      setQrCodeUrl(qrCode);
      setShowQRModal(true);
      setShowDarshanOptions(false);
      
      onBooking(selectedService.type);
    }
  };

  const downloadQRCode = () => {
    if (qrCodeUrl) {
      const link = document.createElement('a');
      link.href = qrCodeUrl;
      link.download = `temple-booking-${currentBooking?.bookingId}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const closeModal = () => {
    setShowQRModal(false);
    setShowDarshanOptions(false);
    setCurrentBooking(null);
    setQrCodeUrl('');
    setSelectedService(null);
  };

  const goBackToServices = () => {
    setShowDarshanOptions(false);
    setSelectedService(null);
  };

  return (
    <>
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
                      <span className="text-sm text-gray-600">₹{service.price}</span>
                    </div>
                    
                    <button
                      onClick={() => handleBooking(service)}
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

      {/* Darshan Options Modal */}
      {showDarshanOptions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full transform transition-all">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-t-2xl text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={goBackToServices}
                    className="text-white hover:text-blue-200 transition-colors"
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                  <div>
                    <h3 className="text-xl font-bold">Choose Darshan Type</h3>
                    <p className="text-blue-100 text-sm">Select your preferred darshan experience</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  <Clock className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Darshan Options */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {darshanOptions.map((option) => {
                  const IconComponent = option.icon;
                  return (
                    <div
                      key={option.id}
                      onClick={() => handleDarshanTypeSelect(option.id)}
                      className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={`bg-gradient-to-r ${option.color} p-3 rounded-lg`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm text-green-600 font-medium">{option.availableSlots}</span>
                      </div>
                      
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{option.title}</h4>
                      <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-gray-900">
                          {option.price === 'Free' ? 'Free' : `₹${option.price}`}
                        </span>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                          Select
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Important Notes */}
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h5 className="font-semibold text-yellow-800 mb-2">Important Information:</h5>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Normal Darshan: General queue with approximate waiting time 2-3 hours</li>
                  <li>• Special Darshan: Reduced waiting time of 30-45 minutes</li>
                  <li>• VIP Darshan: Priority access with minimal waiting</li>
                  <li>• Disabled Persons: Special access for differently abled devotees</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* QR Code Modal */}
      {showQRModal && currentBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-t-2xl text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <QrCode className="w-8 h-8" />
                  <div>
                    <h3 className="text-xl font-bold">Booking Confirmed!</h3>
                    <p className="text-green-100 text-sm">Your {currentBooking.title} is confirmed</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white hover:text-green-200 transition-colors"
                >
                  <Clock className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Booking Details */}
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="bg-gray-100 p-4 rounded-lg inline-block mb-4">
                  <img 
                    src={qrCodeUrl} 
                    alt="Booking QR Code" 
                    className="w-48 h-48 mx-auto"
                  />
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Scan this QR code at the temple entrance
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <p className="text-sm text-yellow-800 font-medium">
                    Booking ID: <span className="font-bold">{currentBooking.bookingId}</span>
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Service Type</span>
                  <span className="font-semibold">{currentBooking.title}</span>
                </div>
                {currentBooking.darshanType && (
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Darshan Type</span>
                    <span className="font-semibold">{currentBooking.darshanType}</span>
                  </div>
                )}
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Date</span>
                  <span className="font-semibold">{currentBooking.date}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Time Slot</span>
                  <span className="font-semibold">{currentBooking.time}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">{currentBooking.specialInfo}</span>
                  <span className="font-semibold flex items-center space-x-1">
                    {currentBooking.specialIcon && (
                      <>
                        <currentBooking.specialIcon className="w-4 h-4" />
                        <span>{currentBooking.specialInfo}</span>
                      </>
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Amount Paid</span>
                  <span className="font-semibold text-green-600">
                    {currentBooking.price === 'Free' ? 'Free' : `₹${currentBooking.price}`}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={downloadQRCode}
                  className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Download QR</span>
                </button>
                <button
                  onClick={closeModal}
                  className="flex-1 bg-gray-500 text-white py-3 rounded-xl font-semibold hover:bg-gray-600 transition-colors"
                >
                  Done
                </button>
              </div>

              {/* Important Notes */}
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-xs text-blue-800 text-center">
                  📱 Keep this QR code ready for scanning at the temple entrance. 
                  Please arrive 15 minutes before your scheduled time.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingServices;