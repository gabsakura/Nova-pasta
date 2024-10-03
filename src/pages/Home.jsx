import { useState } from "react";
import '../styles/Home.css'; // Importando estilos para a homepage

const ParallaxSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    { 
      title: "Nosso Escritório", 
      description: "Um espaço moderno e colaborativo para inovação.",
      imgSrc: "/img/office.jpg" // Adicione a imagem real na pasta de imagens
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

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? projects.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === projects.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="parallax-slider">
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
    </div>
  );
};

export default ParallaxSlider;
