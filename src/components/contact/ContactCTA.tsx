import React from 'react';

const ContactCTA = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-brand-brown mb-4">
          We're Here to Help!
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Have questions or need assistance? Contact us today, and we'll get back to you 
          as soon as possible!
        </p>
        <a
          href="mailto:support@quickpetro.com"
          className="inline-block bg-brand-brown text-white px-8 py-3 rounded-lg 
                   font-semibold hover:bg-brand-brown/90 transition-colors"
        >
          Send Us a Message
        </a>
      </div>
    </section>
  );
};

export default ContactCTA;