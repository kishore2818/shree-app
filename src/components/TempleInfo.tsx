// import React, { useState } from 'react';
// import { MapPin, Clock, Star, Calendar, Navigation } from 'lucide-react';

// const TempleInfo: React.FC = () => {
//   const [selectedTemple, setSelectedTemple] = useState(0);

//   const temples = [
//     {
//       id: '1',
//       name: 'Somnath Temple',
//       deity: 'Lord Shiva',
//       location: 'Veraval, Gujarat',
//       timings: '3:00 AM - 11:00 PM',
//       description: 'The Somnath Temple venerates Lord Shiva in his form as Somnath, the Lord of the Moon, housing one of the twelve sacred Jyotirlingas, which represent his infinite, formless light.',
//       image: 's.jpg',
//       rating: 4.9,
//       currentQueue: 2500,
//       estimatedWait: '3-4 hours',
//       specialEvents: 'Brahmotsavam Festival - March 2024'
//     },
//     {
//       id: '2',
//       name: 'Dwaraka Temple',
//       deity: 'Lord Krishna',
//       location: 'Dwarka, Gujarat',
//       timings: '5:00 AM - 10:00 PM',
//       description: 'The Dwarka Temple is dedicated to Lord Krishna, worshipped here as Dwarkadhish, the "King of Dwarka"',
//       image: 'ff.jpg',
//       rating: 4.8,
//       currentQueue: 850,
//       estimatedWait: '1-2 hours',
//       specialEvents: 'Chithirai Festival - April 2024'
//     },
//     {
//       id: '3',
//       name: 'Ambanji Temple',
//       deity: 'Goddess Mahakali',
//       location: 'Gir Somnath, Gujarat',
//       timings: '24 Hours Open',
//       description: 'The Ambanji Temple in Gujarat is a revered shrine dedicated to Goddess Mahakali, a powerful and fierce form of the Divine Mother.',
//       image: 'Ambaji-Temple-Banner.jpg',
//       rating: 4.9,
//       currentQueue: 1200,
//       estimatedWait: '30-45 minutes',
//       specialEvents: 'Guru Nanak Jayanti - November 2024'
//     }
//   ];

//   const currentTemple = temples[selectedTemple];

//   return (
//     <section id="temples" className="py-20 bg-orange-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Temple Information Hub
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Discover divine temples with comprehensive information, live updates, and sacred histories.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Temple Selection */}
//           <div className="lg:col-span-1">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Temples</h3>
//             <div className="space-y-4">
//               {temples.map((temple, index) => (
//                 <button
//                   key={temple.id}
//                   onClick={() => setSelectedTemple(index)}
//                   className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
//                     selectedTemple === index
//                       ? 'bg-orange-100 border-2 border-orange-500'
//                       : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
//                   }`}
//                 >
//                   <h4 className="font-semibold text-gray-900">{temple.name}</h4>
//                   <p className="text-sm text-gray-600">{temple.location}</p>
//                   <div className="flex items-center mt-2">
//                     <Star className="w-4 h-4 text-yellow-500 fill-current" />
//                     <span className="text-sm text-gray-600 ml-1">{temple.rating}</span>
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Temple Details */}
//           <div className="lg:col-span-3">
//             <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl overflow-hidden shadow-lg">
//               <div className="relative h-64 md:h-80">
//                 <img
//                   src={currentTemple.image}
//                   alt={currentTemple.name}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
//                 <div className="absolute bottom-4 left-4 text-white">
//                   <h3 className="text-2xl font-bold">{currentTemple.name}</h3>
//                   <p className="text-lg text-orange-200">{currentTemple.deity}</p>
//                 </div>
//               </div>
              
