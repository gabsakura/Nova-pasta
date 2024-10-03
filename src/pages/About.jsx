import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h1 className="about-title">Sobre a Empresa</h1>
        <p className="about-text">
          Bem-vindo à Future Web, onde inovação encontra criatividade! Somos especializados
          em criar experiências digitais avançadas, combinando design arrojado e tecnologia 
          de ponta. Com uma equipe apaixonada pelo futuro, nossa missão é transformar suas 
          ideias em realidade.
        </p>
        <p className="about-text highlight">
          Atuamos nas áreas de desenvolvimento web, automação e soluções inteligentes. Desde 
          2024, temos impulsionado a inovação em diversos setores, com projetos impactantes que 
          garantem resultados surpreendentes.
        </p>
        <p className="about-text">
          Nossa visão é clara: proporcionar um futuro digital melhor, com soluções que evoluem
          com as demandas de um mundo em constante mudança. Junte-se a nós nessa jornada para 
          o amanhã!
        </p>
      </div>
    </section>
  );
};

export default About;
