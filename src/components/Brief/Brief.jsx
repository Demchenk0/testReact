import React from 'react';
import styles from './Brief.module.scss';

const Brief = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<h2 className={styles.title}>Brief</h2>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit magni cum blanditiis vel rerum expedita a tempora unde cupiditate ipsa. Quis voluptates recusandae iusto consectetur natus quaerat deleniti officia numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quam asperiores accusamus rem corrupti laboriosam. Voluptatem, velit recusandae nam ex, magnam non itaque repellat iusto, aliquam ipsam explicabo! Ex? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem repellat enim voluptatum est esse laudantium, a, minima ut perspiciatis, natus quia temporibus eaque quam soluta similique quae quaerat nobis voluptas.</p>
				<button className={styles.bn30}>Fill out now</button>
			</div>
		</section>
	);
};

export default Brief;
