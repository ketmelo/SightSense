import React from 'react'
import Participantes from './Participantes';
import Materiais from "./Materiais";
import Home from "./Home"
import Guia from "./Guia";
import Arduino from "../assets/arduino.png"
import Menu from "../assets/menu.svg"
import Mariana from "../assets/mariana-icon.png"
import Nelson from "../assets/nelson-icon.png"
import Rafaella from "../assets/rafaella-icon.png"
import Ketlyn from "../assets/ketlyn-icon.png"

export default function Ref() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'linear-gradient(to left, #192F43, #6A98C3, #A8CCED, #4685BF, #17446E)',
      }}>

      <div className="w-[90%] bg-white bg-opacity-80 shadow-md p-6 mt-10 rounded-sm mb-5">
        <div className='flex flex-col sm:flex-row items-center'>
          <h1 className="text-4xl sm:text-5xl font-sen mb-4 sm:mb-0 mr-auto mb-0">Sight</h1>
          
          <div className="ml-auto">
            <nav className='w-full sm:w-auto mt-4 sm:mt-0'>
              <ul className='flex justify-end flex-col sm:flex-row sm:space-x-4 justify-end text-lg sm:text-xl font-paytoneone font-bold'>
                <li className="mb-2 sm:mb-0 hidden sm:block"><a href="/">HOME</a></li>
                <li className="mb-2 sm:mb-0 hidden sm:block"><a href="/Guia">GUIA</a></li>
                <li className="mb-2 sm:mb-0 hidden sm:block"><a href="/Materiais">MATERIAIS</a></li>
                <li className="mb-2 sm:mb-0 hidden sm:block"><a href="">PARTICIPANTES</a></li>
                <li className="mb-2 sm:mb-0 hidden sm:block"><a href="/Ref">REF</a></li>
              </ul>
            </nav>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-sen ml-8 mt-0 mb-16 ml-auto">Sense</h1>
        <div className="flex absolute top-10 right-8 m-5"><img src={Menu} alt="Menu." className="block sm:hidden w-full h-auto w-1/6 h-auto ml-auto w-9 h-9"/></div>
        <div className="relative w-full sm:w-[69%]">
        <img src={Mariana} alt="" className="m-auto"/>
          <div className="bg-popup-azul text-white p-6 rounded-md shadow-lg relative mb-32 mx-auto">
            <h1 className='text-white font-paytoneone font-bold text-2xl mb-2'>Mariana Ribeiro</h1>
            <h2 className='text-white font-paytoneone font-bold text-2xl mb-2'>17 anos</h2>
            <p className='text-white font-roboto'>Adoro video games, estudo com dedicação e sou apaixonada por programação back-end. Encontrar soluções para problemas complexos e criar sistemas eficientes me fascina, unindo meu interesse por tecnologia e desafios.</p></div>

            <img src={Rafaella} alt="" className="m-auto"/>
          <div className="bg-popup-azul text-white p-6 rounded-md shadow-lg relative mb-32 mx-auto">
            <h1 className='text-white font-paytoneone font-bold text-2xl mb-2'>Rafaella Silveira</h1>
            <h2 className='text-white font-paytoneone font-bold text-2xl mb-2'>17 anos</h2>
            <p className='text-white font-roboto'>Sou apaixonada por desafios e novas experiências. Sou determinada, proativa e sempre pronta para ajudar os outros. Tenho um interesse especial por banco de dados.</p></div>

            <img src={Nelson} alt="" className="m-auto"/>
          <div className="bg-popup-azul text-white p-6 rounded-md shadow-lg relative mb-32 mx-auto">
            <h1 className='text-white font-paytoneone font-bold text-2xl mb-2'>João Nelson</h1>
            <h2 className='text-white font-paytoneone font-bold text-2xl mb-2'>17 anos</h2>
            <p className='text-white font-roboto'>Gosto muito de ir à academia e de passar tempo com a minha família. Também tenho um grande interesse pela matéria de desenvolvimento de websites.</p></div>

            <img src={Ketlyn} alt="" className="m-auto"/>
          <div className="bg-popup-azul text-white p-6 rounded-md shadow-lg relative mb-32 mx-auto">
            <h1 className='text-white font-paytoneone font-bold text-2xl mb-2'>Ketlyn Melo</h1>
            <h2 className='text-white font-paytoneone font-bold text-2xl mb-2'>17 anos</h2>
            <p className='text-white font-roboto'>Sou Ketlyn, gosto muito de livros e de conhecer o mundo. Sou apaixonada por Lógica de programação.</p></div>

            
            </div>
          </div>
          </div>                  
  )
}
