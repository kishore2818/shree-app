// import React, { useState } from 'react';
// import { Play, Users, Video, Clock, Heart, Share2, Volume2 } from 'lucide-react';

// const VirtualDarshan: React.FC = () => {
//   const [isLive, setIsLive] = useState(true);
//   const [currentViewers, setCurrentViewers] = useState(15420);

//   const liveStreams = [
//     {
//       id: '1',
//       temple: 'Somnath Temple',
//       location: 'Veraval',
//       viewers: 15420,
//       quality: '4K HD',
//       language: 'Multi-language',
//       nextAarti: '6:00 PM',
//       thumbnail: 's.jpg'
//     },
//     {
//       id: '2',
//       temple: 'Dwaraka Temple',
//       location: 'Dwarka',
//       viewers: 8650,
//       quality: '4K HD',
//       language: 'Multi-language',
//       nextAarti: '7:30 PM',
//       thumbnail: 'ff.jpg'
//     },
//     {
//       id: '3',
//       temple: 'Ambanji Temple',
//       location: 'Gir Somnath',
//       viewers: 12340,
//       quality: '4K HD',
//       language: 'Multi-language',
//       nextAarti: '8:00 PM',
//       thumbnail: 'Ambaji-Temple-Banner.jpg'
//     }
//   ];

//   return (
//     <section id="virtual" className="py-20 bg-gradient-to-b from-indigo-50 to-purple-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Virtual Darshan
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Experience divine blessings from anywhere in the world with our live streaming services. 
//             Join thousands of devotees in virtual worship.
//           </p>
//         </div>

//         {/* Main Live Stream */}
//         <div className="mb-12">
//           <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
//             <div className="relative">
//               <div className="aspect-video bg-gradient-to-r from-yellow-200 to-yellow-200 flex items-center justify-center">
//                 <div className="text-center text-white">
//                   <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <Play className="w-12 h-12" />
//                   </div>
//                   <h3 className="text-2xl font-bold mb-2">Live Darshan</h3>
//                   <p className="text-purple-200">Pavagadh Temple - Gujarat</p>
//                 </div>
//               </div>
              
//               {/* Live Indicator */}
//               <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full flex items-center space-x-2">
//                 <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//                 <span className="text-sm font-semibold">LIVE</span>
//               </div>
              
//               {/* Viewers Count */}
//               <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full flex items-center space-x-2">
//                 <Users className="w-4 h-4" />
//                 <span className="text-sm">{currentViewers.toLocaleString()}</span>
//               </div>
              
//               {/* Controls */}
//               <div className="absolute bottom-4 left-4 flex space-x-3">
//                 <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors">
//                   <Volume2 className="w-5 h-5" />
//                 </button>
//                 <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors">
//                   <Heart className="w-5 h-5" />
//                 </button>
//                 <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors">
//                   <Share2 className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
            
//             <div className="p-6">
//               <div className="flex flex-wrap items-center justify-between gap-4">
//                 <div>
//                   <h4 className="text-xl font-bold text-gray-900">Morning Suprabhatham</h4>
//                   <p className="text-gray-600">Live from the sanctum sanctorum</p>
//                 </div>
//                 <div className="flex items-center space-x-4 text-sm text-gray-500">
//                   <span className="flex items-center">
//                     <Video className="w-4 h-4 mr-1" />
//                     4K HD
//                   </span>
//                   <span className="flex items-center">
//                     <Clock className="w-4 h-4 mr-1" />
//                     Next Aarti: 6:00 PM
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Other Live Streams */}
//         <div>
//           <h3 className="text-2xl font-bold text-gray-900 mb-8">More Live Temples</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {liveStreams.map((stream) => (
//               <div key={stream.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
//                 <div className="relative">
//                   <img 
//                     src={stream.thumbnail} 
//                     alt={stream.temple}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  
//                   {/* Live Badge */}
//                   <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
//                     LIVE
//                   </div>
                  
