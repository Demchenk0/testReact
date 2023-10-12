import Brief from './components/Brief/Brief';
import Advantage from './components/Advantage/Advantage';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Project from './components/Project/Project';
import Service from './components/Service/Service';
import Faq from './components/FAQ/Faq';

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
				<Brief />
				<Faq/>
			</main>
			<Footer />
		</>
	);
}

export default App;
