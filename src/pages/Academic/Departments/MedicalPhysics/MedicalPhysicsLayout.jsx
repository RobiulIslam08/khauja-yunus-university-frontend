import React from 'react';
import AcademicDynamicLayout from '../../../../components/layout/AcademicDynamicLayout';
import { medicalPhysicsData } from '../../../../data/medicalPhysicsData';

const MedicalPhysicsLayout = () => {
	return (
		<AcademicDynamicLayout
			title={medicalPhysicsData.title}
			dropdownItems={medicalPhysicsData.dropdownItems}
			peopleDropdown={medicalPhysicsData.peopleDropdown}
			footerInfo={medicalPhysicsData.footerInfo}
		/>
	);
};

export default MedicalPhysicsLayout;
