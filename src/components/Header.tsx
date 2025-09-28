// import React from 'react';
// import { Bell, Globe, Menu, Phone, User } from 'lucide-react';
// import { languages } from '../types';

// interface HeaderProps {
//   language: string;
//   setLanguage: (lang: string) => void;
// }

// const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
//   return (
//     <header className="bg-white shadow-lg border-b-4 border-orange-500">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center space-x-3">
//             <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
//               <span className="text-white font-bold text-lg">🕉</span>
//             </div>
//             <div>
//               <h1 className="text-2xl font-bold text-orange-600">Divya Darshan</h1>
//               <p className="text-xs text-gray-600">Divine Temple Portal</p>
//             </div>
//           </div>

//           {/* Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <a href="#home" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Home</a>
//             <a href="#bookings" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Bookings</a>
//             <a href="#temples" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Temples</a>
//             <a href="#virtual" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Virtual Darshan</a>
//             <a href="#donations" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Donations</a>
//           </nav>

//           {/* Right Actions */}
//           <div className="flex items-center space-x-4">
//             {/* Language Selector */}
//             <div className="relative">
//               <select
//                 value={language}
//                 onChange={(e) => setLanguage(e.target.value)}
//                 className="bg-gray-100 border-0 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 appearance-none cursor-pointer"
//               >
//                 {Object.entries(languages).map(([code, name]) => (
//                   <option key={code} value={code}>{name}</option>
//                 ))}
//               </select>
//               {/* <Globe className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" /> */}
//             </div>

//             {/* Notifications */}
//             <button className="relative p-2 text-gray-600 hover:text-orange-600 transition-colors">
//               <Bell className="w-5 h-5" />
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
//             </button>

//             {/* Profile */}
//             <button className="flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2 hover:bg-gray-200 transition-colors">
//               <User className="w-5 h-5 text-gray-600" />
//               {/* <span className="hidden sm:block text-sm font-medium text-gray-700">Login</span> */}
//             </button>

//             {/* Mobile Menu */}
//             <button className="md:hidden p-2 text-gray-600 hover:text-orange-600">
//               <Menu className="w-6 h-6" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


// import React, { useState } from 'react';
// import { Bell, Globe, Menu, User, X } from 'lucide-react';
// import { languages } from '../types';

// interface HeaderProps {
//   language: string;
//   setLanguage: (lang: string) => void;
// }

// const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   const navLinks = [
//     { href: '#home', label: 'Home' },
//     { href: '#bookings', label: 'Bookings' },
//     { href: '#temples', label: 'Temples' },
//     { href: '#virtual', label: 'Virtual Darshan' },
//     { href: '#donations', label: 'Donations' },
//   ];

//   return (
//     <>
//       <header className="bg-white shadow-lg border-b-4 border-orange-500 relative z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo */}
//             <div className="flex items-center space-x-3">
//               <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
//                 <span className="text-white font-bold text-lg">🕉</span>
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold text-orange-600">SHREE</h1>
//                 {/* <p className="text-xs text-gray-600">Divine Temple Portal</p> */}
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex items-center space-x-8">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.href}
//                   href={link.href}
//                   className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
//                 >
//                   {link.label}
//                 </a>
//               ))}
//             </nav>

//             {/* Right Actions */}
//             <div className="flex items-center space-x-4">
//               {/* Language Selector */}
//               <div className="relative">
//                 <select
//                   value={language}
//                   onChange={(e) => setLanguage(e.target.value)}
//                   className="bg-gray-100 border-0 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 appearance-none cursor-pointer"
//                 >
//                   {Object.entries(languages).map(([code, name]) => (
//                     <option key={code} value={code}>{name}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* Notifications */}
//               <button className="relative p-2 text-gray-600 hover:text-orange-600 transition-colors">
//                 <Bell className="w-5 h-5" />
//                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
//               </button>

//               {/* Profile */}
//               <button className="hidden sm:flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2 hover:bg-gray-200 transition-colors">
//                 <User className="w-5 h-5 text-gray-600" />
//               </button>

//               {/* Mobile Menu Button */}
//               <button 
//                 className="md:hidden p-2 text-gray-600 hover:text-orange-600 transition-colors"
//                 onClick={toggleMobileMenu}
//               >
//                 {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Sidebar Overlay */}
//       {isMobileMenuOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
//           onClick={closeMobileMenu}
//         ></div>
//       )}

//       {/* Mobile Sidebar */}
//       <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
//         isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
//       }`}>
//         {/* Sidebar Header */}
//         <div className="flex items-center justify-between p-6 border-b border-gray-200">
//           <div className="flex items-center space-x-3">
//             <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
//               <span className="text-white font-bold text-lg">🕉</span>
//             </div>
//             <div>
//               <h1 className="text-xl font-bold text-orange-600">Divya Darshan</h1>
//               <p className="text-xs text-gray-600">Divine Temple Portal</p>
//             </div>
//           </div>
//           <button 
//             onClick={closeMobileMenu}
//             className="p-2 text-gray-600 hover:text-orange-600 transition-colors"
//           >
//             <X className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Sidebar Navigation */}
//         <nav className="flex flex-col p-6">
//           <div className="space-y-2">
//             {navLinks.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 className="flex items-center px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-all duration-200"
//                 onClick={closeMobileMenu}
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>

//           {/* Sidebar Footer Actions */}
//           <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
//             {/* Mobile Language Selector */}
//             <div className="px-4">
//               <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
//               <select
//                 value={language}
//                 onChange={(e) => {
//                   setLanguage(e.target.value);
//                   closeMobileMenu();
//                 }}
//                 className="w-full bg-gray-100 border-0 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500"
//               >
//                 {Object.entries(languages).map(([code, name]) => (
//                   <option key={code} value={code}>{name}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Mobile Notifications */}
//             <button 
//               className="flex items-center w-full px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
//               onClick={closeMobileMenu}
//             >
//               <div className="relative">
//                 <Bell className="w-5 h-5 mr-3" />
//                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
//               </div>
//               Notifications
//             </button>

//             {/* Mobile Profile */}
//             <button 
//               className="flex items-center w-full px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
//               onClick={closeMobileMenu}
//             >
//               <User className="w-5 h-5 mr-3" />
//               Login / Sign Up
//             </button>
//           </div>

//           {/* Contact Info */}
//           <div className="mt-auto pt-6 border-t border-gray-200 px-4">
//             <div className="text-xs text-gray-500">
//               <p className="font-medium text-gray-700 mb-1">Need help?</p>
//               <p>Email: support@divyadarshan.com</p>
//               <p>Phone: +1 (555) 123-4567</p>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Header;






import React, { useState } from 'react';
import { Bell, Globe, Menu, User, X, LogOut, Settings, CreditCard, Heart, History } from 'lucide-react';
import { languages } from '../types';

interface HeaderProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulate logged in state
  const [user] = useState({
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    phone: '+91 98765 43210',
    memberSince: '2023',
    bookings: 12,
    donations: 5
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleAccountMenu = () => {
    setIsAccountMenuOpen(!isAccountMenuOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAccountMenuOpen(false);
    closeMobileMenu();
    // Add your logout logic here (clear tokens, redirect, etc.)
    console.log('User logged out');
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsAccountMenuOpen(false);
    closeMobileMenu();
    // Add your login logic here
    console.log('User logged in');
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#bookings', label: 'Bookings' },
    { href: '#temples', label: 'Temples' },
    { href: '#virtual', label: 'Virtual Darshan' },
    { href: '#donations', label: 'Donations' },
  ];

  const accountMenuItems = [
    { icon: User, label: 'Profile', action: () => console.log('Profile clicked') },
    { icon: History, label: 'Booking History', action: () => console.log('Booking History clicked') },
    { icon: Heart, label: 'Donations', action: () => console.log('Donations clicked') },
    { icon: CreditCard, label: 'Payment Methods', action: () => console.log('Payment Methods clicked') },
    { icon: Settings, label: 'Settings', action: () => console.log('Settings clicked') },
  ];

  return (
    <>
      <header className="bg-white shadow-lg border-b-4 border-orange-500 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🕉</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-orange-600">SHREE</h1>
                {/* <p className="text-xs text-gray-600">Divine Temple Portal</p> */}
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-gray-100 border-0 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 appearance-none cursor-pointer"
                >
                  {Object.entries(languages).map(([code, name]) => (
                    <option key={code} value={code}>{name}</option>
                  ))}
                </select>
              </div>

              {/* Notifications */}
              <button className="relative p-2 text-gray-600 hover:text-orange-600 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </button>

              {/* Profile with Dropdown */}
              <div className="relative hidden sm:block">
                <button 
                  className="flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2 hover:bg-gray-200 transition-colors"
                  onClick={toggleAccountMenu}
                >
                  <User className="w-5 h-5 text-gray-600" />
                  <span className="text-sm text-gray-700">{isLoggedIn ? user.name.split(' ')[0] : 'Account'}</span>
                </button>

                {/* Account Dropdown Menu */}
                {isAccountMenuOpen && (
                  <div className="absolute right-0 top-12 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50">
                    {isLoggedIn ? (
                      <>
                        {/* User Info */}
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="font-semibold text-gray-900">{user.name}</p>
                          <p className="text-sm text-gray-600">{user.email}</p>
                          <div className="flex space-x-4 mt-2 text-xs text-gray-500">
                            <span>Bookings: {user.bookings}</span>
                            <span>Donations: {user.donations}</span>
                          </div>
                        </div>

                        {/* Menu Items */}
                        {accountMenuItems.map((item, index) => (
                          <button
                            key={index}
                            onClick={item.action}
                            className="flex items-center w-full px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                          >
                            <item.icon className="w-4 h-4 mr-3" />
                            {item.label}
                          </button>
                        ))}

                        {/* Logout Button */}
                        <div className="border-t border-gray-100 mt-2 pt-2">
                          <button
                            onClick={handleLogout}
                            className="flex items-center w-full px-4 py-3 text-red-600 hover:bg-red-50 transition-colors"
                          >
                            <LogOut className="w-4 h-4 mr-3" />
                            Logout
                          </button>
                        </div>
                      </>
                    ) : (
                      /* Login/Signup State */
                      <div className="p-4">
                        <p className="text-gray-600 mb-4">Please log in to access your account</p>
                        <button
                          onClick={handleLogin}
                          className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors font-medium"
                        >
                          Login / Sign Up
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 text-gray-600 hover:text-orange-600 transition-colors"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🕉</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-orange-600">Divya Darshan</h1>
              <p className="text-xs text-gray-600">Divine Temple Portal</p>
            </div>
          </div>
          <button 
            onClick={closeMobileMenu}
            className="p-2 text-gray-600 hover:text-orange-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex flex-col p-6">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-all duration-200"
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* User Profile Section in Mobile */}
          {isLoggedIn && (
            <div className="mt-6 p-4 bg-orange-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              </div>
              <div className="flex justify-between mt-3 text-xs text-gray-500">
                <span>Bookings: {user.bookings}</span>
                <span>Donations: {user.donations}</span>
                <span>Since: {user.memberSince}</span>
              </div>
            </div>
          )}

          {/* Account Menu Items for Mobile */}
          {isLoggedIn && (
            <div className="mt-4 space-y-1">
              {accountMenuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    item.action();
                    closeMobileMenu();
                  }}
                  className="flex items-center w-full px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
                >
                  <item.icon className="w-4 h-4 mr-3" />
                  {item.label}
                </button>
              ))}
            </div>
          )}

          {/* Sidebar Footer Actions */}
          <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
            {/* Mobile Language Selector */}
            <div className="px-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
              <select
                value={language}
                onChange={(e) => {
                  setLanguage(e.target.value);
                  closeMobileMenu();
                }}
                className="w-full bg-gray-100 border-0 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500"
              >
                {Object.entries(languages).map(([code, name]) => (
                  <option key={code} value={code}>{name}</option>
                ))}
              </select>
            </div>

            {/* Mobile Notifications */}
            <button 
              className="flex items-center w-full px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
              onClick={closeMobileMenu}
            >
              <div className="relative">
                <Bell className="w-5 h-5 mr-3" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </div>
              Notifications
            </button>

            {/* Mobile Login/Logout */}
            {isLoggedIn ? (
              <button 
                onClick={() => {
                  handleLogout();
                  closeMobileMenu();
                }}
                className="flex items-center w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
              >
                <LogOut className="w-5 h-5 mr-3" />
                Logout
              </button>
            ) : (
              <button 
                onClick={() => {
                  handleLogin();
                  closeMobileMenu();
                }}
                className="flex items-center w-full px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
              >
                <User className="w-5 h-5 mr-3" />
                Login / Sign Up
              </button>
            )}
          </div>

          {/* Contact Info */}
          <div className="mt-auto pt-6 border-t border-gray-200 px-4">
            <div className="text-xs text-gray-500">
              <p className="font-medium text-gray-700 mb-1">Need help?</p>
              <p>Email: support@shree.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </nav>
      </div>

      {/* Close dropdown when clicking outside */}
      {isAccountMenuOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setIsAccountMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Header;
