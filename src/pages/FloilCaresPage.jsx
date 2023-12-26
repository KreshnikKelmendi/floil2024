import React, { useRef, useState } from 'react'
import bannerVectorFloilCares from "../components/assets/blueVectorPng.png"
import videoSource from "../components/assets/FINAL.mp4"
import CaresActivity from '../components/floilCares/CaresActivity';
import Activity from '../components/floilCares/Activity';

const FloilCaresPage = () => {
    const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };
    
  return (
    <>
    <div className='relative w-full'>
      <img className="w-full h-[40vh] lg:h-[48vh] 2xl:h-[30vh]" src={bannerVectorFloilCares} alt='Banner Vector' />
      <div className="px-4 lg:px-[120px] mt-[-20px] font-sans2 absolute top-1/2 left-1 transform -translate-y-1/2 text-white">
        <p>Floil Cares</p>
        <h1 className="text-[32px]">RRETH FONDACIONIT</h1>
        <p className="text-[15px] font-sans lg:w-[70%] 2xl:w-[50%] mt-6">
            FLOIL KA PASUR NJË NDIKIM TË RËNDËSISHËM NË VEND PËRMES FONDACIONIT FLOIL CARES. 
            FONDACIONI ËSHTË THEMELUAR NË VITIN 2022 ME QËLLIM TË KRIJIMIT TË FUSHATAVE BAMIRËSE 
            QË NDIHMOJNË KOMUNITETET NË NEVOJË NË KOSOVË. QË NGA KRIJIMI I TIJ NË VITIN 2022, FLOIL 
            KA KRIJUAR FUSHATA TË NDRYSHME BAMIRËSIE QË NDIHMOJNË KOMUNITETET E NDRYSHME NË NEVOJË NË KOSOVË.
        </p>
      </div>
    </div>
   
    <div className="flex flex-col px-4 lg:px-[120px] lg:flex-row mt-20 relative">
      <div className="lg:py-16 lg:w-1/2 font-sans">
        <p className="text-[42px] text-black font-sans2 mb-2">KAMPANJA 1 CENT NË TV</p>
        <p className="text-[15px] text-[#434343] font-light mt-8 w-[90%] font-sans ">
             Për nder të kampanjës bamirëse "1 cent - Dhuro pak, ndihmo shumë!" që Fluidi Group 
             ndërmori përmes fondacionit Floil Cares u realizuan reklama të ndryshme televizive 
             që kishin për synim ndërgjegjësimin më të gjerë rreth kampanjës.
        </p> 
        <div className='mt-8'>
          <button
            className='border-[2px] border-white rounded-md py-2 px-6 text-white font-sans'>
                Shiko me shume
            </button>
            </div>
      </div>
      <div className="lg:w-1/2 lg:mt-0 relative pb-[100%] lg:pb-[6.25%] 2xl:pb-[35.25%]">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          loop
          muted={isMuted}
          className="absolute inset-0 w-full h-80 2xl:h-96 object-cover rounded-xl"
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

    <CaresActivity />
    <Activity />
    </>
  )
}

export default FloilCaresPage