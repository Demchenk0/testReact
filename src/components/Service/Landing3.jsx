import React from 'react';
import styles from './Service.module.scss';
import ImageServise from '../../img/bro.svg'
import { GoTasklist, GoCheckCircle, GoChecklist } from 'react-icons/go';


const Landing3 = () => {
	return (
		<div className={styles.boxtext}>
		<div className={styles.half}>
			<h2 className={styles.texth2}>
			Ideal for businesses that need a short but informative presentation
			</h2>
			<p className={styles.textp}>
			Thanks to the convenience of this format, you can easily provide the user with all the important information and quickly lead them to a purchase
			</p>
			<p className={styles.textp}>Choose this type of website if:</p>
			<ul className={styles.list}>
				<li className={styles.item}>
					<GoChecklist  style={{ marginRight: '10px' }} size={35} />
					<p className={styles.textp}>You want to present your own info product, service, book, etc.</p>
				</li>
				<li className={styles.item}>
					<GoCheckCircle style={{ marginRight: '10px' }} size={35} />
					<p className={styles.textp}>You have a small number of products but want to have a much larger number (up to 8)</p>
				</li>
				<li className={styles.item}>
					<GoTasklist style={{ marginRight: '10px' }} size={35} />
					<p className={styles.textp}>You need a short portfolio of a specialist or a business card site</p>
				</li>
			</ul>
			<button className={styles.bn30}>I want</button>
		</div>
		<div className={styles.half}>
			<img
				src={ImageServise}
				alt="img"
				style={{ width: '100%', maxHeight: 500 }}
			/>
		</div>
	</div>
	);
};

export default Landing3;