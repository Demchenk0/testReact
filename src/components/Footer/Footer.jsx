import React from 'react';
import styles from './Footer.module.scss';
import ImageLogo from '../../img/logo2.svg';
import {
	FaViber,
	FaTelegramPlane,
	FaWhatsapp,
	FaMailBulk,
  FaInstagram
} from 'react-icons/fa';
const Footer = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<a href="/">
					<img
						src={ImageLogo}
						alt="logo"
						style={{ width: 100, cursor: 'pointer' }}
					/>
				</a>
        <div className={styles.icon}>
          <a href="insta"><FaInstagram size={35}/></a>
          <a href="mail"><FaMailBulk size={35} /></a>
          <a href="telegram"><FaTelegramPlane size={35} /></a>
          <a href="viber"><FaViber size={35} /></a>
          <a href="whatsapp"><FaWhatsapp size={35}/></a>
        </div>
			</div>
		</section>
	);
};

export default Footer;
