import React from "react";
import PageHeader from "../../components/common/PageHeader";

const Facility = () => (
	<>
	<PageHeader title="Faculty"/>
	<div className="max-w-7xl mx-auto p-6 bg-white font-sans">
      
      {/* Special Features Section */}
      <div className="mb-10">
        <h2 
          className="text-xl font-bold text-gray-900 mb-4 pb-1"
          style={{ borderBottom: '1px solid #ff6347' }}
        >
          Special Features of KYAU
        </h2>
        <ul className="space-y-2 text-gray-800 text-sm md:text-base">
          {[
            "More than 100 fulltime faculty members with proven teaching and research excellence at home and abroad",
            "Classrooms have internet connection overhead multimedia projectors and some classes and laboratories are air-conditioned",
            "Campuses are fully secured with latest monitoring devices, such as built-is CCTVs, metal detectors etc.",
            "KYAU has Online University Management System, Registration Systems and Website",
            "KYAU provides Internet with Wi-Fi facility free of cost",
            "KYAU has five students activation clubs to encourage developing skills, leaderships and social development"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1.5 h-2.5 w-2.5 bg-black shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Distinctive Features Section */}
      <div>
        <h2 
          className="text-xl font-bold text-gray-900 mb-4 pb-1"
          style={{ borderBottom: '1px solid #ff6347' }}
        >
          Distinctive features
        </h2>
        <ul className="space-y-2 text-gray-800 text-sm md:text-base">
          {[
            "Reasonable cost for accommodation & dining facilities",
            "Prayer Room",
            "TV Room",
            "24/7 uninterrupted electricity supply",
            "Purified fresh water supply from own Water Treatment Plant",
            "Hospital at the adjacent to the campus (Khwaja Yunus Ali Medical College & Hospital)",
            "On campus transaction facilities through Trust Bank Ltd., ATM booth opened for 24/7",
            "Large playground",
            "Attractive river view with peaceful study-friendly environment"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1.5 h-2.5 w-2.5 bg-black shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
	</>
);

export default Facility;
