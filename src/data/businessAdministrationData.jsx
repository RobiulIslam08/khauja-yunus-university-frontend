export const businessAdministrationData = {
	title: "Department of Business Administration",
	dropdownItems: [
		{ label: "BBA", path: "bba" },
		{ label: "MBA", path: "mba" },
		{ label: "EMBA", path: "emba" }
	],
	peopleDropdown: [
		{ label: "Faculty Members", path: "faculty-members" },
		{ label: "Faculty Staff", path: "faculty-staff" }
	],
	footerInfo: (
		<div className="space-y-1">
			<p>Contact Information</p>
			<p>Department of Business Administration</p>
			<p>Mobile: 01404461527 | Email: business@kyau.edu.bd</p>
			<p>Room No: 110, Academic Building</p>
		</div>
	)
};
