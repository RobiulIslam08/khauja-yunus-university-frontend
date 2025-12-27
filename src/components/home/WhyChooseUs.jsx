import React from 'react';
import { Building, HeartPulse, Laptop, FlaskConical, BookOpen, Accessibility } from 'lucide-react';

// Data extracted from the image
const features = [
  {
    id: 1,
    title: "Accommodation",
    // Using Building icon for dormitory
    icon: Building,
    description: "Khwaja Yunus Ali University (KYAU) provides accommodation facilities for both male and female students in the secure atmosphere. There are two students' dormitory - one for male and another for female students. Both have 256 students capacity respectively."
  },
  {
    id: 2,
    title: "Health-care",
    // Using HeartPulse for health-care
    icon: HeartPulse,
    description: "We consider solving the health issues of our students as one of the important prerequisites in maintaining their academic activities uninterrupted. If a student becomes sick during his/her academic tenure, s/he can avail a unique opportunity of treatment facilities which will be provided by Khwaja Yunus Ali University."
  },
  {
    id: 3,
    title: "Modern Computer Lab",
    // Using Laptop for computer lab
    icon: Laptop,
    description: "The university has a modern central computer lab providing computing and internet facilities to the students and faculty members/officers. The laboratory is maintained by experienced teachers and equipped with sufficient numbers of computers so that each of the students can use one computer to follow the lecture."
  },
  {
    id: 4,
    title: "Laboratory",
    // Using FlaskConical for science laboratories
    icon: FlaskConical,
    description: "The University has its own laboratories for the Departments of Biochemistry & Biotechnology, Microbiology, Pharmacy, Textile Engineering, Medical Physics, CSE, EEE and MIS"
  },
  {
    id: 5,
    title: "Library",
    // Using BookOpen for library
    icon: BookOpen,
    description: "KYAU library is going to run through a fully automated system, the \"KOHA Integrated Library Management System\" and \"Greenstone Digital Library Software\", and also offer a full range of information and enquiry services with the help of modern techniques and technologies."
  },
  {
    id: 6,
    title: "Co-Curricular Activities",
    // Using Accessibility as a generic human figure for activities
    icon: Accessibility,
    description: "Khwaja Yunus Ali University highly inspires the co-curricular activities of the students. We celebrate our important red letter days of our cultural and history, and organize discussions and cultural programs as well."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title Banner */}
        <div className="bg-[#0a0040] text-white text-center py-3 rounded-t-lg">
          <h2 className="text-xl font-bold">Why Choose Us</h2>
        </div>

        {/* Grid Container:
          - Creates the 3x2 grid layout on large screens.
          - Uses `gap-px` with a `bg-gray-200` background to create the thin borders between cards.
          - `rounded-b-lg` completes the rounded corners started by the banner.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-b-lg overflow-hidden shadow-sm">
          {features.map((feature) => (
            // Individual Card
            <div key={feature.id} className="bg-white p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              {/* Icon with orange color */}
              <feature.icon className="w-12 h-12 text-orange-500 mb-4" strokeWidth={1.5} />

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>

              {/* Description with justified text */}
              <p className="text-sm text-gray-600 text-justify leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;