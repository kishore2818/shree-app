// import React, { useState } from 'react';
// import { Heart, Target, Users, Star, ArrowRight, Gift } from 'lucide-react';

// const Donations: React.FC = () => {
//   const [selectedAmount, setSelectedAmount] = useState(500);
//   const [customAmount, setCustomAmount] = useState('');
//   const [selectedCause, setSelectedCause] = useState('general');

//   const predefinedAmounts = [100, 250, 500, 1000, 2500, 5000];

//   const causes = [
//     {
//       id: 'general',
//       title: 'General Temple Development',
//       description: 'Support overall temple maintenance and development projects',
//       raised: 2450000,
//       target: 5000000,
//       donors: 12500,
//       icon: Star,
//       color: 'from-orange-500 to-red-500'
//     },
//     {
//       id: 'annadanam',
//       title: 'Annadanam (Free Meals)',
//       description: 'Provide free meals to pilgrims and devotees',
//       raised: 1850000,
//       target: 3000000,
//       donors: 8750,
//       icon: Gift,
//       color: 'from-green-500 to-emerald-500'
//     },
//     {
//       id: 'education',
//       title: 'Educational Programs',
//       description: 'Support religious education and cultural programs',
//       raised: 950000,
//       target: 2000000,
//       donors: 4200,
//       icon: Target,
//       color: 'from-blue-500 to-indigo-500'
//     }
//   ];

//   const currentCause = causes.find(c => c.id === selectedCause) || causes[0];
//   const progressPercentage = (currentCause.raised / currentCause.target) * 100;

//   return (
//     <section id="donations" className="py-20 bg-gradient-to-b from-orange-50 to-yellow-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Make a Sacred Contribution
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Your generous donations help maintain temples, feed devotees, and preserve our spiritual heritage. 
//             Every contribution is a step towards divine service.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Donation Form */}
//           <div className="bg-white rounded-2xl shadow-xl p-8">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h3>
            
//             {/* Cause Selection */}
//             <div className="mb-6">
//               <label className="block text-sm font-semibold text-gray-700 mb-3">
//                 Choose Your Cause
//               </label>
//               <div className="space-y-3">
//                 {causes.map((cause) => {
//                   const IconComponent = cause.icon;
//                   return (
//                     <button
//                       key={cause.id}
//                       onClick={() => setSelectedCause(cause.id)}
//                       className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
//                         selectedCause === cause.id
//                           ? 'border-orange-500 bg-orange-50'
//                           : 'border-gray-200 hover:border-gray-300'
//                       }`}
//                     >
//                       <div className="flex items-start space-x-3">
//                         <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${cause.color} flex items-center justify-center`}>
//                           <IconComponent className="w-5 h-5 text-white" />
//                         </div>
//                         <div className="flex-1">
//                           <h4 className="font-semibold text-gray-900">{cause.title}</h4>
//                           <p className="text-sm text-gray-600 mt-1">{cause.description}</p>
//                         </div>
//                       </div>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Amount Selection */}
//             <div className="mb-6">
//               <label className="block text-sm font-semibold text-gray-700 mb-3">
//                 Select Amount (₹)
//               </label>
//               <div className="grid grid-cols-3 gap-3 mb-4">
//                 {predefinedAmounts.map((amount) => (
//                   <button
//                     key={amount}
//                     onClick={() => {
//                       setSelectedAmount(amount);
//                       setCustomAmount('');
//                     }}
//                     className={`py-3 px-4 rounded-xl border-2 font-semibold transition-all ${
//                       selectedAmount === amount
//                         ? 'border-orange-500 bg-orange-500 text-white'
//                         : 'border-gray-200 text-gray-700 hover:border-orange-300'
//                     }`}
//                   >
//                     ₹{amount}
//                   </button>
//                 ))}
//               </div>
              
//               <div className="relative">
//                 <input
//                   type="number"
//                   placeholder="Enter custom amount"
//                   value={customAmount}
//                   onChange={(e) => {
//                     setCustomAmount(e.target.value);
//                     setSelectedAmount(0);
//                   }}
//                   className="w-full py-3 px-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
//                 />
//                 <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
//               </div>
//             </div>

//             {/* Donor Information */}
//             <div className="mb-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   className="py-3 px-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
//                 />
//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                   className="py-3 px-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
//                 />
//               </div>
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full mt-4 py-3 px-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
//               />
//             </div>

//             <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all flex items-center justify-center">
//               Donate ₹{customAmount || selectedAmount}
//               <ArrowRight className="w-5 h-5 ml-2" />
//             </button>

//             <p className="text-xs text-gray-500 text-center mt-4">
//               Your donation is secure and tax-deductible. 80G certificate will be provided.
//             </p>
//           </div>

//           {/* Campaign Progress */}
//           <div className="space-y-6">
//             <div className="bg-white rounded-2xl shadow-xl p-8">
//               <div className="flex items-center space-x-4 mb-6">
//                 <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${currentCause.color} flex items-center justify-center`}>
//                   <currentCause.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-gray-900">{currentCause.title}</h4>
//                   <p className="text-gray-600">{currentCause.description}</p>
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-sm font-semibold text-gray-700">Progress</span>
//                   <span className="text-sm font-semibold text-gray-700">
//                     {progressPercentage.toFixed(1)}%
//                   </span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-3">
//                   <div
//                     className={`h-3 rounded-full bg-gradient-to-r ${currentCause.color}`}
//                     style={{ width: `${progressPercentage}%` }}
//                   ></div>
//                 </div>
//                 <div className="flex justify-between text-sm text-gray-600 mt-2">
//                   <span>₹{currentCause.raised.toLocaleString()}</span>
//                   <span>₹{currentCause.target.toLocaleString()}</span>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4 text-center">
//                 <div>
//                   <div className="text-2xl font-bold text-gray-900">
//                     {currentCause.donors.toLocaleString()}
//                   </div>
//                   <div className="text-sm text-gray-600">Donors</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-gray-900">
//                     ₹{(currentCause.target - currentCause.raised).toLocaleString()}
//                   </div>
//                   <div className="text-sm text-gray-600">To Go</div>
//                 </div>
//               </div>
//             </div>

//             {/* Recent Donations */}
//             <div className="bg-white rounded-2xl shadow-xl p-8">
//               <h4 className="text-lg font-bold text-gray-900 mb-4">Recent Contributions</h4>
//               <div className="space-y-4">
//                 {[
//                   { name: 'Ravi Kumar', amount: 5000, time: '2 min ago' },
//                   { name: 'Priya Sharma', amount: 1000, time: '15 min ago' },
//                   { name: 'Anil Gupta', amount: 2500, time: '1 hour ago' },
//                   { name: 'Meera Devi', amount: 500, time: '2 hours ago' },
//                 ].map((donation, index) => (
//                   <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
//                     <div className="flex items-center space-x-3">
//                       <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
//                         <Heart className="w-4 h-4 text-white" />
//                       </div>
//                       <div>
//                         <div className="font-medium text-gray-900">{donation.name}</div>
//                         <div className="text-xs text-gray-500">{donation.time}</div>
//                       </div>
//                     </div>
//                     <div className="font-bold text-green-600">₹{donation.amount}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Donations;




// import React, { useState } from 'react';
// import { Heart, Target, Users, Star, ArrowRight, Gift, Download, X, CheckCircle } from 'lucide-react';

// const Donations: React.FC = () => {
//   const [selectedAmount, setSelectedAmount] = useState(500);
//   const [customAmount, setCustomAmount] = useState('');
//   const [selectedCause, setSelectedCause] = useState('general');
//   const [donorName, setDonorName] = useState('');
//   const [donorPhone, setDonorPhone] = useState('');
//   const [donorEmail, setDonorEmail] = useState('');
//   const [showReceipt, setShowReceipt] = useState(false);
//   const [donationData, setDonationData] = useState<any>(null);

//   const predefinedAmounts = [100, 250, 500, 1000, 2500, 5000];

//   const causes = [
//     {
//       id: 'general',
//       title: 'General Temple Development',
//       description: 'Support overall temple maintenance and development projects',
//       raised: 2450000,
//       target: 5000000,
//       donors: 12500,
//       icon: Star,
//       color: 'from-orange-500 to-red-500'
//     },
//     {
//       id: 'annadanam',
//       title: 'Annadanam (Free Meals)',
//       description: 'Provide free meals to pilgrims and devotees',
//       raised: 1850000,
//       target: 3000000,
//       donors: 8750,
//       icon: Gift,
//       color: 'from-green-500 to-emerald-500'
//     },
//     {
//       id: 'education',
//       title: 'Educational Programs',
//       description: 'Support religious education and cultural programs',
//       raised: 950000,
//       target: 2000000,
//       donors: 4200,
//       icon: Target,
//       color: 'from-blue-500 to-indigo-500'
//     }
//   ];

//   const divineMessages = [
//     "May your generous contribution bring you divine blessings and spiritual growth.",
//     "Your selfless donation is a sacred offering that purifies the soul and brings eternal merit.",
//     "As you give with a pure heart, may the divine grace shower upon you and your family.",
//     "Your donation is not just charity; it's an investment in spiritual evolution and cosmic harmony.",
//     "May the divine light guide your path as you contribute to the preservation of sacred traditions.",
//     "Your generous heart will be blessed with peace, prosperity, and spiritual enlightenment.",
//     "Every rupee donated with devotion multiplies into divine blessings and karmic merit.",
//     "May your noble act of giving bring you closer to the divine and fill your life with joy."
//   ];

//   const currentCause = causes.find(c => c.id === selectedCause) || causes[0];
//   const progressPercentage = (currentCause.raised / currentCause.target) * 100;
//   const donationAmount = customAmount ? parseInt(customAmount) : selectedAmount;

//   const handleDonate = () => {
//     if (!donorName || !donorPhone || !donorEmail) {
//       alert('Please fill in all donor information fields');
//       return;
//     }

//     if (donationAmount <= 0) {
//       alert('Please select or enter a valid donation amount');
//       return;
//     }

//     // Generate donation data
//     const donation = {
//       id: `DON-${Date.now()}`,
//       amount: donationAmount,
//       cause: currentCause.title,
//       donorName,
//       donorPhone,
//       donorEmail,
//       date: new Date().toLocaleDateString('en-IN'),
//       time: new Date().toLocaleTimeString('en-IN'),
//       receiptNo: `RC-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
//       divineMessage: divineMessages[Math.floor(Math.random() * divineMessages.length)]
//     };

//     setDonationData(donation);
//     setShowReceipt(true);
//   };

//   const handleDownloadReceipt = () => {
//     // Simulate receipt download
//     const receiptContent = `
//       DIVINE DARSHAN VIBHUTHI
//       --------------------------
//       Receipt No: ${donationData.receiptNo}
//       Date: ${donationData.date}
//       Time: ${donationData.time}
      
//       Donor Information:
//       Name: ${donationData.donorName}
//       Phone: ${donationData.donorPhone}
//       Email: ${donationData.donorEmail}
      
//       Donation Details:
//       Amount: ₹${donationData.amount}
//       Cause: ${donationData.cause}
      
//       ${donationData.divineMessage}
      
//       Thank you for your generous contribution!
//       This is a computer generated receipt.
//       80G Certificate: Eligible for tax exemption
//     `;

//     const blob = new Blob([receiptContent], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = `donation-receipt-${donationData.receiptNo}.txt`;
//     link.click();
//     URL.revokeObjectURL(url);
//   };

//   const handleNewDonation = () => {
//     setShowReceipt(false);
//     setDonationData(null);
//     setDonorName('');
//     setDonorPhone('');
//     setDonorEmail('');
//     setCustomAmount('');
//     setSelectedAmount(500);
//   };

//   if (showReceipt && donationData) {
//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//         <div className="bg-white rounded-2xl max-w-md w-full">
//           {/* Header */}
//           <div className="flex items-center justify-between p-6 border-b">
//             <h2 className="text-2xl font-bold text-gray-900">Donation Successful!</h2>
//             <button
//               onClick={handleNewDonation}
//               className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//             >
//               <X className="w-6 h-6" />
//             </button>
//           </div>

