import React from 'react';
import styles from './Advantage.module.scss';
import { GoInfo } from 'react-icons/go';
const Advantage = () => {
	return (
		<section name='us' className={styles.section}>
			<div className={styles.container}>
				<h2 className={styles.why}>WHY should you choose us? </h2>
				<div className={styles.box}>
					<div className={styles.card}>
						<div className={styles.icon}>
							<GoInfo size={25} />
						</div>
						<p className={styles.text}>
						Experience and expertise: The company may have significant experience and extensive expertise in the chosen IT industry. This may include working with large corporations, successful projects, or specialized expertise in certain technologies.

						</p>
					</div>
					<div className={styles.card}>
						<div className={styles.icon}>
							<GoInfo size={25}/>
						</div>
						<p className={styles.text}>
						Quality of work: If a company is known for its quality of work, this can be one of the key reasons for choosing its services. Customer reviews and ratings can confirm their reputation.

						</p>
					</div>
					<div className={styles.card}>
						<div className={styles.icon}>
							<GoInfo size={25} />
						</div>
						<p className={styles.text}>
						Variety of services: A company can offer a wide range of services, including web development, mobile apps, artificial intelligence, data accounting, etc., which can set it apart from the competition.

						</p>
					</div>
          <div className={styles.card}>
						<div className={styles.icon}>
							<GoInfo size={25} />
						</div>
						<p className={styles.text}>
						Price competitiveness: The price of services can be one of the key deciding factors for customers. If a company offers competitive prices with a high level of quality, this can be an important argument.
						</p>
					</div><div className={styles.card}>
						<div className={styles.icon}>
							<GoInfo size={25} />
						</div>
						<p className={styles.text}>
						Localization and accessibility: The location of a company and its accessibility for communication can be important for clients, especially if they are looking for a partner with whom they can effectively collaborate from a distance.
						</p>
					</div><div className={styles.card}>
						<div className={styles.icon}>
							<GoInfo size={25} />
						</div>
						<p className={styles.text}>
						Value and innovation: A company may stand out for its ability to offer innovative solutions or added value to clients that helps them achieve their goals more efficiently.
						</p>
					</div>
				</div>
				<button className={styles.bn30}>Order</button>
			</div>
		</section>
	);
};

export default Advantage;
