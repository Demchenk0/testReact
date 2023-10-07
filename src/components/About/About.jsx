import React from 'react';
import styles from './About.module.scss';
import { GoInfo } from 'react-icons/go';
const About = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<h2 className={styles.why}>WHY should you choose us? </h2>
				<div className={styles.box}>
					<div className={styles.card}>
						<div className={styles.icon}>
							<GoInfo size={25} />
						</div>
						<p className={styles.text}>
							Досвід та експертиза: Компанія може мати значний досвід і велику
							експертизу в обраній галузі айті. Це може включати в себе роботу з
							великими корпораціями, успішні проекти або спеціалізовану
							експертизу в певних технологіях.
						</p>
					</div>
					<div className={styles.card}>
						<div className={styles.icon}>
							<GoInfo size={25}/>
						</div>
						<p className={styles.text}>
							Досвід та експертиза: Компанія може мати значний досвід і велику
							експертизу в обраній галузі айті. Це може включати в себе роботу з
							великими корпораціями, успішні проекти або спеціалізовану
							експертизу в певних технологіях.
						</p>
					</div>
					<div className={styles.card}>
						<div className={styles.icon}>
							<GoInfo size={25} />
						</div>
						<p className={styles.text}>
							Досвід та експертиза: Компанія може мати значний досвід і велику
							експертизу в обраній галузі айті. Це може включати в себе роботу з
							великими корпораціями, успішні проекти або спеціалізовану
							експертизу в певних технологіях.
						</p>
					</div>
          <div className={styles.card}>
						<div className={styles.icon}>
							<GoInfo size={25} />
						</div>
						<p className={styles.text}>
							Досвід та експертиза: Компанія може мати значний досвід і велику
							експертизу в обраній галузі айті. Це може включати в себе роботу з
							великими корпораціями, успішні проекти або спеціалізовану
							експертизу в певних технологіях.
						</p>
					</div><div className={styles.card}>
						<div className={styles.icon}>
							<GoInfo size={25} />
						</div>
						<p className={styles.text}>
							Досвід та експертиза: Компанія може мати значний досвід і велику
							експертизу в обраній галузі айті. Це може включати в себе роботу з
							великими корпораціями, успішні проекти або спеціалізовану
							експертизу в певних технологіях.
						</p>
					</div><div className={styles.card}>
						<div className={styles.icon}>
							<GoInfo size={25} />
						</div>
						<p className={styles.text}>
							Досвід та експертиза: Компанія може мати значний досвід і велику
							експертизу в обраній галузі айті. Це може включати в себе роботу з
							великими корпораціями, успішні проекти або спеціалізовану
							експертизу в певних технологіях.
						</p>
					</div>
				</div>
				<button className={styles.bn30}>Button</button>
			</div>
		</section>
	);
};

export default About;
