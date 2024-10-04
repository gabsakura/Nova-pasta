import { useState } from "react";
import '../styles/Home.css'; // Importando estilos para a homepage

const ParallaxSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    { 
      title: "Nosso Escritório", 
      description: "Um espaço moderno e colaborativo para inovação.",
      imgSrc: "/img/office.jpg" 
    },
    { 
      title: "Equipe de Desenvolvimento", 
      description: "Profissionais experientes e apaixonados por tecnologia.",
      imgSrc: "/img/team.jpg" 
    },
    { 
      title: "Projetos Criativos", 
      description: "Soluções inovadoras para empresas do futuro.",
      imgSrc: "/img/creative-project.jpg" 
    },
    { 
      title: "Conferências e Eventos", 
      description: "Participamos dos principais eventos de tecnologia.",
      imgSrc: "/img/conference.jpg" 
    },
    { 
      title: "Nosso Produto", 
      description: "Aplicativos e soluções digitais de alto impacto.",
      imgSrc: "/img/product.jpg" 
    }
  ];

  const testimonials = [
    { 
      name: "João Silva", 
      comment: "A equipe foi fantástica! Projeto entregue antes do prazo.", 
      imgSrc: "/img/testimonial1.jpg" 
    },
    { 
      name: "Maria Oliveira", 
      comment: "O suporte técnico é incrível. Sempre disponíveis para ajudar.",
      imgSrc: "/img/testimonial2.jpg" 
    }
  ];

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? projects.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === projects.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="homepage">
      {/* Header já existente */}
      <header>
        <h1>Bem-vindo à Nossa Empresa</h1>
        <p>Inovação, tecnologia e resultados extraordinários.</p>
        <button className="cta-button">Saiba Mais</button>
      </header>

      {/* Slider de Parallax */}
      <section className="parallax-slider">
        <div className="parallax-slides-container">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`parallax-slide ${index === currentIndex ? 'center' : ''}`}
            >
              <img src={project.imgSrc} alt={project.title} className="slide-image" />
              <div className="parallax-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="parallax-slider-navigation">
          <button className="prev" onClick={handlePrev}>❮</button>
          <button className="next" onClick={handleNext}>❯</button>
        </div>
      </section>

      {/* Testemunhos de Clientes */}
      <section className="testimonials">
        <h2>O que nossos clientes dizem</h2>
        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img src={testimonial.imgSrc} alt={testimonial.name} className="testimonial-image" />
              <p className="testimonial-comment">"{testimonial.comment}"</p>
              <h4>{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Footer já existente */}
      <footer>
        {/* Conteúdo do footer que já foi adicionado */}
      </footer>
    </div>
  );
};

export default ParallaxSlider;
