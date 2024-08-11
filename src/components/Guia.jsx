import React from 'react'
import Participantes from './Participantes';
import Materiais from "./Materiais";
import Home from "./Home"
import Ref from "./Ref"
import Menina from "../assets/meninaLousa.png"

export default function Guia() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center"
    style={{
      backgroundImage: 'linear-gradient(to left, #192F43, #6A98C3, #A8CCED, #4685BF, #17446E)', }}>
       <div className="w-[90%] bg-white  bg-opacity-80  shadow-md p-6 mt-10 mb-10">
        <div className='flex items-center'>
              <h1 className="text-5xl font-sen mr-44 ml-4">Sight</h1>
              
              <nav className='ml-4'>
                  <ul className='flex space-x-4 ml-60 text-xl font-paytoneone font-bold'>
                  <li><a href="/" >HOME</a></li>
                  <li><a href="">GUIA</a></li>
                  <li><a href="/Materiais" >MATERIAIS</a></li>
                  <li><a href="/Participantes" >PARTICIPANTES</a></li>
                  <li><a href="/Ref">REF</a></li>     
                  </ul>
              </nav>
          </div>
          <h1 className="text-5xl font-sen ml-8 mb-16">Sense</h1>
          <h1 className='flex items-center justify-center font-paytoneone font-bold text-5xl mb-6'>G U I A</h1>
          <img src={Menina} alt="" className='flex items-center justify-center ml-[33%]'/>

          <h2 className='mt-4 mb-4 font-bold text-2xl flex items-center justify-center mb-4'>Um guia de utilização do nosso projeto.</h2>
          <div className='font-roboto font-bold mt-10 mb-10 ml-7'>
          <p className='mt-4 mb-4'> Guia de Utilização do Sistema de Controle para Deficientes Visuais.</p>
          <p className='mt-4 mb-4'>1.	Ligue o controle remoto pressionando o botão de ligar/desligar ver uma luz verde indicando que o controle está ligado.</p>
          <p className='mt-4 mb-4'>2.	Segure o controle remoto na mão com o sensor voltado para frente e pressione o botão de busca.</p>
          <p className='mt-4 mb-4'>3.	O controle emitirá um som contínuo e dirá quais objetos mais próximos num raio de 4m e sua direção.</p>
          <p className='mt-4 mb-4'>4.	Mova-se lentamente na direção desejada indicada pelo controle.</p>
          <p className='mt-4 mb-4'>5.	Quando o som se tornar contínuo e mais agudo, você estará próximo do objeto.</p>
          <p className='mt-4 mb-4'>6.	Pressione o botão de identificação uma vez próximo do objeto.</p>
          <p className='mt-4 mb-4'>7.	O sinalizador no objeto emitirá um som distinto ou um sinal visual para confirmar sua localização, e dizer qual objeto você está próximo.</p>
          <p className='mt-4 mb-4'>Limpeza do Controle: Limpe o controle com um pano úmido e macio. Não utilize produtos químicos agressivos.</p>
          <p className='mt-4 mb-4'>Verificação dos Sensores: Verifique regularmente se os sensores do controle estão limpos e sem obstruções.</p>
          </div>
      
        </div>
      </div>
  )
}
 
