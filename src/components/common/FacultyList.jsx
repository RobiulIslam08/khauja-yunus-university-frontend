import React from "react";

export default function FacultyList({ title, members }) {
	if (!members || members.length === 0) {
		return <div className="text-center text-gray-500 py-8">No data found.</div>;
	}
	return (
		<div className="py-6">
			<h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{members.map((m, i) => (
					<div key={i} className="bg-white rounded shadow p-4 flex flex-col items-center">
						<div className="w-20 h-20 rounded-full bg-gray-200 mb-2 flex items-center justify-center text-2xl font-bold text-gray-600">
							{m.photo ? <img src={m.photo} alt={m.name} className="w-full h-full rounded-full object-cover" /> : m.name[0]}
						</div>
						<div className="font-bold text-lg">{m.name}</div>
						<div className="text-sm text-gray-500">{m.designation}</div>
						{m.email && <div className="text-xs text-gray-400 mt-1">{m.email}</div>}
					</div>
				))}
			</div>
		</div>
	);
}
