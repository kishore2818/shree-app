// import React, { useState } from 'react';
// import { X, Calendar, Clock, Users, MapPin, CreditCard, QrCode } from 'lucide-react';
// import { BookingType, DarshanSlot, SevaOption } from '../types';

// interface BookingModalProps {
//   bookingType: BookingType;
//   onClose: () => void;
// }

// const BookingModal: React.FC<BookingModalProps> = ({ bookingType, onClose }) => {
//   const [step, setStep] = useState(1);
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedSlot, setSelectedSlot] = useState('');
//   const [guests, setGuests] = useState(1);
//   const [selectedSeva, setSelectedSeva] = useState('');
//   const [bookingComplete, setBookingComplete] = useState(false);

//   const darshanSlots: DarshanSlot[] = [
//     { id: '1', time: '6:00 AM', available: 45, total: 100 },
//     { id: '2', time: '8:00 AM', available: 23, total: 100 },
//     { id: '3', time: '10:00 AM', available: 67, total: 100 },
//     { id: '4', time: '2:00 PM', available: 89, total: 100 },
//     { id: '5', time: '4:00 PM', available: 12, total: 100 },
//     { id: '6', time: '6:00 PM', available: 0, total: 100 },
//   ];

//   const sevaOptions: SevaOption[] = [
//     { id: '1', name: 'Archana', price: 200, duration: '30 min', description: 'Special prayer with your name', available: true },
//     { id: '2', name: 'Abhishekam', price: 1500, duration: '1 hour', description: 'Sacred bathing ceremony', available: true },
//     { id: '3', name: 'Homam', price: 5000, duration: '2 hours', description: 'Fire ritual for specific purposes', available: false },
//     { id: '4', name: 'Kalyanam', price: 10000, duration: '3 hours', description: 'Divine marriage ceremony', available: true },
//   ];

//   const getBookingTitle = () => {
//     switch (bookingType) {
//       case 'darshan': return 'Book Darshan Slot';
//       case 'seva': return 'Book Seva/Puja';
//       case 'accommodation': return 'Book Accommodation';
//       case 'prasad': return 'Order Prasad';
//       case 'parking': return 'Reserve Parking';
//       default: return 'Booking';
//     }
//   };

//   const handleNext = () => {
//     if (step < 3) setStep(step + 1);
//   };

//   const handleConfirmBooking = () => {
//     setBookingComplete(true);
//   };

//   if (bookingComplete) {
//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//         <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
//           <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <QrCode className="w-8 h-8 text-green-600" />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
//           <p className="text-gray-600 mb-6">Your booking has been successfully confirmed. A QR code has been sent to your email.</p>
          
//           <div className="bg-gray-100 p-4 rounded-xl mb-6">
//             <div className="text-sm text-gray-600 mb-2">Booking ID</div>
//             <div className="text-lg font-bold text-gray-900">DDV-2024-1234</div>
//           </div>
          
//           <div className="space-y-3">
//             <button className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors">
//               View QR Code
//             </button>
//             <button
//               onClick={onClose}
//               className="w-full bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//         {/* Header */}
//         <div className="flex items-center justify-between p-6 border-b">
//           <h2 className="text-2xl font-bold text-gray-900">{getBookingTitle()}</h2>
//           <button
//             onClick={onClose}
//             className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//           >
//             <X className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Progress Steps */}
//         <div className="px-6 py-4 border-b">
//           <div className="flex items-center space-x-4">
//             {[1, 2, 3].map((stepNum) => (
//               <React.Fragment key={stepNum}>
//                 <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
//                   step >= stepNum ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-600'
//                 }`}>
//                   {stepNum}
//                 </div>
//                 {stepNum < 3 && (
//                   <div className={`flex-1 h-1 ${
//                     step > stepNum ? 'bg-orange-600' : 'bg-gray-200'
//                   }`}></div>
//                 )}
//               </React.Fragment>
//             ))}
//           </div>
//           <div className="flex justify-between mt-2 text-sm text-gray-600">
//             <span>Select</span>
//             <span>Details</span>
//             <span>Payment</span>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="p-6">
//           {step === 1 && (
//             <div className="space-y-6">
//               <h3 className="text-lg font-semibold">Select Date & Time</h3>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
//                 <input
//                   type="date"
//                   value={selectedDate}
//                   onChange={(e) => setSelectedDate(e.target.value)}
//                   min={new Date().toISOString().split('T')[0]}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 />
//               </div>

