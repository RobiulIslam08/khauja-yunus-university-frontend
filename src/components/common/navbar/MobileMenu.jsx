import { useState } from "react";
import { Link } from "react-router-dom";
import { MAIN_NAV_ITEMS, TOP_LINKS } from "./navData";

function MobileDropdown({ label, items, closeMenu }) {
	const [open, setOpen] = useState(false);
	const [subOpen, setSubOpen] = useState(null);
	return (
		<div>
			<button
				className="w-full flex items-center justify-between py-2 text-white text-sm font-semibold hover:text-green-400 transition duration-200 focus:outline-none"
				onClick={() => setOpen(!open)}
				type="button"
			>
				{label}
				<svg className={`ml-2 w-4 h-4 transform transition-transform duration-200 ${open ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
			</button>
			{open && (
				<div className="pl-4 border-l border-green-700">
					{items.map((item, idx) =>
						item.submenu ? (
							<div key={idx}>
								<button
									className="w-full flex items-center justify-between py-2 text-gray-200 text-sm font-medium hover:text-green-600 focus:outline-none"
									onClick={() => setSubOpen(subOpen === idx ? null : idx)}
									type="button"
								>
									{item.label}
									<svg className={`ml-2 w-3 h-3 transform transition-transform duration-200 ${subOpen === idx ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
								</button>
								{subOpen === idx && (
									<div className="pl-4 border-l border-green-400">
										{item.submenu.map((sub, subIdx) => (
											<Link
												key={subIdx}
												to={sub.path}
												className="block py-2 text-gray-300 text-xs font-medium hover:text-green-600 transition duration-200"
												onClick={() => {
													setOpen(false);
													setSubOpen(null);
													if (closeMenu) closeMenu();
												}}
											>
												{sub.label}
											</Link>
										))}
									</div>
								)}
							</div>
						) : (
							<Link
								key={idx}
								to={item.path}
								onClick={() => {
									setOpen(false);
									setSubOpen(null);
									if (closeMenu) closeMenu();
								}}
								className="block py-2 text-gray-200 text-sm font-medium hover:text-green-600 transition duration-200"
							>
								{item.label}
							</Link>
						)
					)}
				</div>
			)}
		</div>
	);
}

export default function MobileMenu({ isOpen, closeMenu }) {
	if (!isOpen) return null;
	return (
		<div className="md:hidden bg-[#0a0040] border-t border-[#1a0051]">
			<div className="flex flex-col px-4 py-3">
				{MAIN_NAV_ITEMS.map((item) =>
					item.type === "dropdown" ? (
						<MobileDropdown key={item.label} label={item.label} items={item.items} closeMenu={closeMenu} />
					) : (
						<Link
							key={item.label}
							to={item.path}
							onClick={closeMenu}
							className="py-2 text-white text-sm font-semibold hover:text-green-400 transition duration-200 block"
						>
							{item.label}
						</Link>
					)
				)}
				<div className="border-t border-[#1a0051] my-3 pt-3">
					{TOP_LINKS.map((link, index) => (
						<Link
							key={`top-${index}`}
							to={link.path}
							onClick={closeMenu}
							className="py-2 text-gray-300 text-xs font-medium hover:text-white transition duration-200 block"
						>
							{link.label}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
