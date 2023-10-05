import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import styles from './Header.module.scss';
const Header = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<a href="/">logo</a>
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
					{nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
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
