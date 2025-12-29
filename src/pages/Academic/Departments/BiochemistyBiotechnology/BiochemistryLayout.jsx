import React from 'react';

import AcademicDynamicLayout from '../../../../components/layout/AcademicDynamicLayout';
import { biochemistryData } from '../../../../data/biochemistryData';


const BiochemistryLayout = () => {
    return (
        <AcademicDynamicLayout 
            title={biochemistryData.title}
            dropdownItems={biochemistryData.dropdownItems}
            peopleDropdown={biochemistryData.peopleDropdown}
            footerInfo={biochemistryData.footerInfo}
        />
    );
};

export default BiochemistryLayout;