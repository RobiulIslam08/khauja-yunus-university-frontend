import React from 'react';
import AcademicDynamicLayout from '../../../../components/layout/AcademicDynamicLayout';
import { lawData } from '../../../../data/lawData';

const LawLayout = () => {
	return (
		<AcademicDynamicLayout
			title={lawData.title}
			dropdownItems={lawData.dropdownItems}
			peopleDropdown={lawData.peopleDropdown}
			footerInfo={lawData.footerInfo}
		/>
	);
};

export default LawLayout;
