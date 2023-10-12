import React, { useState } from 'react';
import styles from './Faq.module.scss';
import { FaSortAmountDownAlt } from 'react-icons/fa';

const Faq = () => {
	const [isTextVisible1, setTextVisibility1] = useState(false);
	const [isTextVisible2, setTextVisibility2] = useState(false);
	const [isTextVisible3, setTextVisibility3] = useState(false);
	const [isTextVisible4, setTextVisibility4] = useState(false);
	const [isTextVisible5, setTextVisibility5] = useState(false);

	const toggleTextVisibility1 = () => {
		setTextVisibility1(!isTextVisible1);
	};

	const toggleTextVisibility2 = () => {
		setTextVisibility2(!isTextVisible2);
	};
	const toggleTextVisibility3 = () => {
		setTextVisibility3(!isTextVisible3);
	};
	const toggleTextVisibility4 = () => {
		setTextVisibility4(!isTextVisible4);
	};
	const toggleTextVisibility5 = () => {
		setTextVisibility5(!isTextVisible5);
	};
	return (
		<section name="FAQ" className={styles.section}>
			<div className={styles.container}>
				<div className={styles.faq}>
					<div className={styles.faqtext}>
						<h1 className={styles.title}>FAQ</h1>
						<p className={styles.p}>Answers to frequently asked questions</p>
					</div>
					<div className={styles.faqitems}>
                    
						<div className={styles.faqitem}>
							<div className={styles.faqbox1} onClick={toggleTextVisibility1}>
								<p>Чи потрібно підписувати контракт перед роботою?</p>
								<FaSortAmountDownAlt size={25} />
							</div>
							{isTextVisible1 && (
								<div className={styles.faqbox2}>
									<p>
										Так, після обговорення плану роботи ми разом підписуємо
										контракт за допомогою цифрового підпису. Контракт регулює
										весь процес роботи, виплати, будь-які непередбачувані
										обставини та інші важливі частини проєкту. Даний документ
										захищає обидві сторони – як замовника, так і виконавця.
									</p>
								</div>
							)}
						</div>
						<div className={styles.faqitem}>
							<div className={styles.faqbox1} onClick={toggleTextVisibility2}>
								<p>Чи потрібно підписувати контракт перед роботою?</p>
								<FaSortAmountDownAlt size={25} />
							</div>
							{isTextVisible2 && (
								<div className={styles.faqbox2}>
									<p>
										Так, після обговорення плану роботи ми разом підписуємо
										контракт за допомогою цифрового підпису. Контракт регулює
										весь процес роботи, виплати, будь-які непередбачувані
										обставини та інші важливі частини проєкту. Даний документ
										захищає обидві сторони – як замовника, так і виконавця.
									</p>
								</div>
							)}
						</div>
						<div className={styles.faqitem}>
							<div className={styles.faqbox1} onClick={toggleTextVisibility3}>
								<p>Чи потрібно підписувати контракт перед роботою?</p>
								<FaSortAmountDownAlt size={25} />
							</div>
							{isTextVisible3 && (
								<div className={styles.faqbox2}>
									<p>
										Так, після обговорення плану роботи ми разом підписуємо
										контракт за допомогою цифрового підпису. Контракт регулює
										весь процес роботи, виплати, будь-які непередбачувані
										обставини та інші важливі частини проєкту. Даний документ
										захищає обидві сторони – як замовника, так і виконавця.
									</p>
								</div>
							)}
						</div>
						<div className={styles.faqitem}>
							<div className={styles.faqbox1} onClick={toggleTextVisibility4}>
								<p>Чи потрібно підписувати контракт перед роботою?</p>
								<FaSortAmountDownAlt size={25} />
							</div>
							{isTextVisible4 && (
								<div className={styles.faqbox2}>
									<p>
										Так, після обговорення плану роботи ми разом підписуємо
										контракт за допомогою цифрового підпису. Контракт регулює
										весь процес роботи, виплати, будь-які непередбачувані
										обставини та інші важливі частини проєкту. Даний документ
										захищає обидві сторони – як замовника, так і виконавця.
									</p>
								</div>
							)}
						</div>
						<div className={styles.faqitem}>
							<div className={styles.faqbox1} onClick={toggleTextVisibility5}>
								<p>Чи потрібно підписувати контракт перед роботою?</p>
								<FaSortAmountDownAlt size={25} />
							</div>
							{isTextVisible5 && (
								<div className={styles.faqbox2}>
									<p>
										Так, після обговорення плану роботи ми разом підписуємо
										контракт за допомогою цифрового підпису. Контракт регулює
										весь процес роботи, виплати, будь-які непередбачувані
										обставини та інші важливі частини проєкту. Даний документ
										захищає обидві сторони – як замовника, так і виконавця.
									</p>
								</div>
							)}
						</div>
					</div>
					<button className={styles.bn30}>Order</button>
				</div>
			</div>
		</section>
	);
};

export default Faq;