//               <div className="p-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                   <div className="space-y-4">
//                     <div className="flex items-center space-x-3">
//                       <MapPin className="w-5 h-5 text-orange-600" />
//                       <span className="text-gray-700">{currentTemple.location}</span>
//                     </div>
//                     <div className="flex items-center space-x-3">
//                       <Clock className="w-5 h-5 text-orange-600" />
//                       <span className="text-gray-700">{currentTemple.timings}</span>
//                     </div>
//                     <div className="flex items-center space-x-3">
//                       <Star className="w-5 h-5 text-orange-600" />
//                       <span className="text-gray-700">{currentTemple.rating} Rating</span>
//                     </div>
//                   </div>
                  
//                   <div className="space-y-4">
//                     <div className="bg-white rounded-lg p-4 shadow-sm">
//                       <h4 className="font-semibold text-gray-900 mb-2">Live Queue Status</h4>
//                       <div className="flex justify-between items-center">
//                         <span className="text-2xl font-bold text-red-600">{currentTemple.currentQueue}</span>
//                         <span className="text-sm text-gray-600">people in queue</span>
//                       </div>
//                       <p className="text-sm text-orange-600 mt-1">Est. wait: {currentTemple.estimatedWait}</p>
//                     </div>
//                   </div>
//                 </div>
                
//                 <p className="text-gray-600 mb-6">{currentTemple.description}</p>
                
//                 <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
//                   <div className="flex items-center">
//                     <Calendar className="w-5 h-5 text-yellow-600 mr-2" />
//                     <span className="font-semibold text-yellow-800">Upcoming Event:</span>
//                   </div>
//                   <p className="text-yellow-700 mt-1">{currentTemple.specialEvents}</p>
//                 </div>
                
//                 <div className="flex flex-wrap gap-4">
//                   <button className="bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors">
//                     Book Darshan
//                   </button>
//                   <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center">
//                     <Navigation className="w-5 h-5 mr-2" />
//                     Get Directions
//                   </button>
//                   <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors">
//                     Virtual Tour
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TempleInfo;






// import React, { useState } from 'react';
// import { MapPin, Clock, Star, Calendar, Navigation, X } from 'lucide-react';

// const TempleInfo: React.FC = () => {
//   const [selectedTemple, setSelectedTemple] = useState(0);
//   const [showHistory, setShowHistory] = useState(false);

//   const temples = [
//     {
//       id: '1',
//       name: 'Somnath Temple',
//       deity: 'Lord Shiva',
//       location: 'Veraval, Gujarat',
//       timings: '3:00 AM - 11:00 PM',
//       description: 'The Somnath Temple venerates Lord Shiva in his form as Somnath, the Lord of the Moon, housing one of the twelve sacred Jyotirlingas, which represent his infinite, formless light.',
//       image: 's.jpg',
//       rating: 4.9,
//       currentQueue: 2500,
//       estimatedWait: '3-4 hours',
//       specialEvents: 'Brahmotsavam Festival - March 2024',
//       history: `The Somnath Temple is one of the most sacred and ancient temples in India, with a history spanning over 2000 years. 

// Key Historical Facts:
// • First Temple: Believed to have been built by the Moon God Soma in gold, later rebuilt by Ravana in silver, by Krishna in wood, and by Bhimdev in stone
// • Jyotirlinga: Houses the first among the twelve Jyotirlinga shrines of Shiva
// • Islamic Invasions: Destroyed and rebuilt multiple times by various invaders including Mahmud of Ghazni (1026 CE), Alauddin Khilji's army (1296 CE), and Aurangzeb (1701 CE)
// • Reconstruction: The current temple was reconstructed in 1951 under the initiative of Sardar Vallabhbhai Patel
// • Architecture: Built in the Chalukya style of architecture, reflecting the grandeur of ancient Indian temple architecture

