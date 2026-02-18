import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Locations from './components/Locations';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);

  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans selection:bg-gold-500 selection:text-dark-900 overflow-x-hidden relative">
      {/* Global Background Texture & Lighting */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-dark-950">
         
         {/* Premium Hex/Carbon Pattern Overlay */}
         <div 
           className="absolute inset-0 opacity-[0.07]"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
             backgroundSize: '20px 20px'
           }}
         />
         
         {/* Noise Texture for Realism */}
         <div className="absolute inset-0 opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
         
         {/* Lighting Effects */}
         <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-gold-600/5 rounded-full blur-[150px]"></div>
         <div className="absolute bottom-[0%] right-[-5%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]"></div>
         
         {/* Heavy Vignette for focus */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(10,10,10,0.95)_100%)]"></div>
      </div>

      <div className="relative z-10">
        <Header onOpenBooking={openBooking} />
        <main>
          <Hero onOpenBooking={openBooking} />
          <About />
          <Services onOpenBooking={openBooking} />
          <Locations />
          <Testimonials />
        </main>
        <Footer />
      </div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}

export default App;