import React from "react";
import PageHeader from "../../components/common/PageHeader";
const events = [
    {
      id: 1,
      src: "https://www.kyau.edu.bd/images/blood1.jpeg",
      alt: "Voluntary Blood Donation Program-2022",
      caption: "Voluntary Blood Donation Program-2022"
    },
   
  ];
const BloodDonationClub = () => (
	<>
	<PageHeader title="Blood Donation Club"/>
	<div className="max-w-7xl mx-auto p-6 bg-white font-sans">
      
     
      {/* Image Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event) => (
          <div key={event.id} className="flex flex-col">
            {/* Image with Frame Style */}
            <div className="bg-white p-2 shadow-md rounded-sm">
              <img 
                src={event.src} 
                alt={event.alt} 
                className="w-full h-64 object-cover"
              />
            </div>
            {/* Caption */}
            <p className="text-center text-gray-600 mt-4">
              {event.caption}
            </p>
          </div>
        ))}
      </div>

    </div>
	</>
)

export default BloodDonationClub;
