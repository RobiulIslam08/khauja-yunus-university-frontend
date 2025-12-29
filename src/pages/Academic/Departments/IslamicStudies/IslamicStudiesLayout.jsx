import React from 'react';
import AcademicDynamicLayout from '../../../../components/layout/AcademicDynamicLayout';
import { islamicStudiesData } from '../../../../data/islamicStudiesData';

const IslamicStudiesLayout = () => {
	return (
		<AcademicDynamicLayout
			title={islamicStudiesData.title}
			dropdownItems={islamicStudiesData.dropdownItems}
			peopleDropdown={islamicStudiesData.peopleDropdown}
			footerInfo={islamicStudiesData.footerInfo}
		/>
	);
};

export default IslamicStudiesLayout;
