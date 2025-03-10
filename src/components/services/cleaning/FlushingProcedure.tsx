import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const recommendations = [
  'The system is not heavily fouled.',
  'Fluids are chemically compatible.',
  'The system can be completely drained without difficulty.',
  'Time constraints exist.',
];

const steps = [
  {
    title: 'Heat the System',
    description: 'Operate at 302°F (150°C) to 347°F (175°C) to suspend loose particulates in the thermal fluid.'
  },
  {
    title: 'Circulate and Cool',
    description: 'After 36 to 48 hours, stop the heater and allow the temperature to drop to 230°F (110°C) while keeping the circulation pump running.'
  },
  {
    title: 'Drain the System',
    description: 'Once cooled to 230°F (110°C), stop the pump and promptly drain the fluid from all low points. Install additional drains if necessary.'
  },
  {
    title: 'Refill with Flushing Fluid',
    description: 'Fill the system with LEGA-11 or LEGA-36, ensuring air pockets are eliminated by filling from low points and venting high points.'
  },
  {
    title: 'Circulate and Monitor',
    description: 'Circulate the flushing fluid at 400°F (205°C) for up to 72 hours. Drain at 225°F (108°C).'
  },
  {
    title: 'Final Drain and Refill',
    description: 'Refill with the appropriate thermal fluid and resume normal operation.'
  }
];

const FlushingProcedure = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">
        Option 1: Flushing with LEGA-11 & LEGA-36 Flushing Fluids
      </h2>
      <p className="text-gray-600 mb-8">
        LEGA-11 & LEGA-36 are specifically designed with deep hydro-finished base stocks 
        and select additives to enhance oxidation stability, anti-rust characteristics, 
        and anti-wear properties.
      </p>

      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Recommended When:</h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {recommendations.map((item, index) => (
            <li key={index} className="flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-6">Procedure:</h3>
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-brown text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlushingProcedure;