import { Calendar, FileText, Newspaper, Mail, Facebook, Youtube, Twitter, MailIcon } from "lucide-react"

const Footer = () => {
	return (
		<footer className="bg-[#020031] text-gray-300">
			{/* Main Footer Content */}
			<div className="max-w-7xl mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
					{/* Left Column - University Links */}
					<div>
						<h3 className="text-xl font-bold text-gray-200 mb-8 border-b border-gray-600 pb-4">UNIVERSITY</h3>
						<ul className="space-y-4">
							<li className="flex items-center gap-3 hover:text-orange-500 transition">
								<Calendar size={20} className="text-orange-500 shrink-0" />
								<a href="#" className="font-semibold">
									Academic Calendar
								</a>
							</li>
							<li className="flex items-center gap-3 hover:text-orange-500 transition">
								<FileText size={20} className="text-orange-500 shrink-0" />
								<a href="#" className="font-semibold">
									Prospectus
								</a>
							</li>
							<li className="flex items-center gap-3 hover:text-orange-500 transition">
								<FileText size={20} className="text-orange-500 shrink-0" />
								<a href="#" className="font-semibold">
									Brochure
								</a>
							</li>
							<li className="flex items-center gap-3 hover:text-orange-500 transition">
								<Newspaper size={20} className="text-orange-500 shrink-0" />
								<a href="#" className="font-semibold">
									Newsletters
								</a>
							</li>
							<li className="flex items-center gap-3 hover:text-orange-500 transition">
								<Mail size={20} className="text-orange-500 shrink-0" />
								<a href="#" className="font-semibold">
									Webmail
								</a>
							</li>
						</ul>
					</div>

					{/* Middle Column - Motto */}
					<div className="relative">
						<h3 className="text-xl font-bold text-gray-200 mb-8 border-b border-gray-600 pb-4">UNIVERSITY MOTTO</h3>
						{/* World Map Background */}
						<div
							className="absolute inset-0 opacity-10"
							style={{
								backgroundImage:
									"url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1000 500%22%3E%3Ctext x=%22500%22 y=%22250%22 fontSize=%22200%22 textAnchor=%22middle%22 fill=%22%23666%22 opacity=%220.3%22%3EWorld%3C/text%3E%3C/svg%3E)'",
								backgroundRepeat: "repeat",
							}}
						></div>
						<p className="text-sm leading-relaxed relative z-10 text-gray-300">
							<span className="font-bold text-gray-200">"Quest for knowledge"</span> is the slogan and motto of the
							Khwaja Yunus Ali University. The creation of a knowledge-based society is the commitment of this
							university.
						</p>
					</div>

					{/* Right Column - Contact */}
					<div>
						<h3 className="text-xl font-bold text-gray-200 mb-8 border-b border-gray-600 pb-4">CONTACT</h3>
						<div className="space-y-4 text-sm">
							<div className="flex items-start gap-3">
								<span className="text-orange-500 shrink-0 mt-1">📍</span>
								<div>
									<p className="font-semibold">Khwaja Yunus Ali University</p>
									<p>Enayetpur, Chuhalli Sirajganj-6751, Bangladesh</p>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<span className="text-orange-500 shrink-0">📱</span>
								<div>
									<p>+8801404461555, +8801404461556</p>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<span className="text-orange-500 shrink-0">📞</span>
								<p>+880-2-58883442-4</p>
							</div>
							<div className="flex items-center gap-3">
								<span className="text-orange-500 shrink-0">✉</span>
								<p>info@kyau.edu.bd</p>
							</div>
							<div className="flex items-center gap-3">
								<span className="text-orange-500 shrink-0">📞</span>
								<p>+880-2-58883441</p>
							</div>
							<div className="flex items-center gap-3">
								<span className="text-orange-500 shrink-0">🕐</span>
								<p>Sunday to Thursday 8:00 am- 5:00 pm</p>
							</div>

							{/* Social Media Icons */}
							<div className="flex gap-4 mt-6 pt-4 border-t border-gray-600">
								<a
									href="#"
									className="bg-orange-500 hover:bg-orange-600 p-3 rounded-full transition transform hover:scale-110"
								>
									<Facebook size={20} className="text-white" />
								</a>
								<a
									href="#"
									className="bg-orange-500 hover:bg-orange-600 p-3 rounded-full transition transform hover:scale-110"
								>
									<Youtube size={20} className="text-white" />
								</a>
								<a
									href="#"
									className="bg-orange-500 hover:bg-orange-600 p-3 rounded-full transition transform hover:scale-110"
								>
									<Twitter size={20} className="text-white" />
								</a>
								<a
									href="#"
									className="bg-orange-500 hover:bg-orange-600 p-3 rounded-full transition transform hover:scale-110"
								>
									<span className="text-white">G+</span>
								</a>
								<a
									href="#"
									className="bg-orange-500 hover:bg-orange-600 p-3 rounded-full transition transform hover:scale-110"
								>
									<MailIcon size={20} className="text-white" />
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Divider */}
				<div className="border-t border-gray-600"></div>

				{/* Bottom Footer */}
				<div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-gray-400">
					<p>COPYRIGHT © 2012-2025 ALL RIGHTS RESERVED BY KYAU</p>
					<p>DEVELOPED & MAINTAINED BY KYAU IT DEPARTMENT</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
