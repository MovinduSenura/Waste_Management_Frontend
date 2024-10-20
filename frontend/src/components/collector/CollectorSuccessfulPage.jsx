import React from 'react'
import './CollectorSuccessfulPage.css'
import successwallpaper from '../../images/success.png'
import { useNavigate } from "react-router-dom";

export default function CollectorSuccessfulPage() {

  const navigate = useNavigate();

  return (
    <div className='relative'>
      <img className="successwallpaper" src={successwallpaper} alt="successwallpaper" />
      <button onClick={() => navigate("/collectormappage")} className=" absolute w-[70%] ml-[15%] mr-[15%] h-16 font-semibold text-lg px-5 py-2 rounded-full bg-[#2F5944] text-white hover:bg-[#214131] transition-all bottom-10">Done</button>
    </div>
  )
}
