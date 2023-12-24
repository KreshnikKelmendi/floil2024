import React from 'react'
import bannerVec from "../assets/bannerVector.png"

const Contact = () => {
  return (
    <div className='relative w-full'>
      <img className="w-full h-[40vh] lg:h-[48vh] 2xl:h-[30vh]" src={bannerVec} alt='Banner Vector' />
      <div className="px-4 lg:px-[120px] absolute top-1/2 left-1 transform -translate-y-1/2 text-white">
        <h1 className="text-[32px] font-semibold mt-[-50px]">Kontakti</h1>
        <p className="text-[15px] lg:w-[70%] 2xl:w-[50%] mt-6">
            Në Floil jemi përherë vigjilent ndaj kërkesave të klientëve dhe partnerëve tanë dhe 
            kujdesemi që t'i trajtojmë ato me korrektësi të plotë. Për çdo pyetje apo kërkesë që 
            keni rreth rafinerisë tonë apo produkteve tona mund të plotësoni formularin e bashkangjitur 
            më poshtë, duke shënuar të dhënat tuaja dhe ne do ju kontaktojmë sapo të shqyrtojmë mesazhin tuaj.
        </p>
      </div>
    </div>
  )
}

export default Contact