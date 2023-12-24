import React, { useRef, useState } from 'react'
import uzina from "../components/assets/rafinery.png"
import rafineryVideo from "../components/assets/rafineryVideo.mp4"

const RefineryPage = () => {
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
    <div className=" mt-8 lg:mt-16">
        <div className="text-center font-sans">
          <p className='text-[20px] leading-[48px] text-[#434343]'>
            <span className='font-sans1 text-[45px] lg:text-[68.6px] text-[#249A70]'>Rafineria</span> e vetme vendore.
          </p>
          <p className='font-sans px-4 lg:px-0 lg:w-[510px] mx-auto mt-6 text-[12.258px] text-[#848484]'>
             Ndërtimi i objekteve të rafinerisë Floil është bërë në kuadër të Shoqërisë "FLUIDI" SH.P.K, 
             me makineri dhe pajisje për procesin e rafinimit deri në analizat laboratorike si kimike ashtu 
             dhe fizike si dhe analiza mikrobiologjike që garantojnë një cilësi të lartë të produktit.
          </p>
          <img className='w-full object-cover mt-6' src={uzina} alt='' />
        </div>
    </div>

    <div className="flex flex-col lg:flex-row lg:px-[120px] mt-20">
      <div className="lg:w-1/2">
      <video
          ref={videoRef}
          autoPlay
          playsInline
          loop
          muted={isMuted}
          className=" w-full lg:h-[80vh] 2xl:h-[60vh]"
          onClick={toggleMute}
        >
          <source src={rafineryVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative lg:mt-[-50px] 2xl:mt-[-100px] mt-[-25px] lg:ml-5 2xl:ml-24">
          <button
            className="text-white"
            onClick={toggleMute}
          >
            {isMuted ? '🔈' : '🔊'}
          </button>
          </div>
      </div>
      <div className="py-4 px-4 lg:w-1/2 flex text-[#434343] justify-center items-center">
        <div>
          <p className="text-[35.6px] w-full font-semibold lg:ml-8 leading-10 mb-2">Teknologjia moderne e rafinerisë <span className='text-[#F3C24E]'>Floil</span></p>
          <p className="text-[15px] mt-8 lg:ml-8 w-full text-[#848484]">
          Efikasiteti i rafinerisë Floil arrihet nëpërmjet një makinerie të automatizuar dhe të ndjeshme italo-gjermane të teknologjisë moderne, duke e bërë atë fabrikën lider të rafinimit për nga cilësia në rajonin e Ballkanit.
          <br /> <br />Teknologjia e aplikuar nga rafineria Floil redukton kimikatet me më shumë se 30%, duke pasur një ndikim të drejtpërdrejtë në rritjen e cilësisë së produktit. Makineritë dhe pajisjet në procesin e rafinimit deri në testet laboratorike, kimike dhe fizike, si dhe mikrobiologjike, mbrojnë një cilësi të lartë produkti. Rafineria përdor një minimum avulli dhe karburanti, duke kontribuar në ruajtjen e ajrit dhe mjedisit.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default RefineryPage