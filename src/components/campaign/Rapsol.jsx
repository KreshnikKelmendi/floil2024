import React from 'react';
import rapsolImage from "../assets/oilFloil.png";
import { products } from '../../data/products';
import { Link } from 'react-router-dom';

const Rapsol = () => {
  const secondProduct = products[1]
  return (
    <div className="flex">
      <div className="w-1/2 flex">
        <img src={rapsolImage} alt="Rapsol" className="w-full object-cover" />
      </div>
      <div className="py-4 px-4 lg:px-[70px] w-1/2 flex bg-[#249A70] text-white justify-center items-center">
        <div>
          <h2 className="text-[26.6px] font-semibold mb-2">Vaji Rapsol</h2>
          <p className="text-[13px] lg:w-[80%] mt-8">
            Vaji Rapsol, i njohur si Rapeseed apo Canola oil, njihet si vaji më i shëndetshëm nga të gjitha vajrat për pjekje dhe gatim.
          </p>
          <Link to={`/produktet-tona/${secondProduct.id}`} onClick={() => window.scrollTo({top: 0,left: 0})}>
            <button className="mt-8 bg-[#249A70] border-[2px] hover:bg-white hover:text-[#249A70] border-white px-[12px] py-[8px] text-white rounded-md font-semibold">Shiko produktin</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Rapsol;
