import React from "react";
import PageHeader from "../components/common/PageHeader";

const Notices = () => (
	<>
	<PageHeader title="বিনিয়োগ শিক্ষা কার্যক্রম"/>
	<div className="flex justify-center items-center p-2 md:p-6 bg-white">
      {/* Card Container */}
      <div className="w-full max-w-3xl bg-white border border-gray-200 rounded shadow-sm p-10 text-center">
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4">
          Financial Investment Literacy
        </h2>

        {/* Description Text */}
        <p className="text-gray-600 font-light mb-8 text-lg">
          For more resources, visit the official website or our YouTube channel.
        </p>

        {/* Buttons Group */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Blue Button - Official Website */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-8 rounded transition duration-200">
            Official Website
          </button>

          {/* Red Button - YouTube Channel */}
          <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 px-8 rounded transition duration-200">
            YouTube Channel
          </button>
        </div>

      </div>
    </div>
	</>
)

export default Notices;
