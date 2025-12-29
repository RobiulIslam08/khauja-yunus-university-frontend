import React from 'react';
import AcademicDynamicLayout from '../../../../components/layout/AcademicDynamicLayout';
import { englishData } from '../../../../data/englishData';

const EnglishLayout = () => {
	return (
		<AcademicDynamicLayout
			title={englishData.title}
			dropdownItems={englishData.dropdownItems}
			peopleDropdown={englishData.peopleDropdown}
			footerInfo={englishData.footerInfo}
		/>
	);
};

export default EnglishLayout;
