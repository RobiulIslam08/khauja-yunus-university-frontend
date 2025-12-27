import React from 'react';

const AdminisionInfoSectionHeader = ({title}) => {
	return (
		<div className="mb-6">
      <h2 className="text-center text-xl md:text-2xl font-bold text-gray-800 uppercase tracking-wide mb-2">
        {title}
      </h2>
      <div className="h-0.5 w-full bg-orange-500"></div>
    </div>
	);
};

export default AdminisionInfoSectionHeader;