// Spiritual Significance:
// • The temple is mentioned in ancient texts like the Rig Veda and Puranas
// • It symbolizes the eternal nature of Shiva and the resilience of Hindu faith
// • Located at the confluence of three rivers - Kapila, Hiran, and Saraswati
// • Believed to be the place where Lord Krishna ended his earthly journey`
//     },
//     {
//       id: '2',
//       name: 'Dwaraka Temple',
//       deity: 'Lord Krishna',
//       location: 'Dwarka, Gujarat',
//       timings: '5:00 AM - 10:00 PM',
//       description: 'The Dwarka Temple is dedicated to Lord Krishna, worshipped here as Dwarkadhish, the "King of Dwarka"',
//       image: 'ff.jpg',
//       rating: 4.8,
//       currentQueue: 850,
//       estimatedWait: '1-2 hours',
//       specialEvents: 'Chithirai Festival - April 2024',
//       history: `The Dwarkadhish Temple, also known as Jagat Mandir, is an ancient temple dedicated to Lord Krishna located in the sacred city of Dwarka.

// Historical Timeline:
// • Ancient City: Dwarka was the capital of Lord Krishna's kingdom, established after he left Mathura
// • Original Temple: Believed to have been built by Krishna's great-grandson Vajranabha over Lord Krishna's residential palace
// • Medieval Period: The current temple structure dates back to the 16th century, built in the Chalukyan architectural style
// • Archaeological Evidence: Marine archaeological explorations have revealed underwater structures supporting the historical existence of ancient Dwarka

// Architectural Features:
// • Five-storied main shrine supported by 72 pillars
// • 78-meter high spire adorned with the flag and Sudarshana Chakra
// • Main deity: Lord Krishna as Dwarkadhish in black stone, standing in Tribhanga posture
// • The temple has two main gateways - Swarga Dwar (Gate to Heaven) and Moksha Dwar (Gate to Salvation)

// Spiritual Importance:
// • One of the Char Dham (four principal holy places) for Hindus
// • One of the Sapta Puri (seven sacred cities) that grant moksha
// • Mentioned in the Mahabharata, Harivamsa, and various Puranas
// • Believed to be the gateway to spiritual liberation`
//     },
//     {
//       id: '3',
//       name: 'Ambaji Temple',
//       deity: 'Goddess Mahakali',
//       location: 'Gir Somnath, Gujarat',
//       timings: '24 Hours Open',
//       description: 'The Ambaji Temple in Gujarat is a revered shrine dedicated to Goddess Mahakali, a powerful and fierce form of the Divine Mother.',
//       image: 'Ambaji-Temple-Banner.jpg',
//       rating: 4.9,
//       currentQueue: 1200,
//       estimatedWait: '30-45 minutes',
//       specialEvents: 'Guru Nanak Jayanti - November 2024',
//       history: `The Ambaji Temple is one of the 51 Shakti Peethas where the heart of Goddess Sati is believed to have fallen, making it one of the most important Shakti worship centers in India.

// Mythological Significance:
// • Shakti Peetha: Where the heart of Goddess Sati fell when Lord Vishnu's Sudarshana Chakra cut her body
// • Original Name: Known as Arasuri Ambaji, derived from 'Aranya' meaning forest and 'Suri' meaning sun
// • Ancient Worship: The temple has been a center of Shakti worship for over 2000 years

// Architectural Marvel:
// • No Idol: The temple features a unique Vishwa Yantra instead of a traditional idol, covered with rich silken cloth
// • Golden Kalash: The temple spire is adorned with a magnificent golden kalash (urn)
// • Silver Plated: The main entrance is beautifully silver-plated with intricate carvings

// Historical Development:
// • Ancient Origins: Mentions in ancient texts like the Puranas and Tantric scriptures
// • Medieval Period: Renovated and expanded by various rulers including the Solanki dynasty
// • Modern Era: Continuous development and maintenance by temple trusts and devotees

// Spiritual Practices:
// • Special pujas performed during Navratri and full moon days
// • The temple is part of the famous "Mata na Madh" pilgrimage
// • Known for granting wishes and providing spiritual strength to devotees`
//     }
//   ];

//   const currentTemple = temples[selectedTemple];

