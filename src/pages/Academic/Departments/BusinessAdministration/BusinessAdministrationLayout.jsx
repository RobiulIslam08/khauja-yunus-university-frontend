import React from 'react';
import AcademicDynamicLayout from '../../../../components/layout/AcademicDynamicLayout';
import { businessAdministrationData } from '../../../../data/businessAdministrationData';

const BusinessAdministrationLayout = () => {
	return (
		<AcademicDynamicLayout
			title={businessAdministrationData.title}
			dropdownItems={businessAdministrationData.dropdownItems}
			peopleDropdown={businessAdministrationData.peopleDropdown}
			footerInfo={businessAdministrationData.footerInfo}
		/>
	);
};

export default BusinessAdministrationLayout;
