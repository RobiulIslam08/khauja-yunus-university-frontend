import React from 'react';

import Navbar from '../../components/common/Navbar';
import Carausel from '../../components/common/Carausel';
import NewsTicker from '../../components/home/NewsTicker';
import EventsSection from '../../components/home/EventsSection';
import InfoSection from '../../components/home/InfoSection';
import WhyChooseUs from '../../components/home/WhyChooseUs';
import AffiliationSection from '../../components/home/AffiliationSection';


const HomePage = () => {
	return (
		<div>
			<Carausel />
			<NewsTicker/>
			<EventsSection/>
			<InfoSection/>
			<WhyChooseUs/>
			<AffiliationSection/>
		</div>
	);
};

export default HomePage;