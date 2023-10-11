import React, { useState, useEffect } from 'react';
import ImageLogo from '../../img/logo2.svg'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import styles from './Header.module.scss';
const Header = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
	return (
		<header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
			<div className={styles.container}>
			
				<img src={ImageLogo} alt="logo" style={{width: 50}} />
			
				<nav>
					<ul className={styles.list}>
						<li className={styles.item}>Послуги</li>
						<li className={styles.item}>Про мене</li>
						<li className={styles.item}>Часті запитання</li>
						<li className={styles.item}>Контакти</li>
					</ul>
				</nav>
				{/* Mobile Button */}
				<div className={styles.icon} onClick={handleNav}>
					{nav ? <AiOutlineClose size={25}  style={{color: "white"}} /> : <AiOutlineMenu size={25} style={{color: "white"}} />}
				</div>
				{/* Mobile Menu */}
				{nav && (
					<div className={styles.mobmenu}>
						<ul className={styles.qq}>
							<li className={styles.mobItem}>Послуги</li>
							<li className={styles.mobItem}>Про мене</li>
							<li className={styles.mobItem}>Часті запитання</li>
							<li className={styles.mobItem}>Контакти</li>
						</ul>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
