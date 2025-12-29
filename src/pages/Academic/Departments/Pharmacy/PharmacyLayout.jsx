import React from 'react';
import AcademicDynamicLayout from '../../../../components/layout/AcademicDynamicLayout';
import { pharmacyData } from '../../../../data/pharmacyData';

const PharmacyLayout = () => {
	return (
		<AcademicDynamicLayout
			title={pharmacyData.title}
			dropdownItems={pharmacyData.dropdownItems}
			peopleDropdown={pharmacyData.peopleDropdown}
			footerInfo={pharmacyData.footerInfo}
		/>
	);
};

export default PharmacyLayout;
