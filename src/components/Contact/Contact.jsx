import React, { useState } from 'react';
import styles from './Contact.module.scss';
import {
	FaViber,
	FaTelegramPlane,
	FaWhatsapp,
	FaMailBulk,
} from 'react-icons/fa';
const Contact = () => {
	const [input, setInput] = useState(1);
	return (
		<section name='contact' className={styles.section}>
			<div className={styles.container}>
				<div className={styles.contact}>
					<h2 className={styles.title}>Contact me</h2>
					<ul className={styles.list}>
						<FaMailBulk size={30} onClick={() => setInput(1)}></FaMailBulk>
						<FaViber size={30} onClick={() => setInput(2)}></FaViber>
						<FaTelegramPlane
							size={30}
							onClick={() => setInput(3)}
						></FaTelegramPlane>
						<FaWhatsapp size={30} onClick={() => setInput(4)}></FaWhatsapp>
					</ul>
				</div>
				<div className={styles.boxForm}>
					<form action="" className={styles.form}>
						<input
							className={styles.input}
							type="text"
							placeholder="Name"
							name="name"
							required
						/>
						{input === 1 && (
							<input
								className={styles.input}
								type="email"
								placeholder="Email"
								name="Email"
								required
							/>
						)}
						{input === 2 && (
							<input
								className={styles.input}
								type="phone"
								placeholder="+38..."
								name="phone"
								required
							/>
						)}
						{input === 3 && (
							<input
								className={styles.input}
								type="text"
								placeholder="@Nickname"
								name="phone"
								required
							/>
						)}
						{input === 4 && (
							<input
								className={styles.input}
								type="phone"
								placeholder="+38..."
								name="phone"
								required
							/>
						)}

						<textarea
							className={styles.input}
							name="message"
							placeholder="Message"
							required
						></textarea>
						<button className={styles.bn30}>Search</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
