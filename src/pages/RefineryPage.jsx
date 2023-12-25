import React, { useRef, useState } from 'react'
import uzina from "../components/assets/rafinery.png"
import rafineryVideo from "../components/assets/rafineryVideo.mp4"
import neutralizimi from "../components/assets/process1.png"
import secondProcess from "../components/assets/secondProcess.png"
import { motion, AnimatePresence } from 'framer-motion';

const RefineryPage = () => {
    const videoRef = useRef(null);
    const [showMore, setShowMore] = useState(false);
    const [showMore2, setShowMore2] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  const handleToggle2 = () => {
    setShowMore2(!showMore2);
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
      <div className="lg:w-1/2 px-4 lg:px-0">
      <video
          ref={videoRef}
          autoPlay
          playsInline
          loop
          muted={isMuted}
          className=" w-full lg:h-[100%]"
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
<hr className='lg:hidden mt-10 mx-4 bg-[#F3C24E]' />
    <div className='w-full mt-10 lg:mt-20 justify-center items-center font-sans lg:px-[120px] px-4'>
        <div className=''>
         <p className='text-[35.6px] uppercase font-semibold text-[#434343]'>Procesi i rafinimit</p>
        </div>
        <div className='flex flex-col lg:flex-row mt-[39px]'>
        <div className='lg:w-1/2'>
            <p className='text-[15px] text-[#848484]'>Rafinimi si teknikë kërkon të ruajë komponentë të dobishëm si vitamina E dhe antioksidantë 
               natyralë në vend që të largojë ndotësit dhe elementet e tjera të padëshiruara.
               <br /> <br />
               Përveç angazhimit tonë për cilësinë dhe qëndrueshmërinë, rafineria Floil vendos gjithashtu 
               një theks të veçantë tek inovacioni dhe përmirësimi i vazhdueshëm. Ne investojmë rregullisht 
               për t’u siguruar që produktet tona plotësojnë nevojat dhe preferencat në zhvillim të klientëve 
               tanë. Ekipi ynë i teknikëve punojnë pareshtur për të optimizuar procesin e prodhimit dhe për të
                siguruar që makineritë tona të funksionojnë gjithmonë me efikasitet maksimal.
            </p>
        </div>
        <div className='lg:w-1/2 lg:ml-24'>
            <p className='text-[15px] text-[#848484] mt-6 lg:mt-0'>
                Procesi i rafinimit është procesi i pastrimit që nënkupton heqjen e substancave 
                të panevojshme nga vaji i parafinuar si: heqja e acideve yndyrore të lira (FFA), 
                fosfolipideve, joneve metalike, pigmenteve, dylleve, metaleve gjurmë, heqjes së 
                hidrokarbureve aromatike dhe ujit. Rafinimi si proces synon jo vetëm të heqë 
                papastërtitë dhe materialet e tjera të padëshiruara, por më tepër synon ruajtjen 
                e komponentëve të vlefshëm si: Vitamina E dhe antioksidantë natyralë. Në procesin 
                e rafinimit, përveç arritjes së qëllimit për të dalë në treg me një vaj më cilësor, 
                kemi edhe nënprodukte si acide yndyrore të larta, dyllë dhe sendiment. Procesi i 
                rafinimit ndahet në katër faza: Neutralizimi dhe deguminimi, Zbardhimi, Kristalizimi 
                dhe Deodorizimi.
            </p>
        </div>
        </div>
    </div>
<hr className='lg:hidden mt-10 mx-4 bg-[#F3C24E]'/>
    <div className='w-full mt-10 lg:mt-20 flex flex-col lg:flex-row lg:px-[120px] px-4 justify-center items-center'>
        <div className='lg:w-1/2 font-sans'>
            <p className='text-[#434343] text-[35px] font-semibold leading-9'>Neutralizimi dhe Deguminimi</p>
            <p className='text-[#848484] text-[15px] mt-[39px] '>Ky proces nënkupton heqjen e përbërësve të tepërt dhe të panevojshëm nga vaji i parafinuar. Në këtë fazë ne fillimisht përdorim acidin fosforik për të reaguar me fosfatide, më pas këto fosfatide të lidhura me acidin fosforik neutralizohen me hidroksid natriumi, i cili gjithashtu lidh acidet yndyrore të lira (acidi oleik).</p>
            <AnimatePresence>
          {showMore && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className='text-[#848484] text-[15px]'
            >
              Hapi tjetër në fazën e neutralizimit është trajtimi me acid citrik, duke mundësuar lidhjen metale të rënda, largimin e pesticideve, si dhe kryhet një pastrim vaji. I gjithë procesi kryhet në një temperaturë prej 85-90 0C duke rritur shpejtësinë e reaksioneve gjatë procesit të neutralizimit. Ky proces kryhet në vakum me presion 30 mbar dhe kjo ndikon në largimin e ujit dhe aromave.
            </motion.p>
          )}
        </AnimatePresence>
        <motion.button
          className='underline text-[#F3C24E] mt-6 font-semibold'
          onClick={handleToggle}
          whileHover={{ scale: 1.1 }}
        >
          {showMore ? 'Më pak' : 'Më shumë'}
        </motion.button>
        </div>
        <div className='lg:w-1/2 lg:pl-12 mt-6 lg:mt-0'>
            <img src={neutralizimi} alt='' className='rounded-2xl object-cover' />
        </div>
    </div>
<hr className='lg:hidden mt-10 mx-4 bg-[#F3C24E]' />
    <div className='w-full'>
        <div className='flex flex-col justify-center items-center px-4 lg:flex-row lg:px-[120px] mt-10 lg:mt-20'>
            <div className='lg:w-1/2'>
                <img src={secondProcess} alt='rounded-2xl' className='rounded-2xl object-cover' />
            </div>

            <div className='lg:w-1/2 lg:pl-12 mt-6 lg:mt-0'>
                <p className='text-[#434343] text-[35px] font-semibold leading-9'>Zbardhimi</p>
                <p className='mt-[39px] text-[15px] text-[#848484]'>
                   Zbardhimi është një proces i heqjes së ngjyrës së vajit dhe disa përbërësve të 
                   tjerë të padëshiruar në vajin ushqimor si sapunët, fosfatidet dhe papastërtitë e 
                   ndryshme. Për të hequr ngjyrën e vajit ne përdorim zbardhues me veti adsorbuese i 
                   cili lidh pigmentet e vajit dhe më pas në procesin e filtrimit hiqen ngjyrat dhe 
                   përbërësit e tjerë.
                </p>
                <AnimatePresence>
          {showMore2 && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className='text-[#848484] text-[15px]'
            >
                Ky proces kryhet në një temperaturë prej 85-90 °C që mundëson rritjen e shpejtësisë së reaksionit dhe i gjithë procesi kryhet në vakum, 30 mbar, gjë që ndikon në largimin e ujit dhe aromave. Vaji që përpunohet hyn në dy filtrat alternativë në fletët e filtrit për t'u filtruar. Vaji i filtruar më pas hyn në fazën e kristalizimit përmes polish filtrave.
            </motion.p>
          )}
        </AnimatePresence>
        <motion.button
          className='underline text-[#F3C24E] mt-6 font-semibold'
          onClick={handleToggle2}
          whileHover={{ scale: 1.1 }}
        >
          {showMore ? 'Më pak' : 'Më shumë'}
        </motion.button>
            </div>
        </div>
    </div>
