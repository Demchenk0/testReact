import React from 'react';
import styles from './About.module.scss';
import ImageServise from '../../img/bro.svg';

const About = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.boxAbout}>
					
					<div className={styles.boxText}>
						<p>Генеральний директор</p>
						<h2 className={styles.name}>Ivan Ivanov</h2>
						<div className={styles.boxInf}>
							<div>
								<p className={styles.text}>Успiшно завершених</p>
								<p>50+ Проєктiв</p>
							</div>
							<div>
								<p className={styles.text}>Успiшно завершених</p>
								<p>50+ Проєктiв</p>
							</div>
							<div>
								<p className={styles.text}>Досвід співпраці з бізнесом в</p>
								<p className={styles.text}>Досвід співпраці з бізнесом в</p>
							</div>
						</div>
					</div>
                    <div>
						<img
							src={ImageServise}
							alt="img"
							style={{ width: '100%', maxHeight: 500 }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
