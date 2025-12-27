import React from "react";
import PageHeader from "../../components/common/PageHeader";

const Classroom = () =>(
	<>
	<PageHeader title="Digital Classroom"/>
	<div className="max-w-7xl mx-auto p-6 bg-white font-sans">
      
      {/* Introductory Paragraph */}
      <p className="text-gray-800 mb-12 text-center md:text-left leading-relaxed">
        The classrooms of this department are well-equipped with the latest and most suitable digital technology and the entire campus is under the coverage of high-speed Wi Fi
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Do Section */}
        <div>
          <h2 
            className="text-2xl font-semibold text-center mb-6 pb-2"
            style={{ borderBottom: '3px solid #ff6347' }}
          >
            Do
          </h2>
          <ul className="space-y-3 text-gray-700">
            {[
              "Listen to your teachers",
              "Ask for clarification or help",
              "Ask relevant questions",
              "Keep calm and quiet"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 bg-black shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
         {/* Classroom Image at the Bottom */}
         <div className="mt-12 flex justify-center">
           <img
             src="https://www.kyau.edu.bd/images/classroom1.jpg"
             alt="Classroom"
             className="rounded-lg shadow-lg max-w-full h-auto"
             style={{ maxHeight: '400px' }}
           />
         </div>
         </div>

        {/* Don't Section */}
        <div>
          <h2 
            className="text-2xl font-semibold text-center mb-6 pb-2"
            style={{ borderBottom: '3px solid #ff6347' }}
          >
            Don't
          </h2>
          <ul className="space-y-3 text-gray-700">
            {[
              "Don't use cell phone",
              "Don't listen to music",
              "Don't misbehave with teachers",
              "Don't sleep",
              "Don't make out"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 bg-black shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
	</>
	
)

export default Classroom;