<hr className='lg:hidden mt-10 mx-4 bg-[#F3C24E]' />
    <div className='w-full'>
        <div className='flex flex-col lg:flex-row lg:px-[120px] px-4 mt-10 lg:mt-20'>
            <div className='lg:w-1/2'>
                <p className='text-[#434343] text-[35px] font-semibold'>Deodorizimi</p>
                <p className='text-[#848484] text-[15px] mt-[39px]'>
                    Një fazë tjetër e rafinimit është deodorizimi dhe me të drejtë thuhet se deodorizimi 
                    ka një ndikim të madh në cilësinë e vajit të rafinuar dhe shpesh konsiderohet si zemra 
                    e të gjithë metodologjisë së përpunimit të vajit ushqimor. Është një proces i cili kryhet 
                    deri në një temperaturë prej 230 ℃ në vakum 2 mbar dhe është një proces i heqjes së të 
                    gjitha aromave, ujit dhe përbërësve të tjerë të padëshiruar. Vaji i nënshtrohet avull 
                    të terur në temperaturë të lartë dhe vakum 2 mbar për të larguar të gjitha substancat 
                    me aromatikedhe ne kombinim te vakumit dhe temperaturave të lartaprocesi i deodorizimit 
                    do të largojë aromat e vajit, pigmenteve të ndjeshme ndaj nxehtësisë dhe acideve yndyrore 
                    të lira.
                </p>
            </div>

            <div className='lg:w-1/2 lg:pl-12 mt-6 lg:mt-0'>
                <p className='text-[#434343] text-[35px] font-semibold'>Kristalizimi</p>
                <p className='text-[#848484] text-[15px] mt-[39px]'>Kristalizimi është një proces që kryhet në një temperaturë të ulët deri në 4℃. Këto 
                    temperatura ndikojnë në lidhjen e dyllit me substancat kristalizuese të cilat më pas 
                    kalojnë nëpër fletët filtruese ku qëndron dylli, ndërsa vaji kalon përmes polish 
                    filterave në fazën tjetër të procesit të trajtimit.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default RefineryPage