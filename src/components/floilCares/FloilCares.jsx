import React, { useRef, useState } from 'react';
import videoSource from '../assets/FINAL.mp4'; // Replace with the actual path to your video file
import { Link } from 'react-router-dom';

const FloilCares = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row mt-20 relative">
      <div className="px-4 lg:px-[70px] bg-[#60c5ef] py-16 lg:w-1/2 flex justify-center flex-col font-sans">
        <h2 className="text-xl lg:text-[35px] text-white mb-2 font-semibold">Floil Cares</h2>
        <p className="text-[13px] text-white font-light mt-8">
          Fluidi Group lansoi fondacionin Floil Cares në vitin 2022, me qëllim që të ndihmojë 
          komunitetet në nevojë në Kosovë. Fluidi Group ka punuar tashmë në 4 fushata të ndryshme 
          donacionesh përmes fondacionit Floil Cares duke kontribuar kështu në komunitet dhe është
          duke punuar në mënyrë aktive në realizimin e fushatave të reja bamirësie për të mirën e 
          komuniteteve në nevojë në Kosovë.
        </p> 
        <div className='mt-8'>
          <Link to="/floil-cares" onClick={() => window.scrollTo({top: 0,left: 0})}>
            <button
              className='border-[2px] border-white rounded-md py-2 px-6 text-white font-sans hover:bg-white hover:text-[#848484]'>
                  Shiko më shumë
            </button>
          </Link>
            </div>
      </div>
      <div className="lg:w-1/2 lg:mt-0 relative pb-[100%] lg:pb-[6.25%] 2xl:pb-[35.25%]">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          loop
          muted={isMuted}
          className="absolute inset-0 w-full h-full object-cover"
          onClick={toggleMute}
        >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-5 left-5 transform -translate-x-1/2 -translate-y-1/2">
          <button
            className="text-white"
            onClick={toggleMute}
          >
            {isMuted ? '🔈' : '🔊'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloilCares;