//           {/* Divine Message */}
//           <div className="p-6 bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-500">
//             <div className="flex items-start space-x-3">
//               <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
//               <div>
//                 <h3 className="font-semibold text-gray-900 mb-2">Divine Blessings</h3>
//                 <p className="text-gray-700 italic">"{donationData.divineMessage}"</p>
//               </div>
//             </div>
//           </div>

//           {/* Receipt */}
//           <div className="p-6">
//             <div className="bg-gray-50 rounded-xl p-4 mb-6">
//               <div className="text-center mb-4">
//                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                   <Heart className="w-8 h-8 text-green-600" />
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900">Thank You, {donationData.donorName}!</h3>
//                 <p className="text-gray-600">Your donation has been received successfully</p>
//               </div>

//               <div className="space-y-3 text-sm">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Receipt No:</span>
//                   <span className="font-semibold">{donationData.receiptNo}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Date & Time:</span>
//                   <span className="font-semibold">{donationData.date} {donationData.time}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Cause:</span>
//                   <span className="font-semibold">{donationData.cause}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Amount:</span>
//                   <span className="font-bold text-green-600">₹{donationData.amount}</span>
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-3">
//               <button
//                 onClick={handleDownloadReceipt}
//                 className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
//               >
//                 <Download className="w-4 h-4" />
//                 Download Receipt
//               </button>
//               <button
//                 onClick={handleNewDonation}
//                 className="w-full bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
//               >
//                 Make Another Donation
//               </button>
//             </div>

//             <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
//               <p className="text-xs text-blue-700 text-center">
//                 <strong>80G Tax Benefit:</strong> Your donation is eligible for tax exemption under section 80G. 
//                 Certificate will be emailed within 7 working days.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <section id="donations" className="py-20 bg-gradient-to-b from-orange-50 to-yellow-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Make a Sacred Contribution
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Your generous donations help maintain temples, feed devotees, and preserve our spiritual heritage. 
//             Every contribution is a step towards divine service.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Donation Form */}
//           <div className="bg-white rounded-2xl shadow-xl p-8">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h3>
            
//             {/* Cause Selection */}
//             <div className="mb-6">
//               <label className="block text-sm font-semibold text-gray-700 mb-3">
//                 Choose Your Cause
//               </label>
//               <div className="space-y-3">
//                 {causes.map((cause) => {
//                   const IconComponent = cause.icon;
//                   return (
//                     <button
//                       key={cause.id}
//                       onClick={() => setSelectedCause(cause.id)}
//                       className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
//                         selectedCause === cause.id
//                           ? 'border-orange-500 bg-orange-50'
//                           : 'border-gray-200 hover:border-gray-300'
//                       }`}
//                     >
//                       <div className="flex items-start space-x-3">
//                         <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${cause.color} flex items-center justify-center`}>
//                           <IconComponent className="w-5 h-5 text-white" />
//                         </div>
//                         <div className="flex-1">
//                           <h4 className="font-semibold text-gray-900">{cause.title}</h4>
//                           <p className="text-sm text-gray-600 mt-1">{cause.description}</p>
//                         </div>
//                       </div>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Amount Selection */}
//             <div className="mb-6">
//               <label className="block text-sm font-semibold text-gray-700 mb-3">
//                 Select Amount (₹)
//               </label>
//               <div className="grid grid-cols-3 gap-3 mb-4">
//                 {predefinedAmounts.map((amount) => (
//                   <button
//                     key={amount}
//                     onClick={() => {
//                       setSelectedAmount(amount);
//                       setCustomAmount('');
//                     }}
//                     className={`py-3 px-4 rounded-xl border-2 font-semibold transition-all ${
//                       selectedAmount === amount
//                         ? 'border-orange-500 bg-orange-500 text-white'
//                         : 'border-gray-200 text-gray-700 hover:border-orange-300'
//                     }`}
//                   >
//                     ₹{amount}
//                   </button>
//                 ))}
//               </div>
              
