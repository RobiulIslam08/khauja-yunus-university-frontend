import React from 'react';
import { Building2, UserSquare2, Banknote, GraduationCap } from 'lucide-react';

// Data for the four sections containing the exact text from the image
const sectionData = [
	{
		id: 1,
		title: "Admission",
		// Using Building2 as a close match for the university icon
		icon: Building2,
		description: "Khwaja Yunu Ali University (KYAU) has both online and offline admission process. Our admission officer conducts the admission process in an organized and disciplined way. Please, Contact admission desk for admission information."
	},
	{
		id: 2,
		title: "Program",
		// Using UserSquare2 for the ID card/profile icon
		icon: UserSquare2,
		description: "Khwaja Yunus Ali University (KYAU) offers programs undergraduate, graduate and postgraduate at a reasonable cost. The outlines of the program has been designed in line with OBE(Outcome Based Education), innovative teaching method launched in modern era."
	},
	{
		id: 3,
		title: "Tution Fees",
		// Using Banknote for the money icon
		icon: Banknote,
		description: "Khwaja Yunus Ali University (KYAU), a center for excellence in higher studies, emphasizes its students to pay tuition fees on monthly basis so that it does not create extra burden on their parents."
	},
	{
		id: 4,
		title: "Scholarship",
		// Using GraduationCap for the scholarship icon
		icon: GraduationCap,
		description: "Khwaja Yunus Ali University (KYAU), a center for excellence in higher studies, provides 100% scholarship for the meritorious but insolvent students. But for taking this privilege, students must follow some procedure i.e. s/he must fill up a form and attach some documents having attested for the authenticity so that it will hold good."
	}
];

const InfoSection = () => {
	return (
		// Main Section Container with overall background color
		<section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">

				{/* Grid Container:
          - bg-white: The cards themselves have a white background.
          - grid-cols-1: Single column on mobile.
          - md:grid-cols-2: Two columns on tablets.
          - lg:grid-cols-4: Four columns on desktop, matching the image.
          - divide-y & divide-gray-200: Adds horizontal dividers on mobile/tablet stacks.
          - lg:divide-y-0 & lg:divide-x: Switches to vertical dividers on desktop.
          - shadow-sm: Adds a subtle shadow to the whole block.
        */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white shadow-sm rounded-lg overflow-hidden divide-y divide-gray-200 lg:divide-y-0 lg:divide-x">

					{sectionData.map((item) => (
						// Individual Card Item
						<div key={item.id} className="p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">

							{/* Icon Container */}
							<div className="mb-4">
								{/* Rendering the Lucide icon with orange color and specific size */}
								<item.icon className="w-10 h-10 text-orange-500" strokeWidth={1.5} />
							</div>

							{/* Title */}
							<h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
								{item.title}
							</h3>

							{/* Description Text */}
							{/* Using text-justify, text-sm, and leading-relaxed to match the dense text look */}
							<p className="text-gray-600 text-sm leading-relaxed text-justify font-medium">
								{item.description}
							</p>
						</div>
					))}

				</div>
			</div>
		</section>
	);
};

export default InfoSection;