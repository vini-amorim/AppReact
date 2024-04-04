import React from 'react';
import Styles from './Contato.module.css';
import image from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={Styles.contato + ' animeLeft'}>
      <Head title="Ranek - Contato" />
      <img src={image} alt="Máquina de escrever" className={Styles.contato} />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={`{$Styles.dados} animeLeft`}>
          <li>email@email.com</li>
          <li>99999-9999</li>
          <li>Rua Ali, 999</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
