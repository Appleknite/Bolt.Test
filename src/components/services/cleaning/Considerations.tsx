import React from 'react';
import { CircleDot } from 'lucide-react';

const considerations = [
  { title: 'Drain Points', description: 'Identify the number and locations of system drain points.' },
  { title: 'Time Frame', description: 'Determine the available time for cleaning or fluid changeover.' },
  { title: 'Fluid Compatibility', description: 'Assess the condition and compatibility of the existing fluid.' },
  { title: 'Manpower', description: 'Evaluate the available workforce to perform the clean-out.' },
];

const Considerations = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Key Considerations for System Clean-Out</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {considerations.map((item, index) => (
          <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
            <CircleDot className="w-6 h-6 text-brand-brown flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-gray-600 italic">
        Every system is unique, so a single detailed procedure may not suit all cases. 
        Contact QUICK PETRO Team at <a href="tel:+919825044917" className="text-brand-brown hover:underline">
        +91-98250 44917</a> to discuss the procedure best suited to your system.
      </p>
    </section>
  );
};

export default Considerations;