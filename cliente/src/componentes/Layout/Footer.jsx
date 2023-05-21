import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaPaypal} from 'react-icons/fa';
import {CgWebsite} from 'react-icons/cg';
import { Link } from 'react-router-dom';
import routes from '../../helpers/routes';
import PantallaAboutme from '../PantallaAboutme';
import '../../css/footer.css';

const Footer = () => {


  const [modalVisible, setModalVisible] = useState(false);

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };





  return (

  <footer className="py-4 footer">
  <div className="container">
  <div className="row">
  <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
    <p className="text-muted mb-0">¡Bienvenido a nuestro sitio web de entrenamiento! Aquí encontrarás una gran variedad de ejercicios para mejorar tu condición física y alcanzar tus metas. Además, puedes guardar tus entrenamientos favoritos para volver a ellos cuando quieras. ¡Únete a nuestra comunidad y comienza a entrenar!</p>
  </div>
  <div className="col-md-6 d-flex justify-content-center justify-content-md-end align-items-center">
   

  

    <div className="social-icons">
   
   
    <a href="https://www.paypal.com/donate/?hosted_button_id=HVEM83PXYZUZE" target="_blank" className="me-3">
  <FaPaypal style={{color: 'gold', borderRadius: '5px', padding: '10px', backgroundColor: '#00457C', marginRight: '10px'}} size={40}/>
</a>



 


      <a href="https://play.google.com/store/apps/dev?id=6698387086156471143" target='blank' className="me-3"><img src='img/playstore.png' width="40px" height="40px" alt='iconplaystore'></img></a>
      <a href="https://github.com/MoradElm96" target='blank' className="me-3"><FaGithub size={40} color= 'black' /></a>
      <a href="https://www.linkedin.com/in/morad-el-mourabit-667596211/" target='blank' className="me-3"><FaLinkedin size={40} /></a>
      <a href="https://moradelm96.github.io/PortafolioMorad" target='blank' className="me-3"><CgWebsite size={40} color='#AED6F1' /></a>
    </div>
  </div>
</div>

    <hr className="my-4" />
    <div className="row">
      <div className="col-lg-12">
        <ul className="nav justify-content-center mb-md-0 mb-3">
          <li className="nav-item"><Link to={routes.menu} className="nav-link px-2 text-body-secondary">Inicio</Link></li>
          <li className="nav-item"><Link  className="nav-link px-2 text-body-secondary" to={routes.contactme}>Contacto</Link></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary" onClick={() => setModalVisible(true)}>Sobre mi</a></li>
          <li className="nav-item"><Link href="#" className="nav-link px-2 text-body-secondary" to={routes.sitemap} >SiteMap</Link></li>

        </ul>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 text-center">
        <p className="text-muted mb-0">© 2023 <a href="https://site.educa.madrid.org/ies.elcanaveral.mostoles/" target="_blank" rel="noopener noreferrer">IES El Cañaveral</a>. Todos los derechos reservados.</p>
      </div>
    </div>
  </div>
  <PantallaAboutme visible={modalVisible} onClose={handleModalClose} />
  


</footer>

 


  );
};

export default Footer;