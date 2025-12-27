import React from "react";

const Achievement = () =>{
	const cardData = [
    {
      id: 1,
      title: "Awards and prizes",
      description: "Congratulations to members of our community who have received awards and prizes for their research, professional or creative endeavou...",
      image: "https://www.kyau.edu.bd/images/acheivement1.jpg"
    },
    {
      id: 2,
      title: "Research grants and funding",
      description: "News about recent research grants and other funding",
      image: "https://www.kyau.edu.bd/images/acheivement2.jpg"
    },
    {
      id: 3,
      title: "Announcements",
      description: "Partnerships, gifts and achievements from across the University and our alumni",
      image: "https://www.kyau.edu.bd/images/acheivement3.jpg"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Layout: মোবাইলে ১টি, ট্যাবলেটে ২টি, ডেস্কটপে ৩টি কলাম */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {cardData.map((card) => (
            <div 
              key={card.id} 
              className="bg-white border border-gray-200 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Image Section */}
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 text-center flex flex-col grow">
                <h3 className="text-lg font-bold text-gray-700 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Achievement;
