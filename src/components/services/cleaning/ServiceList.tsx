import React from 'react';
import { Droplet, Filter, Wrench, Gauge } from 'lucide-react';

const services = [
  {
    icon: Droplet,
    title: 'System Flushing',
    description: 'Complete thermal fluid system flushing using LEGA-11 & LEGA-36.',
    price: '₹25,000',
  },
  {
    icon: Filter,
    title: 'Filtration Service',
    description: 'Advanced filtration to remove contaminants and particles.',
    price: '₹15,000',
  },
  {
    icon: Wrench,
    title: 'System Maintenance',
    description: 'Comprehensive system inspection and maintenance.',
    price: '₹20,000',
  },
  {
    icon: Gauge,
    title: 'Performance Testing',
    description: 'Detailed analysis and testing of system performance.',
    price: '₹10,000',
  },
];

const ServiceList = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Our Cleaning Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Icon className="w-8 h-8 text-brand-brown mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-lg font-bold text-brand-brown">
                  Starting at {service.price}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;