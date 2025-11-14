import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Spinner } from './Spinner';
const API_KEY= process.env.REACT_APP_GIPHY_API_KEY;

export const Tag = () => {
  const[gif,setgif] = useState("");
  const [tag,settag] = useState("Cat");
 const [loading,setloading] =  useState(false);

  async function taggetgif(params) {
      setloading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
      const res = await axios.get(url);
      const finalres = res.data.data.images.downsized.url;
      setgif(finalres);
      setloading(false);
  }
  useEffect(()=>{
 taggetgif()
  } ,[])
  function secondhandler(params) {
    taggetgif();
  }

  return (
    <div className='w-1/2 border-2 border-gray-400 rounded-xl  bg-blue-800 mx-auto mt-8 flex justify-center items-center flex-col '>
  <h1 className='font-bold text-xl underline mt-3 uppercase'>random {tag} gif</h1>
  {
    loading ? (<Spinner/>) : (<img className='mt-5 mb-5' src={gif} alt='123'/>)
  }
  <div className=' flex flex-col gap-3 justify-center items-center w-full '>
  <input
   className='w-10/12 text-center py-2 rounded-xl '
   onChange={(event)=> {settag(event.target.value)}}
   value={tag}/>
  <button
   className=' w-10/12 bg-white/70 py-2 hover:bg-white transition-all 0.4s font-semibold  text-xl uppercase  rounded-xl mb-4  '
  onClick={secondhandler}
  >generate</button> 
  </div>
  
    </div>
    

  )
}