//                   {/* Play Button */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <button className="w-16 h-16 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-colors">
//                       <Play className="w-8 h-8 text-white ml-1" />
//                     </button>
//                   </div>
                  
//                   {/* Viewers */}
//                   <div className="absolute bottom-3 right-3 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs flex items-center">
//                     <Users className="w-3 h-3 mr-1" />
//                     {stream.viewers.toLocaleString()}
//                   </div>
//                 </div>
                
//                 <div className="p-4">
//                   <h4 className="font-bold text-gray-900 mb-1">{stream.temple}</h4>
//                   <p className="text-sm text-gray-600 mb-3">{stream.location}</p>
                  
//                   <div className="space-y-2 text-xs text-gray-500">
//                     <div className="flex justify-between">
//                       <span>Quality:</span>
//                       <span className="font-medium">{stream.quality}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Languages:</span>
//                       <span className="font-medium">{stream.language}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Next Aarti:</span>
//                       <span className="font-medium text-orange-600">{stream.nextAarti}</span>
//                     </div>
//                   </div>
                  
//                   <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-colors">
//                     Watch Live
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Features */}
//         <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Video className="w-8 h-8 text-purple-600" />
//               </div>
//               <h4 className="font-bold text-lg text-gray-900 mb-2">4K HD Quality</h4>
//               <p className="text-gray-600">Crystal clear video streaming for immersive experience</p>
//             </div>
//             <div className="text-center">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Users className="w-8 h-8 text-green-600" />
//               </div>
//               <h4 className="font-bold text-lg text-gray-900 mb-2">Community Experience</h4>
//               <p className="text-gray-600">Join thousands of devotees in virtual worship</p>
//             </div>
//             <div className="text-center">
//               <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Clock className="w-8 h-8 text-orange-600" />
//               </div>
//               <h4 className="font-bold text-lg text-gray-900 mb-2">24/7 Availability</h4>
//               <p className="text-gray-600">Access divine blessings anytime, anywhere</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VirtualDarshan;




import React, { useState } from 'react';
import { Play, Users, Video, Clock, Heart, Share2, Volume2 } from 'lucide-react';

