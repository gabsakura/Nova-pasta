import React from 'react';
import '../styles/services.css';

const Services = () => {
  const services = [
    { title: "Desenvolvimento Web", description: "Soluções web modernas e responsivas." },
    { title: "Automação Inteligente", description: "Integração de sistemas de automação para eficiência." },
    { title: "Design Futurista", description: "Design criativo que une estética e funcionalidade." },
    { title: "Consultoria Digital", description: "Estratégias para transformação digital." },
    { title: "Análise de Dados", description: "Insights poderosos através de análise de dados." },
    { title: "Sistemas Integrados", description: "Desenvolvimento de sistemas integrados e eficientes." },
    { title: "Aplicações Móveis", description: "Aplicativos inovadores e intuitivos para todas as plataformas." },
    { title: "Segurança Digital", description: "Proteção e soluções avançadas de segurança." },
  ];

  return (
    <div className="services-section">
      <h2>Nossos Serviços</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
