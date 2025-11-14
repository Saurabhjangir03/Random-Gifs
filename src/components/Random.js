import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Spinner } from './Spinner';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
export const Random = ({loading,setloading}) => {

console.log(API_KEY);

 const [gif,setgif]  = useState(" ");

async function getgif(params) {
  setloading(true);
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
     const res= await axios.get(url);
     const finalres = res.data.data.images.downsized.url;
     setgif(finalres);
     setloading(false);
}
useEffect(() =>{
  getgif(); 
},[])
function handler(params) { 
   getgif();
}
  return (
    <div className='border-2 border-gray-400 rounded-xl w-1/2 bg-green-400 mx-auto mt-8'>
    <div className=' flex flex-col justify-center items-center '>
       <h1 className='font-bold text-xl underline mt-3'>A RANDOM GIF</h1>
       {
        loading ? (<Spinner/>) : (<img className='mt-5 mb-5' src={gif} alt='440'/>)
       }
        <button
        className='uppercase font-semibold text-xl w-4/5 bg-white/70 rounded-xl py-2 mb-4 hover:bg-white transition-all 0.4s'
         onClick={handler}>generate</button> 
          </div>
    </div>
  )
}