//   const handleVirtualTour = () => {
//     setShowHistory(true);
//   };

//   return (
//     <section id="temples" className="py-20 bg-orange-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Temple Information Hub
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Discover divine temples with comprehensive information, live updates, and sacred histories.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Temple Selection */}
//           <div className="lg:col-span-1">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Temples</h3>
//             <div className="space-y-4">
//               {temples.map((temple, index) => (
//                 <button
//                   key={temple.id}
//                   onClick={() => setSelectedTemple(index)}
//                   className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
//                     selectedTemple === index
//                       ? 'bg-orange-100 border-2 border-orange-500'
//                       : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
//                   }`}
//                 >
//                   <h4 className="font-semibold text-gray-900">{temple.name}</h4>
//                   <p className="text-sm text-gray-600">{temple.location}</p>
//                   <div className="flex items-center mt-2">
//                     <Star className="w-4 h-4 text-yellow-500 fill-current" />
//                     <span className="text-sm text-gray-600 ml-1">{temple.rating}</span>
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Temple Details */}
//           <div className="lg:col-span-3">
//             <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl overflow-hidden shadow-lg">
//               <div className="relative h-64 md:h-80">
//                 <img
//                   src={currentTemple.image}
//                   alt={currentTemple.name}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
//                 <div className="absolute bottom-4 left-4 text-white">
//                   <h3 className="text-2xl font-bold">{currentTemple.name}</h3>
//                   <p className="text-lg text-orange-200">{currentTemple.deity}</p>
//                 </div>
//               </div>
              
//               <div className="p-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                   <div className="space-y-4">
//                     <div className="flex items-center space-x-3">
//                       <MapPin className="w-5 h-5 text-orange-600" />
//                       <span className="text-gray-700">{currentTemple.location}</span>
//                     </div>
//                     <div className="flex items-center space-x-3">
//                       <Clock className="w-5 h-5 text-orange-600" />
//                       <span className="text-gray-700">{currentTemple.timings}</span>
//                     </div>
//                     <div className="flex items-center space-x-3">
//                       <Star className="w-5 h-5 text-orange-600" />
//                       <span className="text-gray-700">{currentTemple.rating} Rating</span>
//                     </div>
//                   </div>
                  
//                   <div className="space-y-4">
//                     <div className="bg-white rounded-lg p-4 shadow-sm">
//                       <h4 className="font-semibold text-gray-900 mb-2">Live Queue Status</h4>
//                       <div className="flex justify-between items-center">
//                         <span className="text-2xl font-bold text-red-600">{currentTemple.currentQueue}</span>
//                         <span className="text-sm text-gray-600">people in queue</span>
//                       </div>
//                       <p className="text-sm text-orange-600 mt-1">Est. wait: {currentTemple.estimatedWait}</p>
//                     </div>
//                   </div>
//                 </div>
                
//                 <p className="text-gray-600 mb-6">{currentTemple.description}</p>
                
//                 <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
//                   <div className="flex items-center">
//                     <Calendar className="w-5 h-5 text-yellow-600 mr-2" />
//                     <span className="font-semibold text-yellow-800">Upcoming Event:</span>
//                   </div>
//                   <p className="text-yellow-700 mt-1">{currentTemple.specialEvents}</p>
//                 </div>
                
//                 <div className="flex flex-wrap gap-4">
//                   <button className="bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors">
//                     Book Darshan
//                   </button>
//                   <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center">
//                     <Navigation className="w-5 h-5 mr-2" />
//                     Get Directions
//                   </button>
//                   <button 
//                     onClick={handleVirtualTour}
//                     className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
//                   >
//                     History
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* History Modal */}
//         {showHistory && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//             <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto">
//               <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-2xl font-bold text-gray-900">
//                     {currentTemple.name} - Historical Significance
//                   </h3>
//                   <button 
//                     onClick={() => setShowHistory(false)}
//                     className="text-gray-500 hover:text-gray-700 transition-colors"
//                   >
//                     <X className="w-6 h-6" />
//                   </button>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <div className="prose prose-lg max-w-none">
//                   <div className="whitespace-pre-line text-gray-700 leading-relaxed">
//                     {currentTemple.history}
//                   </div>
//                 </div>
//                 <div className="mt-8 flex justify-end">
//                   <button 
//                     onClick={() => setShowHistory(false)}
//                     className="bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors"
//                   >
//                     Close History
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default TempleInfo;








