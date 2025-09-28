import React, { useState } from 'react';
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header language={language} setLanguage={setLanguage} />
      <Hero onBooking={handleBooking} />
      <BookingServices onBooking={handleBooking} />
      <TempleInfo />
      <VirtualDarshan />
      <Donations />
      <Footer />
      {currentBooking && (
        <BookingModal
          bookingType={currentBooking}
          onClose={closeBooking}
        />
      )}
    </div>
  );
}

export default App;