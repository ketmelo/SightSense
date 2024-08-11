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
       <div className="w-[90%] bg-white  bg-opacity-80  shadow-md p-6 mt-10 mb-10">
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
          <h1 className="text-5xl font-sen ml-8 mb-16">Sense</h1>

          <h1 className='font-bold uppercase text-4xl text-block flex items-center justify-center '> R e f e r ê n c i a s  </h1>
          <h1  className='font-bold uppercase text-4xl text-block flex items-center justify-center'>B i b l i o g r á f i c a s</h1>
          <p className='p-20 font-bold '>  
            As crianças que nascem cegas ou perderam a visão cedo, apresentam 
            necessidades de aprendizagem eu diferente das demais crianças .
            A potencialidade de cada criança para aprender a interagir em condições 
            satisfatórias em seu meio familiar, na escola e em seu meio social pode ser 
            estimulada ou inibida pela atitudedas pessoas que a rodeiam.
            A deficiência visual impõe restrições ao desenvolvimento seguro e confiante da criança no ambiente, interfere no conhecimento do próprio corpo, e na inter-relação entre as coisas e as pessoas no ambiente
              Nos estudos observam as limitações que pessoas deficientes visuais 
            apresentam no desempenho funcional da rotina diária.
            Aceitação da deficiência visual significa aceitação como ela é, sem o desejo 
            modificar ou transformá-la para ser considerado o melhor.
            O equilíbrio postural é fundamental para todos os movimentos e requer a 
            integração dos sistemas sensoriais visual, vestibular e proprioceptivo, com a 
            organização dessas informações sendo realizada pelo sistema nervoso central. 
              De acordo com Popov et al. e Hatzitaki et al., as informações sensoriais 
            integradas são essenciais para garantir o equilíbrio, a orientação e os 
            movimentos do corpo. Entretanto, o sistema nervoso central seleciona uma 
            fonte sensorial principal para controlar o equilíbrio, utilizando apenas uma 
            informação sensorial por vez para evitar conflitos, como afirmam Massion e 
            Woollacott.
              A modulação da informação sensorial é influenciada tanto pelo estado de 
            atenção quanto pela disponibilidade dos sistemas sensoriais. Acrescentam que essa seleção sensorial é dinâmica e depende da tarefa e da meta estabelecida 
            para o controle postural. A visão desempenha um papel crucial no equilíbrio 
            postural, fornecendo informações quase instantâneas sobre os ambientes 
            próximos e distantes. Segundo Patla, a visão é utilizada para regular a 
            locomoção em um nível local (passada) e global (planejamento do 
            deslocamento), garantindo assim a estabilidade corporal. Isso evidencia a 
            importância da visão para a aprendizagem e o desenvolvimento motor, que são dificultados quando esta não está disponível, especialmente na infância.
              Com essas considerações, torna-se necessário entender como a estabilidade 
            postural é mantida em indivíduos com deficiências nos sistemas sensoriais. 
            Com base nessas premissas, este trabalho visa, através de uma revisão de 
            literatura, analisar a influência do sistema visual no equilíbrio e no 
            desenvolvimento psicomotor, bem como os métodos de intervenção utilizados 
            diante da deficiência visual.
          </p>
        </div>
      
    </div>
  )
}