//               {bookingType === 'darshan' && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Available Slots</label>
//                   <div className="grid grid-cols-2 gap-3">
//                     {darshanSlots.map((slot) => (
//                       <button
//                         key={slot.id}
//                         onClick={() => setSelectedSlot(slot.id)}
//                         disabled={slot.available === 0}
//                         className={`p-3 rounded-lg border-2 transition-all ${
//                           selectedSlot === slot.id
//                             ? 'border-orange-500 bg-orange-50'
//                             : slot.available === 0
//                             ? 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
//                             : 'border-gray-200 hover:border-gray-300'
//                         }`}
//                       >
//                         <div className="font-semibold">{slot.time}</div>
//                         <div className="text-sm text-gray-600">
//                           {slot.available === 0 ? 'Full' : `${slot.available} spots`}
//                         </div>
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {bookingType === 'seva' && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Select Seva</label>
//                   <div className="space-y-3">
//                     {sevaOptions.map((seva) => (
//                       <button
//                         key={seva.id}
//                         onClick={() => setSelectedSeva(seva.id)}
//                         disabled={!seva.available}
//                         className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
//                           selectedSeva === seva.id
//                             ? 'border-orange-500 bg-orange-50'
//                             : seva.available
//                             ? 'border-gray-200 hover:border-gray-300'
//                             : 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
//                         }`}
//                       >
//                         <div className="flex justify-between items-start">
//                           <div>
//                             <h4 className="font-semibold">{seva.name}</h4>
//                             <p className="text-sm text-gray-600 mt-1">{seva.description}</p>
//                             <p className="text-xs text-gray-500 mt-1">{seva.duration}</p>
//                           </div>
//                           <div className="text-right">
//                             <div className="font-bold text-lg">₹{seva.price}</div>
//                             <div className={`text-xs ${seva.available ? 'text-green-600' : 'text-red-600'}`}>
//                               {seva.available ? 'Available' : 'Unavailable'}
//                             </div>
//                           </div>
//                         </div>
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
//                 <select
//                   value={guests}
//                   onChange={(e) => setGuests(Number(e.target.value))}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 >
//                   {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
//                     <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           )}

//           {step === 2 && (
//             <div className="space-y-6">
//               <h3 className="text-lg font-semibold">Personal Details</h3>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
//                   <input
//                     type="text"
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                     placeholder="Enter your full name"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
//                   <input
//                     type="tel"
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                     placeholder="Enter your phone number"
//                   />
//                 </div>
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
//                 <input
//                   type="email"
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   placeholder="Enter your email address"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests (Optional)</label>
//                 <textarea
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   rows={3}
//                   placeholder="Any special requirements or requests..."
//                 ></textarea>
//               </div>

//               {/* Booking Summary */}
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <h4 className="font-semibold text-gray-900 mb-2">Booking Summary</h4>
//                 <div className="space-y-1 text-sm">
//                   <div className="flex justify-between">
//                     <span>Service:</span>
//                     <span className="font-medium">{getBookingTitle()}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Date:</span>
//                     <span className="font-medium">{selectedDate || 'Not selected'}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Guests:</span>
//                     <span className="font-medium">{guests}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {step === 3 && (
//             <div className="space-y-6">
//               <h3 className="text-lg font-semibold">Payment Details</h3>
              
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <h4 className="font-semibold text-gray-900 mb-2">Payment Summary</h4>
//                 <div className="space-y-2">
//                   <div className="flex justify-between">
//                     <span>Base Price:</span>
//                     <span>₹500</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Processing Fee:</span>
//                     <span>₹25</span>
//                   </div>
//                   <div className="border-t pt-2 mt-2">
//                     <div className="flex justify-between font-bold">
//                       <span>Total:</span>
//                       <span>₹525</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
//                 <div className="space-y-3">
//                   {['UPI', 'Credit/Debit Card', 'Net Banking', 'Wallet'].map((method) => (
//                     <label key={method} className="flex items-center space-x-3">
//                       <input type="radio" name="payment" className="form-radio text-orange-600" />
//                       <span className="flex items-center space-x-2">
//                         <CreditCard className="w-5 h-5" />
//                         <span>{method}</span>
//                       </span>
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Footer */}
//         <div className="p-6 border-t flex space-x-4">
//           {step > 1 && (
//             <button
//               onClick={() => setStep(step - 1)}
//               className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
//             >
//               Back
//             </button>
//           )}
//           <button
//             onClick={step === 3 ? handleConfirmBooking : handleNext}
//             className="flex-1 bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
//           >
//             {step === 3 ? 'Confirm Booking' : 'Next Step'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingModal;