//               <div className="relative">
//                 <input
//                   type="number"
//                   placeholder="Enter custom amount"
//                   value={customAmount}
//                   onChange={(e) => {
//                     setCustomAmount(e.target.value);
//                     setSelectedAmount(0);
//                   }}
//                   className="w-full py-3 px-4 pl-8 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
//                 />
//                 <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
//               </div>
//             </div>

//             {/* Donor Information */}
//             <div className="mb-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="Full Name *"
//                   value={donorName}
//                   onChange={(e) => setDonorName(e.target.value)}
//                   className="py-3 px-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
//                   required
//                 />
//                 <input
//                   type="tel"
//                   placeholder="Phone Number *"
//                   value={donorPhone}
//                   onChange={(e) => setDonorPhone(e.target.value)}
//                   className="py-3 px-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
//                   required
//                 />
//               </div>
//               <input
//                 type="email"
//                 placeholder="Email Address *"
//                 value={donorEmail}
//                 onChange={(e) => setDonorEmail(e.target.value)}
//                 className="w-full mt-4 py-3 px-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
//                 required
//               />
//             </div>

//             <button 
//               onClick={handleDonate}
//               className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all flex items-center justify-center"
//             >
//               Donate ₹{donationAmount}
//               <ArrowRight className="w-5 h-5 ml-2" />
//             </button>

//             <p className="text-xs text-gray-500 text-center mt-4">
//               Your donation is secure and tax-deductible. 80G certificate will be provided.
//             </p>
//           </div>

//           {/* Campaign Progress */}
//           <div className="space-y-6">
//             <div className="bg-white rounded-2xl shadow-xl p-8">
//               <div className="flex items-center space-x-4 mb-6">
//                 <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${currentCause.color} flex items-center justify-center`}>
//                   <currentCause.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-gray-900">{currentCause.title}</h4>
//                   <p className="text-gray-600">{currentCause.description}</p>
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-sm font-semibold text-gray-700">Progress</span>
//                   <span className="text-sm font-semibold text-gray-700">
//                     {progressPercentage.toFixed(1)}%
//                   </span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-3">
//                   <div
//                     className={`h-3 rounded-full bg-gradient-to-r ${currentCause.color}`}
//                     style={{ width: `${progressPercentage}%` }}
//                   ></div>
//                 </div>
//                 <div className="flex justify-between text-sm text-gray-600 mt-2">
//                   <span>₹{currentCause.raised.toLocaleString()}</span>
//                   <span>₹{currentCause.target.toLocaleString()}</span>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4 text-center">
//                 <div>
//                   <div className="text-2xl font-bold text-gray-900">
//                     {currentCause.donors.toLocaleString()}
//                   </div>
//                   <div className="text-sm text-gray-600">Donors</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-gray-900">
//                     ₹{(currentCause.target - currentCause.raised).toLocaleString()}
//                   </div>
//                   <div className="text-sm text-gray-600">To Go</div>
//                 </div>
//               </div>
//             </div>

//             {/* Recent Donations */}
//             <div className="bg-white rounded-2xl shadow-xl p-8">
//               <h4 className="text-lg font-bold text-gray-900 mb-4">Recent Contributions</h4>
//               <div className="space-y-4">
//                 {[
//                   { name: 'Ravi Kumar', amount: 5000, time: '2 min ago' },
//                   { name: 'Priya Sharma', amount: 1000, time: '15 min ago' },
//                   { name: 'Anil Gupta', amount: 2500, time: '1 hour ago' },
//                   { name: 'Meera Devi', amount: 500, time: '2 hours ago' },
//                 ].map((donation, index) => (
//                   <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
//                     <div className="flex items-center space-x-3">
//                       <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
//                         <Heart className="w-4 h-4 text-white" />
//                       </div>
//                       <div>
//                         <div className="font-medium text-gray-900">{donation.name}</div>
//                         <div className="text-xs text-gray-500">{donation.time}</div>
//                       </div>
//                     </div>
//                     <div className="font-bold text-green-600">₹{donation.amount}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Donations;/




import React, { useState } from 'react';
import { Heart, Target, Users, Star, ArrowRight, Gift, Download, X, CheckCircle } from 'lucide-react';

