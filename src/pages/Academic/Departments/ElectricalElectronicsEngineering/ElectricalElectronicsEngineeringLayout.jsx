import React from 'react';
import AcademicDynamicLayout from '../../../../components/layout/AcademicDynamicLayout';
import { electricalElectronicsEngineeringData } from '../../../../data/electricalElectronicsEngineeringData';

const ElectricalElectronicsEngineeringLayout = () => {
	return (
		<AcademicDynamicLayout
			title={electricalElectronicsEngineeringData.title}
			dropdownItems={electricalElectronicsEngineeringData.dropdownItems}
			peopleDropdown={electricalElectronicsEngineeringData.peopleDropdown}
			footerInfo={electricalElectronicsEngineeringData.footerInfo}
		/>
	);
};

export default ElectricalElectronicsEngineeringLayout;
