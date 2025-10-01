// import React from 'react';
// import { Calendar, Clock, MapPin, Star } from 'lucide-react';
// import { BookingType } from '../types';

// interface HeroProps {
//   onBooking: (type: BookingType) => void;
// }

// const Hero: React.FC<HeroProps> = ({ onBooking }) => {
//   return (
//     <section id="home" className="relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-20">
//       <div className="absolute inset-0 bg-black opacity-20"></div>
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">
//             Welcome to <span className="text-yellow-300">Divya Darshan</span>
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 text-orange-100">
//             Your Gateway to Divine Blessings - Book Temple Visits, Seva & More
//           </p>
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
//               <Clock className="w-5 h-5" />
//               <span>Real-time Slots</span>
//             </div>
//             <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
//               <Star className="w-5 h-5" />
//               <span>Instant Confirmation</span>
//             </div>
//             <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
//               <MapPin className="w-5 h-5" />
//               <span>500+ Temples</span>
//             </div>
//           </div>
//           <button
//             onClick={() => onBooking('darshan')}
//             className="bg-yellow-500 text-orange-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 transform hover:scale-105 transition-all duration-200 shadow-lg"
//           >
//             <Calendar className="inline w-5 h-5 mr-2" />
//             Book Darshan Now
//           </button>
//         </div>

//         {/* Live Stats */}
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
//           <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-6 text-center">
//             <div className="text-3xl font-bold text-yellow-300">15,847</div>
//             <div className="text-sm text-orange-100">Today's Bookings</div>
//           </div>
//           <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-6 text-center">
//             <div className="text-3xl font-bold text-yellow-300">500+</div>
//             <div className="text-sm text-orange-100">Partner Temples</div>
//           </div>
//           <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-6 text-center">
//             <div className="text-3xl font-bold text-yellow-300">2.5M+</div>
//             <div className="text-sm text-orange-100">Happy Devotees</div>
//           </div>
//           <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-6 text-center">
//             <div className="text-3xl font-bold text-yellow-300">24/7</div>
//             <div className="text-sm text-orange-100">Support Available</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;




// import React from 'react';
// import { Calendar, Clock, MapPin, Star } from 'lucide-react';
// import { BookingType } from '../types';

// interface HeroProps {
//   onBooking: (type: BookingType) => void;
// }

// const Hero: React.FC<HeroProps> = ({ onBooking }) => {
//   return (
//     <section 
//       id="home" 
//       className="relative text-white py-20"
//       style={{
//         backgroundImage: 'url(bg.jpeg)',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat'
//       }}
//     >
//       {/* Dark overlay with low opacity */}
//       <div className="absolute inset-0 bg-black opacity-20"></div>
      
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">
//             Welcome to <span className="text-yellow-300">SHREE</span>
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 text-orange-100">
//             Your Gateway to Divine Blessings - Book Temple Visits, Seva & More
//           </p>
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
//               <Clock className="w-5 h-5" />
//               <span>Real-time Slots</span>
//             </div>
//             <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
//               <Star className="w-5 h-5" />
//               <span>Instant Confirmation</span>
//             </div>
//             <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
//               <MapPin className="w-5 h-5" />
//               <span>500+ Temples</span>
//             </div>
//           </div>
//           <button
//             onClick={() => onBooking('darshan')}
//             className="bg-yellow-500 text-orange-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 transform hover:scale-105 transition-all duration-200 shadow-lg"
//           >
//             <Calendar className="inline w-5 h-5 mr-2" />
//             Book Darshan Now
//           </button>
//         </div>

//         {/* Live Stats */}
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
//           <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-6 text-center">
//             <div className="text-3xl font-bold text-yellow-300">1,847</div>
//             <div className="text-sm text-orange-100">Today's Bookings</div>
//           </div>
//           {/* <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-6 text-center">
//             <div className="text-3xl font-bold text-yellow-300">500+</div>
//             <div className="text-sm text-orange-100">Partner Temples</div>
//           </div> */}
//           <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-6 text-center">
//             <div className="text-3xl font-bold text-yellow-300">2.5M+</div>
//             <div className="text-sm text-orange-100">Happy Devotees</div>
//           </div>
//           <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-6 text-center">
//             <div className="text-3xl font-bold text-yellow-300">24/7</div>
//             <div className="text-sm text-orange-100">Support Available</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import React from 'react';
// import { Calendar, Clock, MapPin, Star } from 'lucide-react';
// import { BookingType } from '../types';

