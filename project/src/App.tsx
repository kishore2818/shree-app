// // import React, { useState } from 'react';
// // import Header from './components/Header';
// // import Hero from './components/Hero';
// // import BookingServices from './components/BookingServices';
// // import TempleInfo from './components/TempleInfo';
// // import VirtualDarshan from './components/VirtualDarshan';
// // import Donations from './components/Donations';
// // import Footer from './components/Footer';
// // import BookingModal from './components/BookingModal';
// // import { BookingType } from './types';

// // function App() {
// //   const [currentBooking, setCurrentBooking] = useState<BookingType | null>(null);
// //   const [language, setLanguage] = useState('en');

// //   const handleBooking = (type: BookingType) => {
// //     setCurrentBooking(type);
// //   };

// //   const closeBooking = () => {
// //     setCurrentBooking(null);
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
// //       <Header language={language} setLanguage={setLanguage} />
// //       <Hero onBooking={handleBooking} />
// //       <BookingServices onBooking={handleBooking} />
// //       <TempleInfo />
// //       <VirtualDarshan />
// //       <Donations />
// //       <Footer />
// //       {currentBooking && (
// //         <BookingModal
// //           bookingType={currentBooking}
// //           onClose={closeBooking}
// //         />
// //       )}
// //     </div>
// //   );
// // }

// // export default App;





// import React, { useState } from 'react';
// import { I18nextProvider } from 'react-i18next';
// import i18n from './i18n';

// import Header from './components/Header';
// import Hero from './components/Hero';
// import BookingServices from './components/BookingServices';
// import TempleInfo from './components/TempleInfo';
// import VirtualDarshan from './components/VirtualDarshan';
// import Donations from './components/Donations';
// import Footer from './components/Footer';
// import BookingModal from './components/BookingModal';
// import { BookingType } from './types';

// function App() {
//   const [currentBooking, setCurrentBooking] = useState<BookingType | null>(null);
//   const [language, setLanguage] = useState('en');

//   const handleBooking = (type: BookingType) => {
//     setCurrentBooking(type);
//   };

//   const closeBooking = () => {
//     setCurrentBooking(null);
//   };

//   // Change app language dynamically
//   const handleLanguageChange = (lang: string) => {
//     setLanguage(lang);
//     i18n.changeLanguage(lang);
//   };

//   return (
//     <I18nextProvider i18n={i18n}>
//       <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
//         <Header language={language} setLanguage={handleLanguageChange} />
//         <Hero onBooking={handleBooking} />
//         <BookingServices onBooking={handleBooking} />
//         <TempleInfo />
//         <VirtualDarshan />
//         <Donations />
//         <Footer />
//         {currentBooking && (
//           <BookingModal bookingType={currentBooking} onClose={closeBooking} />
//         )}
//       </div>
//     </I18nextProvider>
//   );
// }

// export default App;





import React, { useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n'; // updated path

import Header from './components/Header';
import Hero from './components/Hero';
import BookingServices from './components/BookingServices';
import TempleInfo from './components/TempleInfo';
import VirtualDarshan from './components/VirtualDarshan';
import Donations from './components/Donations';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { BookingType } from './types';

function App() {
  const [currentBooking, setCurrentBooking] = useState<BookingType | null>(null);
  const [language, setLanguage] = useState('en');

  const handleBooking = (type: BookingType) => {
    setCurrentBooking(type);
  };

  const closeBooking = () => {
    setCurrentBooking(null);
  };

  // Change app language dynamically
  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <Header language={language} setLanguage={handleLanguageChange} />
        <Hero onBooking={handleBooking} />
        <BookingServices onBooking={handleBooking} />
        <TempleInfo />
        <VirtualDarshan />
        <Donations />
        <Footer />
        {currentBooking && (
          <BookingModal bookingType={currentBooking} onClose={closeBooking} />
        )}
      </div>
    </I18nextProvider>
  );
}

export default App;
