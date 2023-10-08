import React, { useState } from 'react';
import styles from './Service.module.scss';

const Service = () => {
  const [activeButton, setActiveButton] = useState(1);
  
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<h1 className={styles.texth1}>Service</h1>
				<div className={styles.box}>
					<div className={styles.scrollContainer}>
						<div className={styles.boxbutton}>
							<button className={styles.button} onClick={()=>setActiveButton(1)}>1 Landing page</button>
							<button className={styles.button} onClick={()=>setActiveButton(2)}>2 Landing page</button>
							<button className={styles.button} onClick={()=>setActiveButton(3)}>3 Landing page</button>
							<button className={styles.button} onClick={()=>setActiveButton(4)}>4 Landing page</button>
							<button className={styles.button} onClick={()=>setActiveButton(5)}>5 Landing page</button>
						</div>
					</div>
					{activeButton === 1 && <div className={styles.boxtext}>
						<h2 className={styles.texth2}>
							Ідеальний варіант для бізнесу, якому потрібна коротка, але
							змістовна, презентація
						</h2>
						<p className={styles.textp}>
							Завдяки зручності такого формату, можна легко подати користувачу
							всю важливу інформацію та швидко підвести його до покупки
						</p>
						<p className={styles.textp}>Обирайте цей тип сайту, якщо:</p>
					</div>}
					{activeButton === 2 && <div className={styles.boxtext}>
						<h2 className={styles.texth2}>
							Ідеальний варіант для бізнесу, якому потрібна коротка, але
							змістовна, презентація
						</h2>
						<p className={styles.textp}>
							2222222222222222222222222222222222222222222222222222222222
						</p>
						<p className={styles.textp}>Обирайте цей тип сайту, якщо:</p>
					</div>}
				</div>
			</div>
		</section>
	);
};

export default Service;