// interface HeroProps {
//   onBooking: (type: BookingType) => void;
// }

// const Hero: React.FC<HeroProps> = ({ onBooking }) => {
//   return (
//     <section 
//       id="home" 
//       className="relative text-white py-20"
//       style={{
//         backgroundImage: 'url(bg.jpeg)',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat'
//       }}
//     >
//       {/* Dark overlay with low opacity */}
//       <div className="absolute inset-0 bg-black opacity-20"></div>
      
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">
//             Welcome to <span className="text-yellow-300">SHREE</span>
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 text-orange-100">
//             Your Gateway to Divine Blessings - Book Temple Visits, Seva & More
//           </p>
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
//               <Clock className="w-5 h-5" />
//               <span>Real-time Slots</span>
//             </div>
//             <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
//               <Star className="w-5 h-5" />
//               <span>Instant Confirmation</span>
//             </div>
//             <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
//               <MapPin className="w-5 h-5" />
//               <span>500+ Temples</span>
//             </div>
//           </div>
//           <button
//             onClick={() => onBooking('darshan')}
//             className="bg-yellow-500 text-orange-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 transform hover:scale-105 transition-all duration-200 shadow-lg"
//           >
//             <Calendar className="inline w-5 h-5 mr-2" />
//             Book Darshan Now
//           </button>
//         </div>

//         {/* Live Stats - Centered with 3 columns */}
//         <div className="mt-16 flex justify-center">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
//             <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-6 text-center">
//               <div className="text-3xl font-bold text-yellow-300">1,847</div>
//               <div className="text-sm text-orange-100">Today's Bookings</div>
//             </div>
//             <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-6 text-center">
//               <div className="text-3xl font-bold text-yellow-300">500K+</div>
//               <div className="text-sm text-orange-100">Happy Devotees</div>
//             </div>
//             <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-6 text-center">
//               <div className="text-3xl font-bold text-yellow-300">24/7</div>
//               <div className="text-sm text-orange-100">Support Available</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;









import React from 'react';
import { Calendar, Clock, MapPin, Star } from 'lucide-react';
import { BookingType } from '../types';
import bgImage from '../assets/bg.jpeg';


interface HeroProps {
  onBooking: (type: BookingType) => void;
}

const Hero: React.FC<HeroProps> = ({ onBooking }) => {
  return (
    <section 
      id="home" 
      className="relative text-white py-20"
      style={{
         backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay with low opacity */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 transition-all duration-300 ease-out hover:scale-105 hover:text-yellow-300 cursor-pointer">
            Welcome to <span className="text-yellow-300">SHREE</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-orange-100">
            Your Gateway to Divine Blessings - Book Temple Visits, Seva & More
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
              <Clock className="w-5 h-5" />
              <span>Real-time Slots</span>
            </div>
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
              <Star className="w-5 h-5" />
              <span>Instant Confirmation</span>
            </div>
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
              <MapPin className="w-5 h-5" />
              <span>Live Dharasan</span>
            </div>
          </div>
          <button
            onClick={() => onBooking('darshan')}
            className="bg-yellow-500 text-orange-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            <Calendar className="inline w-5 h-5 mr-2" />
            Book Darshan Now
          </button>
        </div>

        {/* Live Stats - Centered with 3 columns */}
        <div className="mt-16 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
            <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-yellow-300">1,847</div>
              <div className="text-sm text-orange-100">Today's Bookings</div>
            </div>
            <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-yellow-300">500K+</div>
              <div className="text-sm text-orange-100">Happy Devotees</div>
            </div>
            <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-yellow-300">24/7</div>
              <div className="text-sm text-orange-100">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;












