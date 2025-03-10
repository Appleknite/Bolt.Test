import React from 'react';
import { CheckCircle } from 'lucide-react';

const benefits = [
  'Enhanced system cleanliness',
  'Prolonged equipment life with better wear protection',
  'Outstanding oxidation and thermal stability',
  'Excellent corrosion protection',
  'Good demulsifying properties and low foaming tendency',
  'Exceptional seal compatibility'
];

const Benefits = () => {
  return (
    <section className="bg-gray-50 rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Benefits of LEGA-11 & LEGA-36</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center space-x-3">
            <CheckCircle className="w-6 h-6 text-brand-brown flex-shrink-0" />
            <span className="text-gray-700">{benefit}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;