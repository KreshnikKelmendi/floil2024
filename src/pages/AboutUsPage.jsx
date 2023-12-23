import React from 'react'
import bannerVec from "../components/assets/bannerVector.png"
import floilPart from "../components/assets/rectangle17.png"
import HorizontalTimeline from '../components/timeline/HorizontalTimeline'

const AboutUsPage = () => {
  return (
    <>
    <div className='relative w-full'>
      <img className="w-full h-[40vh] lg:h-[48vh] 2xl:h-[30vh]" src={bannerVec} alt='Banner Vector' />
      <div className="px-4 lg:px-[120px] absolute top-1/2 left-1 transform -translate-y-1/2 text-white">
        <h1 className="text-[32px] font-semibold mt-[-50px]">Historiku</h1>
        <p className="text-[15px] lg:w-[70%] 2xl:w-[50%] mt-6">
             Produkti vendor, vaji Floil, ka pasur një sukses të madh në shitje dhe eksport që nga 
             plasimi i tij në treg më 2017. Përveç eksportit dhe shitjes masive brenda Kosovës dhe 
             rajonit, Floil eksportohet edhe jashtë kontinentit të Evropës. Rafineria Floil krenarisht 
             e mban titullin si rafineria e vetme në rajon që bën rafinimin 100% të vajit të lulediellit 
             dhe suksesi i saj flet përmes nivelit të shitjes dhe eksportit që performon në botë.
        </p>
      </div>
    </div>

    <div className='w-full'>
        <div className='px-4 lg:px-[120px] justify-center items-center flex flex-col lg:flex-row mt-16'>
            <div className='w-full lg:w-1/2 justify-center items-center'>
                <p className='text-[35px] leading-10 text-[#434343] font-sans font-semibold 2xl:w-[70%]'>Produkte vendore me shitje botërore</p>
                <p className='text-[15px] mt-6 text-[#848484] 2xl:w-[90%]'>
                   Në vitin 2017 Floil plasoi në treg vajin e lulediellit dhe gjalpin Floil, duke vazhduar 
                   me produktin e ri vajin rapsol në vitin 2022.
                   
                   Floil tani punëson 148 punëtorë dhe përveç suksesit të madh me shitjen brenda Kosovës, 
                   tani eksporton edhe jashtë vendit dhe kontinentit të Evropës.
                   
                   Floil mbulon 100% të tregut vendor dhe 40% të tregut në Shqipëri dhe po ashtu eksporton 
                   rregullisht edhe në Irlandë, Suedi, Maqedoni, Mal të Zi, Finlandë, Norvegji, Austri, 
                   Gjermani, Amerikë dhe Lindje të Mesme, një dëshmi e cilësisë së produkteve tona dhe 
                   efektivitetit të strategjive të prodhimit dhe shpërndarjes.
                </p>
            </div>
            <div className='w-full lg:w-1/2 justify-center items-center mt-8 lg:mt-0 lg:ml-6 '>
                <img src={floilPart} className='w-full h-full lg:h-96 object-cover rounded-xl' alt="" />
            </div>
        </div>
    </div>

    <HorizontalTimeline />
    </>
  )
}

export default AboutUsPage