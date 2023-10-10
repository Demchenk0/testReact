import React, { useState } from 'react';
import styles from './Service.module.scss';
import Landing1 from './Landing1';
import Landing2 from './Landing2';
import Landing3 from './Landing3';
import Landing4 from './Landing4';
import Landing5 from './Landing5';

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
					{activeButton === 1 && <Landing1/>}
					{activeButton === 2 && <Landing2/>}
					{activeButton === 3 && <Landing3/>}
					{activeButton === 4 && <Landing4/>}
					{activeButton === 5 && <Landing5/>}
				</div>
			</div>
		</section>
	);
};

export default Service;
