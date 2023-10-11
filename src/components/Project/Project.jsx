import React from 'react'
import styles from './Project.module.scss';

const Project = () => {
  return (
    <section className={styles.section}>
        <div className={styles.container}>
        <div>
            <h1>My Project</h1>
            <p>*Chack out some of my recent work</p>
        </div>
        <div className={styles.projectGrid}>
            <div className={styles.projectCard}>
                {/* Hover effect */}
                <div className={styles.project}>
                    <p className={styles.p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit rerum similique suscipit obcaecati est praesentium nobis illo deleniti modi tempore! Temporibus quaerat ullam commodi placeat at nemo! Explicabo, accusamus voluptates.</p>
                    <div className={styles.button}>
                        <button className={styles.button}>Project</button>
                        <button className={styles.button}>Movie</button>
                    </div>
                </div>
                
            </div>
            <div className={styles.projectCard}>
                {/* Hover effect */}
                <div className={styles.project}>
                    <p className={styles.p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit rerum similique suscipit obcaecati est praesentium nobis illo deleniti modi tempore! Temporibus quaerat ullam commodi placeat at nemo! Explicabo, accusamus voluptates.</p>
                    <div className={styles.boxButton}>
                        <button className={styles.button}>Project</button>
                        <button className={styles.button}>Movie</button>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    </section>
  )
}

export default Project

// {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
// 					{projects.slice(0, lastIndexToShow).map((project, index) => (
// 						<div
// 							key={index}
// 							style={{ backgroundImage: `url(${project.image})` }}
// 							className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
// 						>
// 							{/* Hover effect */}
// 							<div className=" opacity-0 group-hover:opacity-100 p-3 text-justify">
// 								{/* Відображення проекту */}
// 								{/* <h2 >{project.title}</h2> */}
// 								{/* <img src={project.image} alt={project.title} /> */}
// 								<p className=" text-base font-medium  text-white tracking-wider">
// 									{project.description}
// 								</p>
// 								<div className="pt-8 text-center">
// 									<a href={project.demoLink}>
// 										<button
// 											className="text-center rounded-lg px-4 py-3 m-2
//                     bg-white text-gray-700 font-bold text-lg"
// 										>
// 											Demo
// 										</button>
// 									</a>
// 									<a href={project.codeLink}>
// 										<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
// 											Code
// 										</button>
// 									</a>
// 								</div>
// 							</div>
// 						</div>
// 					))}
// 				</div> */}