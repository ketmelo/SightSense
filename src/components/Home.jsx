import React from "react";
import caraAzul from '../assets/caraAzul.png';
import lampada from '../assets/lampada.png';
import meninaLousa from '../assets/meninaLousa.png'
import Participantes from './Participantes';
import Guia from "./Guia";
import Materiais from "./Materiais"
import Ref from "./Ref"

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'linear-gradient(to left, #192F43, #6A98C3, #A8CCED, #4685BF, #17446E)', }}>

      <div className="w-[90%] bg-white  bg-opacity-80  shadow-md p-6 mt-10">
        <div className='flex items-center'>
              <h1 className="text-5xl font-sen mr-44 ml-4">Sight</h1>
              
              <nav className='ml-4'>
                  <ul className='flex space-x-4 ml-60 text-xl font-paytoneone font-bold'>
                  <li><a href="" >HOME</a></li>
                  <li><a href="/Guia">GUIA</a></li>
                  <li><a href="/Materiais" >MATERIAIS</a></li>
                  <li><a href="/Participantes" >PARTICIPANTES</a></li>
                  <li><a href="/Ref">REF</a></li>     
                  </ul>
              </nav>
          </div>
          <h1 className="text-5xl font-sen ml-8 mb-32">Sense</h1>
          <div className='ml-12'>
            <h1 className='text-4xl font-roboto font-bold h-28 w-56 flex items-center justify-center '>“As adversidades são oportunidades para mostrar do que somos feito.”</h1>
            <p className='text-lg font-roboto font-bold w-96 mt-24 mb-16'>Um projeto que visa atender a necessidade daqueles impossibilitados por algum obstáculo, com muita dedicação e esforço.</p>
          </div>  
      </div>


      <div className="w-[90%] bg-popup-azul shadow-md p-4 flex items-center">
        <p className='font-roboto text-white text-lg font-bold ml-4'>O SightSense é um projeto inovador que ajuda pessoas com dificuldades visuais a se orientarem em ambientes desconhecidos. Ele usa sensores no local para mapear e identificar objetos, transmitindo essas informações a um controle portátil. O controle fornece orientações em tempo real por meio de áudio e vibração.</p>
        <img src={caraAzul} alt="" className='ml-56 h-56 mr-4 ' />
      </div>



      <div className="w-[90%] bg-white shadow-md p-4 flex items-center ">
        <img src={lampada} alt="" className="mr-56 h-56" />
        <p className="font-roboto text-lg font-bold">O SightSense se destaca pela integração de vários sensores para fornecer informações personalizadas sobre o ambiente, algo único entre dispositivos de auxílio. Sua adaptabilidade a diferentes ambientes, tanto residenciais quanto comerciais, facilita a navegação independente e segura dos usuários.</p>
      </div>



      <div className="w-[90%] bg-popup-azul shadow-md p-4 flex items-center mb-10">
        <p className="font-roboto text-white text-lg font-bold">O SightSense visa ajudar pessoas com deficiência visual a se movimentarem com confiança em novos ambientes, promovendo sua inclusão e independência. O projeto busca melhorar a qualidade de vida dessas pessoas, permitindo que explorem o mundo ao seu redor com maior liberdade e segurança.</p>
        <img src={meninaLousa} alt="" className="ml-56 h-56 mr-4" />
      </div>
    </div>



  );
};

export default Home;
