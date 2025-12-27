import { Link } from "react-router-dom";

// Recursive dropdown nav item for desktop
export default function DropdownNavItem({ label, items }) {
	return (
		<div className="relative group">
			<button
				className="px-3 md:px-4 py-3 text-white text-xs md:text-sm font-semibold hover:bg-[#0a0040] transition duration-200 whitespace-nowrap flex items-center gap-1 focus:outline-none"
				type="button"
			>
				{label}
				<svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
			</button>
			<div className="absolute left-0 top-full z-20 min-w-48 bg-white shadow-lg rounded-b-md py-2 border border-t-0 border-gray-200 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-150">
				{items.map((item, idx) =>
					item.submenu ? (
						<div key={idx} className="group relative">
							<div className="flex items-center justify-between px-4 py-2 text-gray-800 hover:bg-gray-100 font-medium cursor-pointer select-none">
								{item.label}
								<svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
							</div>
							<div className="absolute left-full top-0 z-30 min-w-44 bg-white shadow-lg rounded-md py-2 border border-gray-200 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-150">
								{item.submenu.map((sub, subIdx) => (
									<Link
										key={subIdx}
										to={sub.path}
										className="block px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-700 text-sm"
									>
										{sub.label}
									</Link>
								))}
							</div>
						</div>
					) : (
						<Link
							key={idx}
							to={item.path}
							className="block px-4 py-2 text-gray-800 hover:bg-green-100 hover:text-green-700 text-sm"
						>
							{item.label}
						</Link>
					)
				)}
			</div>
		</div>
	);
}
