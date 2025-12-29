import React from 'react';
import AcademicDynamicLayout from '../../../../components/layout/AcademicDynamicLayout';
import { libraryInformationScienceData } from '../../../../data/libraryInformationScienceData';

const LibraryInformationScienceLayout = () => {
	return (
		<AcademicDynamicLayout
			title={libraryInformationScienceData.title}
			dropdownItems={libraryInformationScienceData.dropdownItems}
			peopleDropdown={libraryInformationScienceData.peopleDropdown}
			footerInfo={libraryInformationScienceData.footerInfo}
		/>
	);
};

export default LibraryInformationScienceLayout;
