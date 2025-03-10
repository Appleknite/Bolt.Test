import React from 'react';
import AboutHeader from './AboutHeader';
import AboutSection from './AboutSection';
import { sections } from './aboutData';

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AboutHeader />
        <div className="grid gap-8 mt-12">
          {sections.map((section, index) => (
            <AboutSection
              key={section.id}
              {...section}
              alternate={index % 2 === 1}
            />
          ))}
        </div>
        <div className="mt-16 text-center text-lg text-gray-700 italic">
          At QUICKPETRO, we don't just provide solutions; we create lasting partnerships for growth and success.
        </div>
      </div>
    </section>
  );
};

export default AboutUs;