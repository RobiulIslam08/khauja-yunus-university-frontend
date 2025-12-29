import React from 'react';
import AcademicDynamicLayout from '../../../../components/layout/AcademicDynamicLayout';
import { computerScienceEngineeringData } from '../../../../data/computerScienceEngineeringData';

const ComputerScienceEngineeringLayout = () => {
	return (
		<AcademicDynamicLayout
			title={computerScienceEngineeringData.title}
			dropdownItems={computerScienceEngineeringData.dropdownItems}
			peopleDropdown={computerScienceEngineeringData.peopleDropdown}
			footerInfo={computerScienceEngineeringData.footerInfo}
		/>
	);
};

export default ComputerScienceEngineeringLayout;
