import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';

function App() {
	const [activeSection, setActiveSection] = useState('home');

	const handleSectionChange = (section) => {
		setActiveSection(section);
	};

	return (
		<>
			<div className='headerHero'>
				<Header activeSection={activeSection} />
				<Hero />
			</div>
			<Services />
		</>
	);
}

export default App;
