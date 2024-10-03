import '../styles/contact.css'; // Importando o arquivo de estilos futuristas

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Entre em Contato</h1>
      <p className="contact-description">
        Fique à vontade para nos contatar em nossas redes sociais ou através de nossos canais oficiais.
      </p>
      <div className="social-icons">
        <a href="https://instagram.com/sua_empresa" target="_blank" rel="noreferrer">
          <img src="/img/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://linkedin.com/in/sua_empresa" target="_blank" rel="noreferrer">
          <img src="/img/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="https://github.com/sua_empresa" target="_blank" rel="noreferrer">
          <img src="/img/github.svg" alt="GitHub" />
        </a>
        <a href="https://picpay.me/sua_empresa" target="_blank" rel="noreferrer">
          <img src="/img/picpay.svg" alt="PicPay" />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