import React, { useState } from 'react';
import { MapPin, Clock, Star, Calendar, Navigation, X } from 'lucide-react';

const TempleInfo: React.FC = () => {
  const [selectedTemple, setSelectedTemple] = useState(0);
  const [showHistory, setShowHistory] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const temples = [
    {
      id: '1',
      name: 'Somnath Temple',
      deity: 'Lord Shiva',
      location: 'Veraval, Gujarat',
      timings: '3:00 AM - 11:00 PM',
      description: 'The Somnath Temple venerates Lord Shiva in his form as Somnath, the Lord of the Moon, housing one of the twelve sacred Jyotirlingas, which represent his infinite, formless light.',
      image: 's.jpg',
      rating: 4.9,
      currentQueue: 2500,
      estimatedWait: '3-4 hours',
      specialEvents: 'Brahmotsavam Festival - March 2024',
      history: `The Somnath Temple is one of the most sacred and ancient temples in India, with a history spanning over 2000 years. 

Key Historical Facts:
• First Temple: Believed to have been built by the Moon God Soma in gold, later rebuilt by Ravana in silver, by Krishna in wood, and by Bhimdev in stone
• Jyotirlinga: Houses the first among the twelve Jyotirlinga shrines of Shiva
• Islamic Invasions: Destroyed and rebuilt multiple times by various invaders including Mahmud of Ghazni (1026 CE), Alauddin Khilji's army (1296 CE), and Aurangzeb (1701 CE)
• Reconstruction: The current temple was reconstructed in 1951 under the initiative of Sardar Vallabhbhai Patel
• Architecture: Built in the Chalukya style of architecture, reflecting the grandeur of ancient Indian temple architecture

Spiritual Significance:
• The temple is mentioned in ancient texts like the Rig Veda and Puranas
• It symbolizes the eternal nature of Shiva and the resilience of Hindu faith
• Located at the confluence of three rivers - Kapila, Hiran, and Saraswati
• Believed to be the place where Lord Krishna ended his earthly journey`,
      mapUrl: 'https://maps.googleapis.com/maps/api/staticmap?center=Somnath+Temple,Veraval,Gujarat&zoom=15&size=600x400&maptype=roadmap&markers=color:red%7Clabel:T%7C20.8880,70.4015&key=YOUR_API_KEY'
    },
    {
      id: '2',
      name: 'Dwaraka Temple',
      deity: 'Lord Krishna',
      location: 'Dwarka, Gujarat',
      timings: '5:00 AM - 10:00 PM',
      description: 'The Dwarka Temple is dedicated to Lord Krishna, worshipped here as Dwarkadhish, the "King of Dwarka"',
      image: 'ff.jpg',
      rating: 4.8,
      currentQueue: 850,
      estimatedWait: '1-2 hours',
      specialEvents: 'Chithirai Festival - April 2024',
      history: `The Dwarkadhish Temple, also known as Jagat Mandir, is an ancient temple dedicated to Lord Krishna located in the sacred city of Dwarka.

Historical Timeline:
• Ancient City: Dwarka was the capital of Lord Krishna's kingdom, established after he left Mathura
• Original Temple: Believed to have been built by Krishna's great-grandson Vajranabha over Lord Krishna's residential palace
• Medieval Period: The current temple structure dates back to the 16th century, built in the Chalukyan architectural style
• Archaeological Evidence: Marine archaeological explorations have revealed underwater structures supporting the historical existence of ancient Dwarka

Architectural Features:
• Five-storied main shrine supported by 72 pillars
• 78-meter high spire adorned with the flag and Sudarshana Chakra
• Main deity: Lord Krishna as Dwarkadhish in black stone, standing in Tribhanga posture
• The temple has two main gateways - Swarga Dwar (Gate to Heaven) and Moksha Dwar (Gate to Salvation)

Spiritual Importance:
• One of the Char Dham (four principal holy places) for Hindus
• One of the Sapta Puri (seven sacred cities) that grant moksha
• Mentioned in the Mahabharata, Harivamsa, and various Puranas
• Believed to be the gateway to spiritual liberation`,
      mapUrl: 'https://maps.googleapis.com/maps/api/staticmap?center=Dwarkadhish+Temple,Dwarka,Gujarat&zoom=15&size=600x400&maptype=roadmap&markers=color:red%7Clabel:T%7C22.2405,68.9686&key=YOUR_API_KEY'
    },
    {
      id: '3',
      name: 'Ambaji Temple',
      deity: 'Goddess Mahakali',
      location: 'Gir Somnath, Gujarat',
      timings: '24 Hours Open',
      description: 'The Ambaji Temple in Gujarat is a revered shrine dedicated to Goddess Mahakali, a powerful and fierce form of the Divine Mother.',
      image: 'Ambaji-Temple-Banner.jpg',
      rating: 4.9,
      currentQueue: 1200,
      estimatedWait: '30-45 minutes',
      specialEvents: 'Guru Nanak Jayanti - November 2024',
      history: `The Ambaji Temple is one of the 51 Shakti Peethas where the heart of Goddess Sati is believed to have fallen, making it one of the most important Shakti worship centers in India.

Mythological Significance:
• Shakti Peetha: Where the heart of Goddess Sati fell when Lord Vishnu's Sudarshana Chakra cut her body
• Original Name: Known as Arasuri Ambaji, derived from 'Aranya' meaning forest and 'Suri' meaning sun
• Ancient Worship: The temple has been a center of Shakti worship for over 2000 years

Architectural Marvel:
• No Idol: The temple features a unique Vishwa Yantra instead of a traditional idol, covered with rich silken cloth
• Golden Kalash: The temple spire is adorned with a magnificent golden kalash (urn)
• Silver Plated: The main entrance is beautifully silver-plated with intricate carvings

Historical Development:
• Ancient Origins: Mentions in ancient texts like the Puranas and Tantric scriptures
• Medieval Period: Renovated and expanded by various rulers including the Solanki dynasty
• Modern Era: Continuous development and maintenance by temple trusts and devotees

Spiritual Practices:
• Special pujas performed during Navratri and full moon days
• The temple is part of the famous "Mata na Madh" pilgrimage
• Known for granting wishes and providing spiritual strength to devotees`,
      mapUrl: 'https://maps.googleapis.com/maps/api/staticmap?center=Ambaji+Temple,Banas+Kantha,Gujarat&zoom=15&size=600x400&maptype=roadmap&markers=color:red%7Clabel:T%7C24.3316,72.8513&key=YOUR_API_KEY'
    }
  ];

  const currentTemple = temples[selectedTemple];

  const handleVirtualTour = () => {
    setShowHistory(true);
  };

  const handleGetDirections = () => {
    setShowMap(true);
  };

  // Function to generate Google Maps URL for navigation
  const getGoogleMapsUrl = () => {
    const templeName = encodeURIComponent(currentTemple.name);
    const location = encodeURIComponent(currentTemple.location);
    return `https://www.google.com/maps/dir/?api=1&destination=${templeName},${location}`;
  };

  return (
    <section id="temples" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Temple Information Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover divine temples with comprehensive information, live updates, and sacred histories.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Temple Selection */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Temples</h3>
            <div className="space-y-4">
              {temples.map((temple, index) => (
                <button
                  key={temple.id}
                  onClick={() => setSelectedTemple(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                    selectedTemple === index
                      ? 'bg-orange-100 border-2 border-orange-500'
                      : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                  }`}
                >
                  <h4 className="font-semibold text-gray-900">{temple.name}</h4>
                  <p className="text-sm text-gray-600">{temple.location}</p>
                  <div className="flex items-center mt-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{temple.rating}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Temple Details */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-64 md:h-80">
                <img
                  src={currentTemple.image}
                  alt={currentTemple.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{currentTemple.name}</h3>
                  <p className="text-lg text-orange-200">{currentTemple.deity}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-orange-600" />
                      <span className="text-gray-700">{currentTemple.location}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-orange-600" />
                      <span className="text-gray-700">{currentTemple.timings}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-orange-600" />
                      <span className="text-gray-700">{currentTemple.rating} Rating</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2">Live Queue Status</h4>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-red-600">{currentTemple.currentQueue}</span>
                        <span className="text-sm text-gray-600">people in queue</span>
                      </div>
                      <p className="text-sm text-orange-600 mt-1">Est. wait: {currentTemple.estimatedWait}</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{currentTemple.description}</p>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-yellow-600 mr-2" />
                    <span className="font-semibold text-yellow-800">Upcoming Event:</span>
                  </div>
                  <p className="text-yellow-700 mt-1">{currentTemple.specialEvents}</p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <button className="bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors">
                    Book Darshan
                  </button>
                  <button 
                    onClick={handleGetDirections}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <Navigation className="w-5 h-5 mr-2" />
                    Get Directions
                  </button>
                  <button 
                    onClick={handleVirtualTour}
                    className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
                  >
                    History
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* History Modal */}
        {showHistory && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {currentTemple.name} - Historical Significance
                  </h3>
                  <button 
                    onClick={() => setShowHistory(false)}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="prose prose-lg max-w-none">
                  <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                    {currentTemple.history}
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button 
                    onClick={() => setShowHistory(false)}
                    className="bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors"
                  >
                    Close History
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Map Modal */}
        {showMap && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Directions to {currentTemple.name}
                  </h3>
                  <button 
                    onClick={() => setShowMap(false)}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <p className="text-gray-600 mt-2">{currentTemple.location}</p>
              </div>
              <div className="p-6">
                {/* Map Image */}
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-6">
                  <div className="aspect-video bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center relative">
                    {/* Placeholder map - Replace with actual map service */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{currentTemple.name}</h4>
                      <p className="text-gray-600">{currentTemple.location}</p>
                      <p className="text-sm text-gray-500 mt-4">Map integration would show here</p>
                    </div>
                    
                    {/* Map markers */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-white shadow-lg"></div>
                      <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  </div>
                </div>

                {/* Directions Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Temple Address</h4>
                    <p className="text-blue-800">{currentTemple.name}</p>
                    <p className="text-blue-700">{currentTemple.location}</p>
                    <p className="text-blue-600 text-sm mt-2">Gujarat, India</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Travel Time</h4>
                    <p className="text-green-800 text-2xl font-bold">2-3 hours</p>
                    <p className="text-green-700 text-sm">From nearest major city</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 justify-between">
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center">
                      <Navigation className="w-5 h-5 mr-2" />
                      Open in Google Maps
                    </button>
                    <button className="bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-colors">
                      Download Directions
                    </button>
                  </div>
                  <button 
                    onClick={() => setShowMap(false)}
                    className="bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors"
                  >
                    Close Map
                  </button>
                </div>

                {/* Quick Tips */}
                <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Travel Tips</h4>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Best time to visit: Early morning to avoid crowds</li>
                    <li>• Parking available near temple premises</li>
                    <li>• Public transportation accessible</li>
                    <li>• Wear comfortable shoes for temple premises</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TempleInfo;


