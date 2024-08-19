import React from 'react'
import Participantes from './Participantes';
import Materiais from "./Materiais";
import Home from "./Home"
import Ref from "./Ref"
import Menina from "../assets/meninaLousa.png"
import Menu from "../assets/menu.svg"

export default function Guia() {
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
                <li className="mb-2 sm:mb-0 hidden sm:block"><a href="">GUIA</a></li>
                <li className="mb-2 sm:mb-0 hidden sm:block"><a href="/Materiais">MATERIAIS</a></li>
                <li className="mb-2 sm:mb-0 hidden sm:block"><a href="/Participantes">PARTICIPANTES</a></li>
                <li className="mb-2 sm:mb-0 hidden sm:block"><a href="/Ref">REF</a></li>
              </ul>
            </nav>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-sen ml-8 mt-0 mb-16 ml-auto">Sense</h1>
        <div className="flex absolute top-10 right-8 m-5"><img src={Menu} alt="Menu." className="block sm:hidden w-full h-auto w-1/6 h-auto ml-auto w-9 h-9" /></div>
        <h1 className="flex items-center justify-center font-paytoneone font-bold text-3xl sm:text-5xl mb-6 mt-10">
          G U I A
        </h1>

        <div className="flex justify-center">
          <img src={Menina} alt="Menina com lousa" className="h-40 sm:h-56" />
        </div>

        <h2 className="mt-4 text-lg sm:text-2xl font-bold text-center mb-4">
          Um guia de utilização do nosso projeto.
        </h2>

        <div className="font-roboto font-bold mt-10 mb-10 text-sm sm:text-base">
          <p className="mt-4 mb-4">Guia de Utilização do Sistema de Controle para Deficientes Visuais.</p>
          <p className="mt-4 mb-4">1. Ligue o controle remoto pressionando o botão de ligar/desligar. Verifique se a luz verde está acesa indicando que o controle está ligado.</p>
          <p className="mt-4 mb-4">2. Segure o controle remoto na mão com o sensor voltado para frente e pressione o botão de busca.</p>
          <p className="mt-4 mb-4">3. O controle emitirá um som contínuo e indicará quais objetos estão mais próximos num raio de 4m e sua direção.</p>
          <p className="mt-4 mb-4">4. Mova-se lentamente na direção desejada indicada pelo controle.</p>
          <p className="mt-4 mb-4">5. Quando o som se tornar contínuo e mais agudo, você estará próximo do objeto.</p>
          <p className="mt-4 mb-4">6. Pressione o botão de identificação uma vez próximo do objeto.</p>
          <p className="mt-4 mb-4">7. O sinalizador no objeto emitirá um som distinto ou um sinal visual para confirmar sua localização, indicando qual objeto você está próximo.</p>
          <p className="mt-4 mb-4">Limpeza do Controle: Limpe o controle com um pano úmido e macio. Não utilize produtos químicos agressivos.</p>
          <p className="mt-4 mb-4">Verificação dos Sensores: Verifique regularmente se os sensores do controle estão limpos e sem obstruções.</p>
        </div>
      </div>
    </div>
  );
}
 
