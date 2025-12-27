import React from "react";
import PageHeader from "../../components/common/PageHeader";
const events = [
    {
      id: 1,
      src: "https://www.kyau.edu.bd/images/c3.jpg",
      alt: "Group of people at an event with awards",
      caption: "C1"
    },
    {
      id: 2,
      src: "https://www.kyau.edu.bd/images/c2.jpg",
      alt: "Pita festival with colorful decorations",
      caption: "Pita festival - 2021"
    },
    {
      id: 3,
      src: "https://www.kyau.edu.bd/images/c1.jpg",
      alt: "Large gathering of students under a canopy",
      caption: "C1"
    }
  ];
const CulturalClub = () => (
	<>
	<PageHeader title="Cultural Club"/>
	<div className="max-w-7xl mx-auto p-6 bg-white font-sans">
      
      {/* Introductory Paragraph */}
      <p className="text-gray-700 text-center mb-12 leading-relaxed">
        There’s always something going on at Khwaja Yunus Ali University. Our Student Affairs Office plans all kinds of activities and events throughout the academic year. Culture, sports, community service—the list goes on. Check out our events and make the most of your time in Madrid!
      </p>

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

export default CulturalClub;