const VirtualDarshan: React.FC = () => {
  const [isLive, setIsLive] = useState(true);
  const [currentViewers, setCurrentViewers] = useState(15420);

  // const liveStreams = [
  //   {
  //     id: '1',
  //     temple: 'Somnath Temple',
  //     location: 'Veraval',
  //     viewers: 15420,
  //     quality: '4K HD',
  //     language: 'Multi-language',
  //     nextAarti: '6:00 PM',
  //     thumbnail: 's.jpg',
  //     youtubeId: 'MVqqIh15OMs'
  //   },
  //   {
  //     id: '2',
  //     temple: 'Dwaraka Temple',
  //     location: 'Dwarka',
  //     viewers: 8650,
  //     quality: '4K HD',
  //     language: 'Multi-language',
  //     nextAarti: '7:30 PM',
  //     thumbnail: 'ff.jpg',
  //     youtubeId: 'MVqqIh15OMs'
  //   },
  //   {
  //     id: '3',
  //     temple: 'Ambanji Temple',
  //     location: 'Gir Somnath',
  //     viewers: 12340,
  //     quality: '4K HD',
  //     language: 'Multi-language',
  //     nextAarti: '8:00 PM',
  //     thumbnail: 'Ambaji-Temple-Banner.jpg',
  //     youtubeId: 'MVqqIh15OMs'
  //   }
  // ];
const liveStreams = [
  {
    id: '1',
    temple: 'Somnath Temple',
    location: 'Veraval',
    viewers: 15420,
    quality: '4K HD',
    language: 'Multi-language',
    nextAarti: '6:00 PM',
    thumbnail: new URL('../assets/s.jpg', import.meta.url).href,
    youtubeId: 'MVqqIh15OMs'
  },
  {
    id: '2',
    temple: 'Dwaraka Temple',
    location: 'Dwarka',
    viewers: 8650,
    quality: '4K HD',
    language: 'Multi-language',
    nextAarti: '7:30 PM',
    thumbnail: new URL('../assets/ff.jpg', import.meta.url).href,
    youtubeId: 'MVqqIh15OMs'
  },
  {
    id: '3',
    temple: 'Ambanji Temple',
    location: 'Gir Somnath',
    viewers: 12340,
    quality: '4K HD',
    language: 'Multi-language',
    nextAarti: '8:00 PM',
    thumbnail: new URL('../assets/Ambaji-Temple-Banner.jpg', import.meta.url).href,
    youtubeId: 'MVqqIh15OMs'
  }
];
  const [currentVideo, setCurrentVideo] = useState(liveStreams[0].youtubeId);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoSelect = (youtubeId: string) => {
    setCurrentVideo(youtubeId);
    setIsPlaying(true);
  };

  return (
    <section id="virtual" className="py-20 bg-gradient-to-b from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Virtual Darshan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience divine blessings from anywhere in the world with our live streaming services. 
            Join thousands of devotees in virtual worship.
          </p>
        </div>

        {/* Main Live Stream */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative">
              {/* YouTube Video Player */}
              <div className="aspect-video bg-black">
                {isPlaying ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1&rel=0&modestbranding=1`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Live Darshan"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-yellow-200 to-yellow-200 flex items-center justify-center relative">
                    <img 
                      src={liveStreams[0].thumbnail} 
                      alt="Temple Thumbnail"
                      className="w-full h-full object-cover absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                    <button 
                      onClick={() => setIsPlaying(true)}
                      className="relative z-10 text-center text-white"
                    >
                      <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-opacity-30 transition-colors">
                        <Play className="w-12 h-12" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Live Darshan</h3>
                      <p className="text-purple-200">Click to play live stream</p>
                    </button>
                  </div>
                )}
              </div>
              
              {/* Live Indicator */}
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">LIVE</span>
              </div>
              
              {/* Viewers Count */}
              <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span className="text-sm">{currentViewers.toLocaleString()}</span>
              </div>
              
              {/* Controls */}
              <div className="absolute bottom-4 left-4 flex space-x-3">
                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors">
                  <Volume2 className="w-5 h-5" />
                </button>
                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Morning Suprabhatham</h4>
                  <p className="text-gray-600">Live from the sanctum sanctorum</p>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Video className="w-4 h-4 mr-1" />
                    4K HD
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    Next Aarti: 6:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Live Streams */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">More Live Temples</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {liveStreams.map((stream) => (
              <div key={stream.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={stream.thumbnail} 
                    alt={stream.temple}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  
                  {/* Live Badge */}
                  <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    LIVE
                  </div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={() => handleVideoSelect(stream.youtubeId)}
                      className="w-16 h-16 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Play className="w-8 h-8 text-white ml-1" />
                    </button>
                  </div>
                  
                  {/* Viewers */}
                  <div className="absolute bottom-3 right-3 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    {stream.viewers.toLocaleString()}
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-1">{stream.temple}</h4>
                  <p className="text-sm text-gray-600 mb-3">{stream.location}</p>
                  
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex justify-between">
                      <span>Quality:</span>
                      <span className="font-medium">{stream.quality}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Languages:</span>
                      <span className="font-medium">{stream.language}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Next Aarti:</span>
                      <span className="font-medium text-orange-600">{stream.nextAarti}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleVideoSelect(stream.youtubeId)}
                    className="w-full mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-colors"
                  >
                    Watch Live
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">4K HD Quality</h4>
              <p className="text-gray-600">Crystal clear video streaming for immersive experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Community Experience</h4>
              <p className="text-gray-600">Join thousands of devotees in virtual worship</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">24/7 Availability</h4>
              <p className="text-gray-600">Access divine blessings anytime, anywhere</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualDarshan;