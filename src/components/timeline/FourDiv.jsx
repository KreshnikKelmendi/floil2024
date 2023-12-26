import React from 'react'
import floilImazh from "../assets/Imazh.png"
import floilImazh2 from "../assets/floil2023.png"

const FourDiv = () => {
  return (
    <>
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2 flex">
        <img src={floilImazh} alt="floilOil" className="w-full object-cover" />
      </div>
      <div className="py-4 px-4 lg:px-[70px] lg:w-1/2 flex bg-[#F3C24E] text-white justify-center items-center">
        <div>
          <h2 className="text-[28.6px] font-sans font-semibold mb-2">Gatuaj me më të mirin!</h2>
          <p className="text-[13px] w-full mt-8">
             Përveç vlerave të larta ushqyese, vaji i lulediellit Floil është i njohur edhe për 
             shijen e tij të lehtë dhe delikate, gjë që e bën atë një zgjedhje ideale për gatim. 
             Është gjithashtu një opsion buxhetor, duke e bërë atë të qasshëm për një gamë të gjerë 
             të konsumatorëve
          </p>
          <button className="mt-8 border-[2px] hover:bg-white hover:text-[#249A70] border-white px-[12px] py-[8px] text-white rounded-md font-semibold">Shiko produktin</button>
        </div>
      </div>
    </div>

    <div className="flex flex-col lg:flex-row">
      <div className="px-4 lg:px-[70px] lg:w-1/2 flex justify-center flex-col font-sans">
        <div>
        <h2 className="mt-4 text-[28.6px] text-[#434343] mb-2 font-semibold lg:mt-8 2xl:mt-16">Ideal për çdo gatim!</h2>
        <p className="text-[13px] text-[#848484] font-light mt-8">
            Vaji i lulediellit Floil është një vaj shumëpërdorimësh dhe i shëndetshëm 
            që është i përsosur për të gjitha gatimet tuaja të preferuara. Pavarësisht 
            nëse jeni duke skuqur, pjekur, kaurdisur ose duke bërë një marinim sallate, 
            vaji i lulediellit Floil është një zgjedhje e shkëlqyer për disa arsye. 
            Një nga avantazhet kryesore të vajit të lulediellit Floil është pika e tij 
            e lartë e tymosjes, që do të thotë se mund të nxehet në temperatura të larta 
            pa u djegur dhe pa aromë. Kjo e bën atë ideal për fërgim dhe pjekje, pasi nuk 
            do të prishet dhe nuk do të krijojë komponime të dëmshme. Për më tepër, vaji i 
            lulediellit Floil ka një aromë neutrale, që do të thotë se nuk do të mposhtë 
            shijen e ushqimit tuaj.
        </p>
        <button className="mt-8 border-[2px] hover:bg-[#434343] hover:text-white border-[#434343] px-[12px] py-[8px] text-[#434343] rounded-md font-semibold">Shiko produktin</button>
</div>
      </div>
      <div className="lg:w-1/2 mt-4 lg:mt-0">
        <img src={floilImazh2} alt="" className="w-full h-auto" />
      </div>
    </div>
    </>
  )
}

export default FourDiv