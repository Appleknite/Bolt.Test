import React from 'react';

const properties = [
  { parameter: 'Appearance', value: 'Clear' },
  { parameter: 'Kinematic Viscosity', value: '3-13 cSt at 40°C' },
  { parameter: 'Viscosity Index', value: '20-120' },
  { parameter: 'Flash Point (COC)', value: '20-160°C' },
  { parameter: 'Total Acidity', value: '0.07 mg KOH/g' }
];

const Properties = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Physical-Chemical Properties</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Parameter
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                LEGA-11 & LEGA-36
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {properties.map((prop, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {prop.parameter}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {prop.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Properties;