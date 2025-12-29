import React from 'react';
import AcademicDynamicLayout from '../../../../components/layout/AcademicDynamicLayout';
import { mechatronicsMicromechatronicsEngineeringData } from '../../../../data/mechatronicsMicromechatronicsEngineeringData';

const MechatronicsMicromechatronicsEngineeringLayout = () => {
	return (
		<AcademicDynamicLayout
			title={mechatronicsMicromechatronicsEngineeringData.title}
			dropdownItems={mechatronicsMicromechatronicsEngineeringData.dropdownItems}
			peopleDropdown={mechatronicsMicromechatronicsEngineeringData.peopleDropdown}
			footerInfo={mechatronicsMicromechatronicsEngineeringData.footerInfo}
		/>
	);
};

export default MechatronicsMicromechatronicsEngineeringLayout;
