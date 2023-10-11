// import About from './components/About/About';
import Advantage from './components/Advantage/Advantage';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Project from './components/Project/Project';
import Service from './components/Service/Service';

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Advantage />
				<Service />
				<Project/>
				<Contact/>
				{/* <About /> */}
			</main>
			<Footer />
		</>
	);
}

export default App;
