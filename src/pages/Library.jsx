import React from "react";
import PageHeader from "../components/common/PageHeader";

const Library = () => (
	<>
		<PageHeader title="Library" />

		<div className="bg-white min-h-screen font-sans text-gray-700">
			{/* Container matching the width in screenshot */}
			<div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">

				{/* --- ABOUT LIBRARY SECTION --- */}
				<div className="mb-10 text-center">
					<h2 className="text-xl font-bold text-gray-800 uppercase mb-4 inline-block border-b-2 pb-1" style={{ borderBottomColor: '#ff6347' }}>
						About Library
					</h2>
					<p className="text-sm leading-relaxed text-justify">
						Since its inception in 2012, KYAU has been taking all possible steps to build a well-equipped modern Library. The Library is going to be automated that will support remote borrowing, returning, searching catalogue of books, CDs, Journals, Newspapers & Magazines. Full text online books, auto email alert service and reservation of books from any places having internet facilities.
						<br className="mb-3" />
						The Users can also check their borrowing status, renew issued resources and can reserve books online. The purpose of the Library is to enrich teaching and learning, resources endeavors of the university by delivering easy access to relevant information resources and providing quality services and facilities.
					</p>
				</div>

				{/* --- POLICY SECTIONS WRAPPER --- */}
				<div className="space-y-8 text-sm">

					{/* KYAU Library User Policy */}
					<section>
						<h3 className="text-lg font-bold text-gray-800 mb-2 pb-1 border-b-2" style={{ borderBottomColor: '#ff6347' }}>
							KYAU Library User Policy
						</h3>
						<p className="mb-4 text-justify">
							All members of the Khwaja Yunus Ali University are invited to make use of library amenities and collections. The following library policies are inaugurated to provide the best possible services for all users.
						</p>
					</section>

					{/* Membership */}
					<section>
						<h3 className="text-lg font-bold text-gray-800 mb-2 pb-1 border-b-2 border-[#ff6347]">
							Membership
						</h3>
						<p className="mb-4 text-justify">
							All Students, faculty and staff of Khwaja Yunus Ali University are entitled to become the library member.
						</p>
					</section>

					{/* Membership Procedure */}
					<section>
						<h3 className="text-lg font-bold text-gray-800 mb-2 pb-1 border-b-2 border-[#ff6347]">
							Membership Procedure
						</h3>
						<ol className="list-decimal list-inside space-y-1 ml-1">
							<li>All students should submit a copy of pay slip of admission fee. Faculty or Staff should submit a copy of their employee ID.</li>
							<li>One (1) passport One(1) stamp size recent photograph.</li>
							<li>Duly filled a prescribed Membership Application Form to the administrative section of the library.</li>
						</ol>
					</section>

					{/* Library Hours */}
					<section>
						<h3 className="text-lg font-bold text-gray-800 mb-2 pb-1 border-b-2 border-[#ff6347]">
							Library Hours
						</h3>
						<div className="space-y-1">
							<p><span className="font-bold">Open:</span> Sunday – Thursday: 08:30 AM – 05:00 PM</p>
							<p><span className="font-bold">Off:</span> It remains close on public holidays and other holidays announced by the university authorities.</p>
						</div>
					</section>

					{/* General Instructions */}
					<section>
						<h3 className="text-lg font-bold text-gray-800 mb-2 pb-1 border-b-2 border-[#ff6347]">
							General Instructions for Library Users
						</h3>
						<ul className="list-disc list-outside ml-5 space-y-1 marker:text-black">
							<li>Silence is to be strictly maintained in the library.</li>
							<li>All personal bags, coats, jackets, briefcases, umbrellas, etc. are not allowed in the library.</li>
							<li>Gossiping, eating and drinking are strictly prohibited inside the Library.</li>
							<li>All students have to handle with care all the fittings, fixtures, furniture, equipment, books, journals, CDs, computers, PC hardware's, etc. of the Library and should leave them neat and tidy after use.</li>
							<li>Users must not undertake any form of activity, including talking other than to the library staff that disturbs, distracts, or disrupts.</li>
							<li>Personal books/Spiral bindings/envelopes/any kind of files/file covers are not allowed inside the library.</li>
							<li>Laptop, exercise note, pens, pencil, rubber, geometric boxes, calculators, loose pages etc. are allowed inside library.</li>
							<li>No photography, videotaping, recording, or filming is allowed in the Library without expressing the permission of the librarian.</li>
							<li>Ringing cell phones are not allowed. Cell phones must be switched to silent mode. If you need to talk, step outside the library.</li>
							<li>Library has no accountability in case of damage or theft of personal belongings left inside the library.</li>
						</ul>
					</section>

					{/* Borrowing Policy Table */}
					<section>
						<h3 className="text-lg font-bold text-gray-800 mb-2 pb-1 border-b-2 border-[#ff6347]">
							Borrowing Policy
						</h3>
						<div className="overflow-x-auto mt-4 border border-gray-200">
							<table className="min-w-full text-left text-sm">
								<thead className="bg-gray-100 font-bold text-gray-900 border-b-2 border-gray-200">
									<tr>
										<th className="px-4 py-2 border-r border-gray-200">Type of User</th>
										<th className="px-4 py-2 border-r border-gray-200">Maximum Number of Loan</th>
										<th className="px-4 py-2">Duration</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200">
									<tr>
										<td className="px-4 py-2 border-r border-gray-200 bg-gray-50">Adjunct Faculty</td>
										<td className="px-4 py-2 border-r border-gray-200 bg-gray-50">2 books for each course</td>
										<td className="px-4 py-2 bg-gray-50">1 Semester</td>
									</tr>
									<tr>
										<td className="px-4 py-2 border-r border-gray-200">Faculty</td>
										<td className="px-4 py-2 border-r border-gray-200">4 books for each course</td>
										<td className="px-4 py-2">1 Semester</td>
									</tr>
									<tr>
										<td className="px-4 py-2 border-r border-gray-200 bg-gray-50">Staff</td>
										<td className="px-4 py-2 border-r border-gray-200 bg-gray-50">1</td>
										<td className="px-4 py-2 bg-gray-50">7 days</td>
									</tr>
									<tr>
										<td className="px-4 py-2 border-r border-gray-200">Under graduate Student</td>
										<td className="px-4 py-2 border-r border-gray-200">1</td>
										<td className="px-4 py-2">7 days</td>
									</tr>
									<tr>
										<td className="px-4 py-2 border-r border-gray-200 bg-gray-50">Graduate Student</td>
										<td className="px-4 py-2 border-r border-gray-200 bg-gray-50">1</td>
										<td className="px-4 py-2 bg-gray-50">7 days</td>
									</tr>
								</tbody>
							</table>
						</div>
						<p className="mt-2 text-xs font-semibold">
							*Note: Reference Books Not for issue. It's Use only in the library.
						</p>
					</section>

					{/* Renewals */}
					<section>
						<h3 className="text-lg font-bold text-gray-800 mb-2 pb-1 border-b-2 border-[#ff6347]">
							Renewals
						</h3>
						<p className="mb-2">Items may be renewed in person. All items may be renewed for up to one loan period, provided:</p>
						<ol className="list-decimal list-inside ml-1 space-y-1">
							<li>The item is not on reserve for another patron</li>
							<li>The item is not in high demand</li>
						</ol>
					</section>

					{/* Overdue/ Overdue fine */}
					<section>
						<h3 className="text-lg font-bold text-gray-800 mb-2 pb-1 border-b-2 border-[#ff6347]">
							Overdue/ Overdue fine
						</h3>
						<div className="space-y-3">
							<div>
								<span className="font-bold block">Overdue Policies-</span>
								<p>Patrons are responsible for returning materials on or before the due date. Retention of borrowed materials beyond the date on which library materials are due shall result in a Fine.</p>
							</div>
							<div>
								<span className="font-bold block">Overdue fines-</span>
								<p>For each book, journal & others item overdue fine TK. 5.00 (Five) only per calendar day.</p>
							</div>
						</div>
					</section>

					{/* Lost Item and damage Item */}
					<section>
						<h3 className="text-lg font-bold text-gray-800 mb-2 pb-1 border-b-2 border-[#ff6347]">
							Lost Item and damage Item
						</h3>
						<p className="text-justify">
							Patrons are responsible for all materials while on loan to them, and shall report lost or damaged material at the earliest possible opportunity.
							<br />
							A borrower who loses or damages library material shall be required to replace the item. Paying to replace an item is not acceptable unless the item is not available in the market.
						</p>
					</section>

					{/* Information literacy policy */}
					<section>
						<h3 className="text-lg font-bold text-gray-800 mb-2 pb-1 border-b-2 border-[#ff6347]">
							Information literacy policy
						</h3>
						<p className="mb-4 text-justify">
							The KYAU Library has the responsibility to provide information literacy training to all its members and clients with the aim of equipping them with the necessary skills to effectively utilize information for life-long learning.
						</p>

						<div className="mb-4">
							<span className="font-bold block mb-1">Information Literacy shall be:</span>
							<ol className="list-decimal list-inside ml-1 space-y-1">
								<li>Targeted at all KYAU students</li>
								<li>Offered to all KYAU new staff members as part of their library induction and to existing staff members on request</li>
								<li>Marketed to all faculties, students and staff as a core competency for lifelong learning offered in partnership with faculties</li>
								<li>Primarily disciplined and subject based.</li>
								<li>Free of charge except for customized or specialized programs.</li>
							</ol>
						</div>

						<div>
							<span className="font-bold block mb-1">Modes of presentation may include but are not limited to:</span>
							<ol className="list-decimal list-inside ml-1 space-y-1">
								<li>Practical and hands-on</li>
								<li>PowerPoint presentations</li>
								<li>Web-tutorial – (self-study)</li>
								<li>Workshops</li>
								<li>Library Orientation</li>
							</ol>
						</div>
					</section>

				</div>
			</div>
		</div>
	</>
);

export default Library;
