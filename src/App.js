import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Service from './components/Service/Service';

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Service />
			</main>
			<Footer />
		</>
	);
}

export default App;
