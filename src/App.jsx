import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Technology from './components/Technology';

function App() {
	const [activeSection, setActiveSection] = useState('home');

	const handleSectionChange = (section) => {
		setActiveSection(section);
	};

	return (
		<>
			<div className='headerHero container'>
				<Header activeSection={activeSection} />
				<Hero />
			</div>
			<Services />
			<Technology />
		</>
	);
}

export default App;
