import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-[#0a0040] to-green-100 p-6">
			<div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
				<div className="text-6xl font-bold text-green-600 mb-2">404</div>
				<h1 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h1>
				<p className="text-gray-500 mb-4">
					{error?.statusText || error?.message || "Sorry, the page you are looking for does not exist or an error occurred."}
				</p>
				<Link
					to="/"
					className="inline-block mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
				>
					Go Home
				</Link>
			</div>
			<div className="mt-8 text-gray-400 text-xs">&copy; {new Date().getFullYear()} Khawja Yunus Ali University</div>
		</div>
	);
}
