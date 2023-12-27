import React from 'react'
import bannerVec from "../components/assets/bannerVector.png";
import floilpart from "../components/assets/IMG_01622217.jpg"
import CategoryRecipes from '../components/recipes/CategoryRecipes';

const RecipesPage = () => {
  return (
    <>
        <div className='relative w-full'>
        <img className="w-full h-[40vh] lg:h-[48vh] 2xl:h-[30vh]" src={bannerVec} alt='Banner Vector' />
        <div className="px-4 lg:px-[120px] absolute top-1/2 left-1 transform -translate-y-1/2 text-white">
            <h1 className="text-[32px] font-semibold mt-[-40px]">Receta Gatimi</h1>
            <p className="text-[15px] lg:w-[70%] 2xl:w-[50%] mt-6">
                Me shije të mrekullueshme, pa aromë gjatë gatimit, dhe me vlera të shumta ushqyese, 
                përgatitni receta mahnitëse duke përdorur produktet Floil, me të cilat gatimet tuaja 
                shijojnë më mirë!
            </p>
        </div>
        </div>

        <div className='w-full'>
        <div className='px-4 lg:px-[120px] justify-center items-center flex flex-col lg:flex-row mt-16'>
            <div className='w-full lg:w-1/2 justify-center items-center'>
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
                <img src={floilpart} className='w-full h-full lg:h-96 object-cover rounded-xl' alt="" />
            </div>
        </div>
    </div>

    <CategoryRecipes />
    </>
  )
}

export default RecipesPage