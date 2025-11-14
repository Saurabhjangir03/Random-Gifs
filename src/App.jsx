import { useState } from "react"
import { Header } from "./components/Header"
import { Random } from "./components/Random"
import { Tag } from "./components/Tag"


export default function App() {
 const [loading,setloading] =  useState(false);
  

return (
  <div className="min-h-screen bg-slate-500 pt-8 pb-8">
    <Header/>
    <Random loading= {loading}  setloading= {setloading}/>
    <Tag/>
  </div>
)

}
