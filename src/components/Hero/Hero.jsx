import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<p>Hi my name is</p>
				<h1 className={styles.name}>Ivan Ivanov</h1>
				<h2 className={styles.who}>I'm Strong Junior Developer</h2>
				<p className={styles.text}>
					{' '}
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
					harum aspernatur ab repudiandae corrupti, est eveniet nulla mollitia
					sint id enim quasi! Vitae recusandae maiores et, ratione atque
					reiciendis cupiditate! Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Perferendis labore neque fuga eum. Assumenda dolore
					laudantium ex, quod earum nam, aperiam totam voluptates vero obcaecati
					corrupti. Perspiciatis, voluptate laboriosam! Deleniti.
				</p>
				<div className={styles.boxbtn}>
					<p className={styles.textbtn}>Contact me about the work</p>
					<a href="/">
						<button className={styles.bn30}>Button</button>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
