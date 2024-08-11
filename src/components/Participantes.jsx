import React from 'react'
import Guia from "./Guia";
import Home from "./Home"
import Ref from "./Ref"
import Materiais from "./Materiais";
import Mariana from "../assets/mariana-icon.png"
import Nelson from "../assets/nelson-icon.png"
import Rafaella from "../assets/rafaella-icon.png"
import Ketlyn from "../assets/ketlyn-icon.png"

 function Participantes() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center"
    style={{
      backgroundImage: 'linear-gradient(to left, #192F43, #6A98C3, #A8CCED, #4685BF, #17446E)', }}>
       <div className=" relative w-[90%] bg-white  bg-opacity-80  shadow-md p-6 mt-10 mb-10">
        <div className='flex items-center'>
              <h1 className="text-5xl font-sen mr-44 ml-4">Sight</h1>
              
              <nav className='ml-4'>
                  <ul className='flex space-x-4 ml-60 text-xl font-paytoneone font-bold'>
                  <li><a href="/" >HOME</a></li>
                  <li><a href="/Guia">GUIA</a></li>
                  <li><a href="/Materiais" >MATERIAIS</a></li>
                  <li><a href="" >PARTICIPANTES</a></li>
                  <li><a href="/Ref">REF</a></li>     
                  </ul>
              </nav>
          </div>
          <h1 className="text-5xl font-sen ml-8 mb-20">Sense</h1>
          

            <div className='space-y-4 relative'>
              <div className="w-[69%] bg-popup-azul stext-white p-4 rounded-md shadow-lg relative mb-32 ml-20 ">
              <img src={Mariana} alt="" className='absolute top-1/2 left-[-40px] transform -translate-y-1/2 w-44 h-44'/>
              <h1 className='ml-32 text-white font-paytoneone font-bold text-lg'>Mariana Ribeiro</h1>
              <h2 className='ml-32 text-white font-paytoneone font-bold text-lg'>17 anos</h2>
              <p className='ml-32 text-white font-roboto'>Adoro video games, estudo com dedicação e sou apaixonada por programação back-end. Encontrar soluções para problemas complexos e criar sistemas eficientes me fascina, unindo meu interesse por tecnologia e desafios.</p>

            </div>
          </div>


          <div className='space-y-4 relative'>
              <div className="w-[69%] bg-popup-azul stext-white p-4 rounded-md shadow-lg relative mb-32 ml-20 ">
              <img src={Rafaella} alt="" className='absolute top-1/2 left-[-40px] transform -translate-y-1/2 w-44 h-44'/>
              <h1 className='ml-32 text-white font-paytoneone font-bold text-lg'>Rafaella Silveira</h1>
              <h2 className='ml-32 text-white font-paytoneone font-bold text-lg'>17 anos</h2>
              <p className='ml-32 text-white font-roboto'>Sou apaixonada por desafios e novas experiências. Sou determinada, proativa e sempre pronta para ajudar os outros. Tenho um interesse especial por banco de dados.</p>

            </div>
          </div>

          


          
          <div className='space-y-4 relative'>
              <div className="w-[69%] bg-popup-azul stext-white p-4 rounded-md shadow-lg relative mb-32 ml-20 ">
              <img src={Nelson} alt="" className='absolute top-1/2 left-[-40px] transform -translate-y-1/2 w-44 h-44'/>
              <h1 className='ml-32 text-white font-paytoneone font-bold text-lg'>João Nelson</h1>
              <h2 className='ml-32 text-white font-paytoneone font-bold text-lg'>17 anos</h2>
              <p className='ml-32 text-white font-roboto '>Gosto muito de ir à academia e de passar tempo com a minha família. Também tenho um grande interesse pela matéria de desenvolvimento de websites.</p>

            </div>
          </div>



          <div className='space-y-4 relative'>
              <div className="w-[69%] bg-popup-azul stext-white p-7 rounded-md shadow-lg relative mb-32 ml-20 ">
              <img src={Ketlyn} alt="" className='absolute top-1/2 left-[-40px] transform -translate-y-1/2 w-44 h-44'/>
              <h1 className='ml-32 text-white font-paytoneone font-bold text-lg'>Ketlyn Melo</h1>
              <h2 className='ml-32 text-white font-paytoneone font-bold text-lg'>17 anos</h2>
              <p className='ml-32 text-white font-roboto'>Sou Ketlyn, gosto muito de livros e de conhecer o mundo. Sou apaixonada por Lógica de programação.</p>

            </div>
          </div>
        </div>
        
        
      
    </div>
  )
}

export default Participantes;


