import React from 'react';
import styles from './Service.module.scss';
import ImageServise from '../../img/rafiki.svg'
import { GoTasklist } from 'react-icons/go';

const Landing4 = () => {
	return (
		<div className={styles.boxtext}>
		<div className={styles.half}>
			<h2 className={styles.texth2}>
				Ідеальний варіант для бізнесу, якому потрібна коротка, але змістовна,
				презентація
			</h2>
			<p className={styles.textp}>
				Завдяки зручності такого формату, можна легко подати користувачу всю
				важливу інформацію та швидко підвести його до покупки
			</p>
			<p className={styles.textp}>Обирайте цей тип сайту, якщо:</p>
			<ul className={styles.list}>
				<li className={styles.item}>
					<GoTasklist style={{ marginRight: '10px' }} size={35} />
					<p>Ви хочете власний інфо-продукт, послугу, книгу і т.д.</p>
				</li>
				<li className={styles.item}>
					<GoTasklist style={{ marginRight: '10px' }} size={35} />
					<p>Ви хочете власний інфо-продукт, послугу, книгу і т.д.</p>
				</li>
				<li className={styles.item}>
					<GoTasklist style={{ marginRight: '10px' }} size={35} />
					<p>Ви хочете власний інфо-продукт, послугу, книгу і т.д.</p>
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

export default Landing4;