import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, CreditCard, QrCode, Download } from 'lucide-react';
import { BookingType, DarshanSlot, SevaOption } from '../types';

interface BookingModalProps {
  bookingType: BookingType;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ bookingType, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [guests, setGuests] = useState(1);
  const [selectedSeva, setSelectedSeva] = useState('');
  const [bookingComplete, setBookingComplete] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);

  const darshanSlots: DarshanSlot[] = [
    { id: '1', time: '6:00 AM', available: 45, total: 100 },
    { id: '2', time: '8:00 AM', available: 23, total: 100 },
    { id: '3', time: '10:00 AM', available: 67, total: 100 },
    { id: '4', time: '2:00 PM', available: 89, total: 100 },
    { id: '5', time: '4:00 PM', available: 12, total: 100 },
    { id: '6', time: '6:00 PM', available: 0, total: 100 },
  ];

  const sevaOptions: SevaOption[] = [
    { id: '1', name: 'Archana', price: 200, duration: '30 min', description: 'Special prayer with your name', available: true },
    { id: '2', name: 'Abhishekam', price: 1500, duration: '1 hour', description: 'Sacred bathing ceremony', available: true },
    { id: '3', name: 'Homam', price: 5000, duration: '2 hours', description: 'Fire ritual for specific purposes', available: false },
    { id: '4', name: 'Kalyanam', price: 10000, duration: '3 hours', description: 'Divine marriage ceremony', available: true },
  ];

  const getBookingTitle = () => {
    switch (bookingType) {
      case 'darshan': return 'Book Darshan Slot';
      case 'seva': return 'Book Seva/Puja';
      case 'accommodation': return 'Book Accommodation';
      case 'prasad': return 'Order Prasad';
      case 'parking': return 'Reserve Parking';
      default: return 'Booking';
    }
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleConfirmBooking = () => {
    setBookingComplete(true);
  };

  const handleViewQRCode = () => {
    setShowQRCode(true);
  };

  const handleDownloadQRCode = () => {
    // In a real application, you would generate and download the QR code
    // For now, we'll simulate the download
    const link = document.createElement('a');
    link.href = '/api/qr-code'; // This would be your QR code generation endpoint
    link.download = `ddv-booking-${Date.now()}.png`;
    link.click();
  };

  const handleBackToConfirmation = () => {
    setShowQRCode(false);
  };

  if (showQRCode) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <QrCode className="w-8 h-8 text-orange-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Booking QR Code</h2>
          
          {/* QR Code Display */}
          <div className="bg-white p-6 rounded-xl border-2 border-dashed border-gray-300 mb-6 flex items-center justify-center">
            <div className="bg-gray-100 p-8 rounded-lg">
              {/* This would be replaced with an actual QR code image */}
              <div className="w-48 h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center rounded-lg">
                <div className="text-center">
                  <QrCode className="w-16 h-16 text-orange-600 mx-auto mb-2" />
                  <div className="text-xs text-gray-600 font-mono">DDV-2024-1234</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-sm text-gray-600 mb-2">
            Scan this QR code at the temple entrance
          </div>
          <div className="text-xs text-gray-500 mb-6">
            Valid for: {selectedDate || 'Selected date'} • {guests} Guest{guests > 1 ? 's' : ''}
          </div>
          
          <div className="space-y-3">
            <button 
              onClick={handleDownloadQRCode}
              className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download QR Code
            </button>
            <button
              onClick={handleBackToConfirmation}
              className="w-full bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
            >
              Back to Confirmation
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (bookingComplete) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <QrCode className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">Your booking has been successfully confirmed. A QR code has been sent to your email.</p>
          
          <div className="bg-gray-100 p-4 rounded-xl mb-6">
            <div className="text-sm text-gray-600 mb-2">Booking ID</div>
            <div className="text-lg font-bold text-gray-900">DDV-2024-1234</div>
          </div>
          
          <div className="space-y-3">
            <button 
              onClick={handleViewQRCode}
              className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
            >
              <QrCode className="w-4 h-4" />
              View QR Code
            </button>
            <button
              onClick={onClose}
              className="w-full bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">{getBookingTitle()}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="px-6 py-4 border-b">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((stepNum) => (
              <React.Fragment key={stepNum}>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step >= stepNum ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {stepNum}
                </div>
                {stepNum < 3 && (
                  <div className={`flex-1 h-1 ${
                    step > stepNum ? 'bg-orange-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Select</span>
            <span>Details</span>
            <span>Payment</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Select Date & Time</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {bookingType === 'darshan' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Available Slots</label>
                  <div className="grid grid-cols-2 gap-3">
                    {darshanSlots.map((slot) => (
                      <button
                        key={slot.id}
                        onClick={() => setSelectedSlot(slot.id)}
                        disabled={slot.available === 0}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          selectedSlot === slot.id
                            ? 'border-orange-500 bg-orange-50'
                            : slot.available === 0
                            ? 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-semibold">{slot.time}</div>
                        <div className="text-sm text-gray-600">
                          {slot.available === 0 ? 'Full' : `${slot.available} spots`}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {bookingType === 'seva' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Seva</label>
                  <div className="space-y-3">
                    {sevaOptions.map((seva) => (
                      <button
                        key={seva.id}
                        onClick={() => setSelectedSeva(seva.id)}
                        disabled={!seva.available}
                        className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                          selectedSeva === seva.id
                            ? 'border-orange-500 bg-orange-50'
                            : seva.available
                            ? 'border-gray-200 hover:border-gray-300'
                            : 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold">{seva.name}</h4>
                            <p className="text-sm text-gray-600 mt-1">{seva.description}</p>
                            <p className="text-xs text-gray-500 mt-1">{seva.duration}</p>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-lg">₹{seva.price}</div>
                            <div className={`text-xs ${seva.available ? 'text-green-600' : 'text-red-600'}`}>
                              {seva.available ? 'Available' : 'Unavailable'}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Personal Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests (Optional)</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  rows={3}
                  placeholder="Any special requirements or requests..."
                ></textarea>
              </div>

              {/* Booking Summary */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Booking Summary</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Service:</span>
                    <span className="font-medium">{getBookingTitle()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-medium">{selectedDate || 'Not selected'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Guests:</span>
                    <span className="font-medium">{guests}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Payment Details</h3>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Payment Summary</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Base Price:</span>
                    <span>₹500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Processing Fee:</span>
                    <span>₹25</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-bold">
                      <span>Total:</span>
                      <span>₹525</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                <div className="space-y-3">
                  {['UPI', 'Credit/Debit Card', 'Net Banking', 'Wallet'].map((method) => (
                    <label key={method} className="flex items-center space-x-3">
                      <input type="radio" name="payment" className="form-radio text-orange-600" />
                      <span className="flex items-center space-x-2">
                        <CreditCard className="w-5 h-5" />
                        <span>{method}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t flex space-x-4">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
          )}
          <button
            onClick={step === 3 ? handleConfirmBooking : handleNext}
            className="flex-1 bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            {step === 3 ? 'Confirm Booking' : 'Next Step'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;