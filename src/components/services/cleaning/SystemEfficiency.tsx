import React from 'react';
import { AlertTriangle } from 'lucide-react';

const SystemEfficiency = () => {
  return (
    <section className="bg-blue-50 rounded-xl p-8">
      <div className="flex items-start space-x-4">
        <AlertTriangle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
        <div>
          <h2 className="text-xl font-bold mb-4">Note on System Efficiency</h2>
          <p className="text-gray-600">
            Thermic fluid degradation leads to by-products such as soot, coke, and sludge 
            that reduce heat transfer efficiency and increase operational costs. Regular 
            system cleaning using LEGA-11 & LEGA-36 mitigates these risks and ensures 
            optimal performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SystemEfficiency;