import React from 'react';
import AcademicDynamicLayout from '../../../../components/layout/AcademicDynamicLayout';
import { microbiologyData } from '../../../../data/microbiologyData';

const MicrobiologyLayout = () => {
	return (
		<AcademicDynamicLayout
			title={microbiologyData.title}
			dropdownItems={microbiologyData.dropdownItems}
			peopleDropdown={microbiologyData.peopleDropdown}
			footerInfo={microbiologyData.footerInfo}
		/>
	);
};

export default MicrobiologyLayout;
