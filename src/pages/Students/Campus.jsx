import React from "react";
import PageHeader from "../../components/common/PageHeader";

const Campus = () => (
	<>
		<PageHeader title="Campus" />
	<div className="max-w-7xl mx-auto p-6 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Dos Section */}
        <div>
          <h2 
            className="text-2xl font-semibold text-center mb-6 pb-2"
            style={{ borderBottom: '3px solid #ff6347' }}
          >
            Dos
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 bg-black shrink-0"></span>
              <span>Keep good relationship with your classmates, respect elders and be affectionate to the younger</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 bg-black shrink-0"></span>
              <span>Avoid abusive words in addressing others</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 bg-black shrink-0"></span>
              <span>Inform spreading of rumor to the concern authority</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 bg-black shrink-0"></span>
              <span>Have your ID cards visible hanging in the neck</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 bg-black shrink-0"></span>
              <span>Have formal dress up in the campus</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 bg-black shrink-0"></span>
              <span>Be alert and aware of your surroundings</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 bg-black shrink-0"></span>
              <span>Do report any suspicious activity to the KYAU authority</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 bg-black shrink-0"></span>
              <span>Do keep your bicycle, motorcycle or vehicle doors locked</span>
            </li>
          </ul>
        </div>

        {/* Don'ts Section */}
        <div>
          <h2 
            className="text-2xl font-semibold text-center mb-6 pb-2"
            style={{ borderBottom: '3px solid #ff6347' }}
          >
            Don'ts
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 bg-black shrink-0"></span>
              <span>Don't use any electric device that may be harmful and risky</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 bg-black shrink-0"></span>
              <span>Don't sit in your room with the door closed</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 bg-black shrink-0"></span>
              <span>Don't throw the wastage here and there</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 bg-black shrink-0"></span>
              <span>Don't try to form out any political students group in the campus</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 bg-black shrink-0"></span>
              <span>Don't lead your discussion to any political situation in the country</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 bg-black shrink-0"></span>
              <span>Don't gather together in front of admin office</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 bg-black shrink-0"></span>
              <span>Don't smoke in the campus, always keep in your mind</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
	</>
);

export default Campus;
