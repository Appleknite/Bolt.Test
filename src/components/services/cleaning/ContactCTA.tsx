import React from 'react';
import { Phone } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="bg-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Optimize Your System?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Contact our experts today to discuss your system's specific needs and how 
          our cleaning solutions can help improve your operations.
        </p>
        <a
          href="tel:+919825044917"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-brand-brown 
            text-white hover:bg-brand-brown/90 transition-colors"
        >
          <Phone className="w-5 h-5 mr-2" />
          Call Us: +91-98250 44917
        </a>
      </div>
    </section>
  );
};

export default ContactCTA;