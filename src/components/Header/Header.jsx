import React, { useState, useEffect } from 'react';
import ImageLogo from '../../img/logo2.svg';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import styles from './Header.module.scss';
import { Link } from 'react-scroll';
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
				<a href="/">
					<img
						src={ImageLogo}
						alt="logo"
						style={{ width: 50, cursor: 'pointer' }}
					/>
				</a>

				<nav>
					<ul className={styles.list}>
						<li className={styles.item}>
							<Link to="service" smooth={true} duration={500} offset={-85}>
								Services
							</Link>
						</li>
						<li className={styles.item}>
							<Link to="us" smooth={true} duration={500} offset={-85}>
								Why us
							</Link>
						</li>
						<li className={styles.item}>
							<Link to="home" smooth={true} duration={500} offset={-85}>
								FAQ
							</Link>
						</li>
						<li className={styles.item}>
							<Link to="contact" smooth={true} duration={500} offset={-85}>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
				{/* Mobile Button */}
				<div className={styles.icon} onClick={handleNav}>
					{nav ? (
						<AiOutlineClose size={25} style={{ color: 'white' }} />
					) : (
						<AiOutlineMenu size={25} style={{ color: 'white' }} />
					)}
				</div>
				{/* Mobile Menu */}
				{nav && (
					<div className={styles.mobmenu}>
						<ul className={styles.qq}>
							<li className={styles.mobItem}>
								<Link
									to="service"
									smooth={true}
									duration={500}
									onClick={() => setNav(false)}
									offset={-85}
								>
									Services
								</Link>
							</li>
							<li className={styles.mobItem}>
								<Link
									to="us"
									smooth={true}
									duration={500}
									onClick={() => setNav(false)}
									offset={-85}
								>
									Why us
								</Link>
							</li>
							<li className={styles.mobItem}>
								{' '}
								<Link
									to="home"
									smooth={true}
									duration={500}
									onClick={() => setNav(false)}
									offset={-85}
								>
									FAQ
								</Link>
							</li>
							<li className={styles.mobItem}>
								<Link
									to="contact"
									smooth={true}
									duration={500}
									onClick={() => setNav(false)}
									offset={-85}
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