const Donations: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedCause, setSelectedCause] = useState('general');
  const [donorName, setDonorName] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [showReceipt, setShowReceipt] = useState(false);
  const [donationData, setDonationData] = useState<any>(null);

  const predefinedAmounts = [100, 250, 500, 1000, 2500, 5000];

  const causes = [
    {
      id: 'general',
      title: 'General Temple Development',
      description: 'Support overall temple maintenance and development projects',
      raised: 2450000,
      target: 5000000,
      donors: 12500,
      icon: Star,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'annadanam',
      title: 'Annadanam (Free Meals)',
      description: 'Provide free meals to pilgrims and devotees',
      raised: 1850000,
      target: 3000000,
      donors: 8750,
      icon: Gift,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'education',
      title: 'Educational Programs',
      description: 'Support religious education and cultural programs',
      raised: 950000,
      target: 2000000,
      donors: 4200,
      icon: Target,
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  const divineMessages = [
    "May your generous contribution bring you divine blessings and spiritual growth.",
    "Your selfless donation is a sacred offering that purifies the soul and brings eternal merit.",
    "As you give with a pure heart, may the divine grace shower upon you and your family.",
    "Your donation is not just charity; it's an investment in spiritual evolution and cosmic harmony.",
    "May the divine light guide your path as you contribute to the preservation of sacred traditions.",
    "Your generous heart will be blessed with peace, prosperity, and spiritual enlightenment.",
    "Every rupee donated with devotion multiplies into divine blessings and karmic merit.",
    "May your noble act of giving bring you closer to the divine and fill your life with joy."
  ];

  const currentCause = causes.find(c => c.id === selectedCause) || causes[0];
  const progressPercentage = (currentCause.raised / currentCause.target) * 100;
  const donationAmount = customAmount ? parseInt(customAmount) : selectedAmount;

  const handleDonate = () => {
    if (!donorName || !donorPhone || !donorEmail) {
      alert('Please fill in all donor information fields');
      return;
    }

    if (donationAmount <= 0) {
      alert('Please select or enter a valid donation amount');
      return;
    }

    // Generate donation data
    const donation = {
      id: `DON-${Date.now()}`,
      amount: donationAmount,
      cause: currentCause.title,
      donorName,
      donorPhone,
      donorEmail,
      date: new Date().toLocaleDateString('en-IN'),
      time: new Date().toLocaleTimeString('en-IN'),
      receiptNo: `RC-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      divineMessage: divineMessages[Math.floor(Math.random() * divineMessages.length)]
    };

    setDonationData(donation);
    setShowReceipt(true);
  };

  const handleDownloadReceipt = () => {
    // Simulate receipt download
    const receiptContent = `
      DIVINE DARSHAN VIBHUTHI
      --------------------------
      Receipt No: ${donationData.receiptNo}
      Date: ${donationData.date}
      Time: ${donationData.time}
      
      Donor Information:
      Name: ${donationData.donorName}
      Phone: ${donationData.donorPhone}
      Email: ${donationData.donorEmail}
      
      Donation Details:
      Amount: ₹${donationData.amount}
      Cause: ${donationData.cause}
      
      ${donationData.divineMessage}
      
      Thank you for your generous contribution!
      This is a computer generated receipt.
      80G Certificate: Eligible for tax exemption
    `;

    const blob = new Blob([receiptContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `donation-receipt-${donationData.receiptNo}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleNewDonation = () => {
    setShowReceipt(false);
    setDonationData(null);
    setDonorName('');
    setDonorPhone('');
    setDonorEmail('');
    setCustomAmount('');
    setSelectedAmount(500);
  };

  if (showReceipt && donationData) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl w-full max-w-4xl"> {/* Increased width */}
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-900">Donation Successful!</h2>
            <button
              onClick={handleNewDonation}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content Grid - Side by side layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            {/* Left Side - Divine Message */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border-l-4 border-orange-500">
              <div className="flex items-start space-x-3 h-full">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Divine Blessings</h3>
                  <p className="text-gray-700 italic text-base leading-relaxed">"{donationData.divineMessage}"</p>
                  
                  {/* Additional spiritual quote */}
                  <div className="mt-4 pt-4 border-t border-orange-200">
                    <p className="text-sm text-orange-700">
                      "The hand that gives is always blessed. Your contribution supports divine service."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Receipt */}
            <div className="space-y-4">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Thank You, {donationData.donorName}!</h3>
                <p className="text-gray-600">Your donation has been received successfully</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Receipt No:</span>
                    <div className="font-semibold text-gray-900">{donationData.receiptNo}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Date & Time:</span>
                    <div className="font-semibold text-gray-900">{donationData.date}<br/>{donationData.time}</div>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-600">Cause:</span>
                    <div className="font-semibold text-gray-900">{donationData.cause}</div>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-600">Amount:</span>
                    <div className="font-bold text-green-600 text-xl">₹{donationData.amount}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleDownloadReceipt}
                  className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Receipt
                </button>
                <button
                  onClick={handleNewDonation}
                  className="w-full bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
                >
                  Make Another Donation
                </button>
              </div>

              {/* Tax Benefit Info */}
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-xs text-blue-700">
                  <strong>80G Tax Benefit:</strong> Your donation is eligible for tax exemption under section 80G. 
                  Certificate will be emailed within 7 working days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="donations" className="py-20 bg-gradient-to-b from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Make a Sacred Contribution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your generous donations help maintain temples, feed devotees, and preserve our spiritual heritage. 
            Every contribution is a step towards divine service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h3>
            
            {/* Cause Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Choose Your Cause
              </label>
              <div className="space-y-3">
                {causes.map((cause) => {
                  const IconComponent = cause.icon;
                  return (
                    <button
                      key={cause.id}
                      onClick={() => setSelectedCause(cause.id)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                        selectedCause === cause.id
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${cause.color} flex items-center justify-center`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{cause.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{cause.description}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Select Amount (₹)
              </label>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`py-3 px-4 rounded-xl border-2 font-semibold transition-all ${
                      selectedAmount === amount
                        ? 'border-orange-500 bg-orange-500 text-white'
                        : 'border-gray-200 text-gray-700 hover:border-orange-300'
                    }`}
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(0);
                  }}
                  className="w-full py-3 px-4 pl-8 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
              </div>
            </div>

            {/* Donor Information */}
            <div className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="py-3 px-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={donorPhone}
                  onChange={(e) => setDonorPhone(e.target.value)}
                  className="py-3 px-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email Address *"
                value={donorEmail}
                onChange={(e) => setDonorEmail(e.target.value)}
                className="w-full mt-4 py-3 px-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
                required
              />
            </div>

            <button 
              onClick={handleDonate}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all flex items-center justify-center"
            >
              Donate ₹{donationAmount}
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              Your donation is secure and tax-deductible. 80G certificate will be provided.
            </p>
          </div>

          {/* Campaign Progress */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${currentCause.color} flex items-center justify-center`}>
                  <currentCause.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{currentCause.title}</h4>
                  <p className="text-gray-600">{currentCause.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-700">Progress</span>
                  <span className="text-sm font-semibold text-gray-700">
                    {progressPercentage.toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full bg-gradient-to-r ${currentCause.color}`}
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>₹{currentCause.raised.toLocaleString()}</span>
                  <span>₹{currentCause.target.toLocaleString()}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {currentCause.donors.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Donors</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    ₹{(currentCause.target - currentCause.raised).toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">To Go</div>
                </div>
              </div>
            </div>

            {/* Recent Donations */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Recent Contributions</h4>
              <div className="space-y-4">
                {[
                  { name: 'Ravi Kumar', amount: 5000, time: '2 min ago' },
                  { name: 'Priya Sharma', amount: 1000, time: '15 min ago' },
                  { name: 'Anil Gupta', amount: 2500, time: '1 hour ago' },
                  { name: 'Meera Devi', amount: 500, time: '2 hours ago' },
                ].map((donation, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                        <Heart className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{donation.name}</div>
                        <div className="text-xs text-gray-500">{donation.time}</div>
                      </div>
                    </div>
                    <div className="font-bold text-green-600">₹{donation.amount}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donations;