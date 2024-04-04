import React from 'react';
import Styles from './Contato.module.css';
import image from '../img/contato.jpg';

const Contato = () => {
  return (
    <section className={Styles.contato}>
      <img src={image} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={Styles.dados}>
          <li>email@email.com</li>
          <li>99999-9999</li>
          <li>Rua Ali, 999</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
