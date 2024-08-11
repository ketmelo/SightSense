import React from 'react'
import Participantes from './Participantes';
import Materiais from "./Materiais";
import Home from "./Home"
import Guia from "./Guia";

export default function Ref() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center"
    style={{
      backgroundImage: 'linear-gradient(to left, #192F43, #6A98C3, #A8CCED, #4685BF, #17446E)', }}>
       <div className="w-[90%] bg-white  bg-opacity-80  shadow-md p-6 mt-10">
        <div className='flex items-center'>
              <h1 className="text-5xl font-sen mr-44 ml-4">Sight</h1>
              
              <nav className='ml-4'>
                  <ul className='flex space-x-4 ml-60 text-xl font-paytoneone font-bold'>
                  <li><a href="/" >HOME</a></li>
                  <li><a href="/Guia">GUIA</a></li>
                  <li><a href="/Materiais" >MATERIAIS</a></li>
                  <li><a href="/Participantes" >PARTICIPANTES</a></li>
                  <li><a href="">REF</a></li>     
                  </ul>
              </nav>
          </div>
          <h1 className="text-5xl font-sen ml-8 mb-32">Sense</h1>
        </div>
      
    </div>
  )
}
