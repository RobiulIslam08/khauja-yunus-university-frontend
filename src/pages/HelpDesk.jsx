import React from "react";
import PageHeader from "../components/common/PageHeader";
const contactData = [
    {
      title: "Office of the Registrar",
      address: "Enayetpur, Chouhali, Sirajganj - 6751,",
      cell: "+880 1404-461505",
      tell: "+880-2-588834442-4",
      email: "registrar@kyau.edu.bd"
    },
    {
      title: "Admission section:",
      address: "Enayetpur, Chouhali, Sirajganj - 6751,",
      cell: "+880 1404-461555",
      email: "admission@kyau.edu.bd"
    },
    {
      title: "Accounts Section:",
      address: "Enayetpur, Chouhali, Sirajganj - 6751,",
      cell: "+880 1404-461522",
      email: "treasurer@kyau.edu.bd"
    },
    {
      title: "Office of the Provost:",
      address: "Enayetpur, Chouhali, Sirajganj - 6751,",
      cell: "+880 1829-352218",
      tell: "+880-2-588834442-4",
      email: "provost@kyau.edu.bd"
    }
  ];
const HelpDesk = () =>(
	<>
	<PageHeader title="Help Desk"/>
	<div className="bg-white py-12 px-4 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">
          {contactData.map((item, index) => (
            <div key={index} className="text-gray-700">
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              
              {/* Address */}
              <p className="mb-1 text-sm font-medium">
                {item.address}
              </p>
              
              {/* Cell */}
              {item.cell && (
                <p className="text-sm">
                  <span className="font-bold">Cell: </span>
                  {item.cell}
                </p>
              )}
              
              {/* Telephone (Optional) */}
              {item.tell && (
                <p className="text-sm">
                  <span className="font-bold">Tell: </span>
                  {item.tell}
                </p>
              )}
              
              {/* Email */}
              {item.email && (
                <p className="text-sm">
                  <span className="font-bold">E-mail: </span>
                  <a href={`mailto:${item.email}`} className="hover:text-blue-600 transition-colors">
                    {item.email}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
	</>
)

export default HelpDesk;
