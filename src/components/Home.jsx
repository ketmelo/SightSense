import React from "react";
import caraAzul from '../assets/caraAzul.png';
import lampada from '../assets/lampada.png';
import globo from '../assets/globo.png';
import meninaLousa from '../assets/meninaLousa.png';
import Menu from "../assets/menu.svg"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'linear-gradient(to left, #192F43, #6A98C3, #A8CCED, #4685BF, #17446E)',
      }}>

      <div className="w-[90%] bg-white bg-opacity-80 shadow-md p-6 mt-10 rounded-sm">
        <div className='flex flex-col sm:flex-row items-center'>
          <h1 className="text-4xl sm:text-5xl font-sen mb-4 sm:mb-0 mr-auto mb-0">Sight</h1>
          
          <div className="ml-auto">
            <nav className='w-full sm:w-auto mt-4 sm:mt-0'>
              <ul className='flex justify-end flex-col sm:flex-row sm:space-x-4 justify-end text-lg sm:text-xl font-paytoneone font-bold'>
                <li className="mb-2 sm:mb-0 hidden sm:block"><a href="">HOME</a></li>
                <li className="mb-2 sm:mb-0 hidden sm:block"><a href="/Guia">GUIA</a></li>
                <li className="mb-2 sm:mb-0 hidden sm:block"><a href="/Materiais">MATERIAIS</a></li>
                <li className="mb-2 sm:mb-0 hidden sm:block"><a href="/Participantes">PARTICIPANTES</a></li>
                <li className="mb-2 sm:mb-0 hidden sm:block"><a href="/Ref">REF</a></li>
              </ul>
            </nav>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-sen ml-8 mt-0 mb-16 ml-auto">Sense</h1>
        <div className="flex absolute top-10 right-8 m-5"><img src={Menu} alt="Menu." className="block sm:hidden w-full h-auto w-1/6 h-auto ml-auto w-9 h-9" /></div>

        <div className='ml-4 sm:ml-12'>
          <h1 className='text-3xl sm:text-4xl font-roboto font-bold h-auto w-full sm:w-56 text-center sm:text-left'>
            “As adversidades são oportunidades para mostrar do que somos feitos.”
          </h1>
          <p className='text-base sm:text-lg font-roboto font-bold w-full sm:w-96 mt-8 sm:mt-24 mb-16'>
            Um projeto que visa atender a necessidade daqueles impossibilitados por algum obstáculo, com muita dedicação e esforço.
          </p>
        </div>  
      </div>

      <div className="w-[90%] bg-popup-azul shadow-md p-4 flex flex-col sm:flex-row items-center">
        <p className='font-roboto text-white text-base sm:text-lg font-bold mb-4 sm:mb-0'>
          O SightSense é um projeto inovador que ajuda pessoas com dificuldades visuais a se orientarem em ambientes desconhecidos. Ele usa sensores no local para mapear e identificar objetos, transmitindo essas informações a um controle portátil. O controle fornece orientações em tempo real por meio de áudio e vibração.
        </p>
        <img src={caraAzul} alt="" className='h-40 sm:h-56 mt-4 sm:mt-0 sm:ml-12' />
      </div>

      <div className="w-[90%] bg-white shadow-md p-4 flex flex-col sm:flex-row items-center">
        <img src={lampada} alt="" className="h-40 sm:h-56 mb-4 sm:mb-0 sm:mr-12" />
        <p className="font-roboto text-base sm:text-lg font-bold">
          O SightSense se destaca pela integração de vários sensores para fornecer informações personalizadas sobre o ambiente, algo único entre dispositivos de auxílio. Sua adaptabilidade a diferentes ambientes, tanto residenciais quanto comerciais, facilita a navegação independente e segura dos usuários.
        </p>
      </div>

      <div className="w-[90%] bg-popup-azul shadow-md mb-12 p-4 flex flex-col sm:flex-row items-center">
        <p className="font-roboto text-white text-base sm:text-lg font-bold mb-4 sm:mb-0">
          O SightSense visa ajudar pessoas com deficiência visual a se movimentarem com confiança em novos ambientes, promovendo sua inclusão e independência. O projeto busca melhorar a qualidade de vida dessas pessoas, permitindo que explorem o mundo ao seu redor com maior liberdade e segurança.
        </p>
        <img src={globo} alt="" className="h-40 sm:h-56 mt-4 sm:mt-0 sm:ml-12"/>
      </div>
    </div>
  )
}
