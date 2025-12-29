import React from 'react';
import AcademicDynamicLayout from '../../../../components/layout/AcademicDynamicLayout';
import { informationCommunicationTechnologyData } from '../../../../data/informationCommunicationTechnologyData';

const InformationCommunicationTechnologyLayout = () => {
	return (
		<AcademicDynamicLayout
			title={informationCommunicationTechnologyData.title}
			dropdownItems={informationCommunicationTechnologyData.dropdownItems}
			peopleDropdown={informationCommunicationTechnologyData.peopleDropdown}
			footerInfo={informationCommunicationTechnologyData.footerInfo}
		/>
	);
};

export default InformationCommunicationTechnologyLayout;
