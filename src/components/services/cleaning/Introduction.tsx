import React from 'react';
import { Info } from 'lucide-react';

const Introduction = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Professional Thermal System Cleaning
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed">
                Over time, thermal oil systems may encounter issues that simple fluid 
                replacement cannot resolve. A comprehensive system clean-out becomes 
                essential in such cases. Our expert team provides a detailed overview 
                and procedure for using LEGA-11 & LEGA-36 flushing fluids for effective cleaning.
              </p>
            </div>
          </div>
          <div className="w-full md:w-96 bg-blue-50 rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <Info className="w-6 h-6 text-brand-brown flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Why Choose Our Service?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  With over three decades of experience, we specialize in maintaining and 
                  optimizing thermal fluid systems. Our proven methods ensure maximum 
                  efficiency and prolonged system life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;