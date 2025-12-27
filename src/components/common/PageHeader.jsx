import React from 'react';

const PageHeader = ({ title }) => {
  return (
    // Background Color set to dark navy (#0a0040) matching your theme
    <section className="bg-[#0a0040] w-full py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title Text */}
        <h1 className="text-center text-3xl md:text-4xl font-medium text-slate-500 tracking-wide capitalize">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default PageHeader;