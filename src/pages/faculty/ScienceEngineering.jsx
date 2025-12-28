import PageHeader from '../../components/common/PageHeader';
const departments = [
    "Department of Information and Communication Technology",
    "Department of Computer Science & Engineering",
    "Department of Electrical and Electronics Engineering",
    "Department of Mechatronics and Micromechatronics Engineering",
    "Department of Medical Physics"
  ];
export default function ScienceEngineering() {
	return (
		<>
			<PageHeader title="Science and Engineering" />
		<div className="bg-white p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-5">
        {departments.map((dept, index) => (
          <div key={index} className="flex items-start sm:items-center group">
            
            {/* Number Circle */}
            <div className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-cyan-400 text-gray-600 text-sm font-medium mr-3 transition-colors duration-200 group-hover:border-blue-500 group-hover:text-blue-500">
              {index + 1}
            </div>

            {/* Department Name */}
            <a 
              href="#" 
              className="text-blue-500 text-lg hover:text-blue-700 transition-colors duration-200"
            >
              {dept}
            </a>
            
          </div>
        ))}
      </div>
    </div>
		</>
	);
}
