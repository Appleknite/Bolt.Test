import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactCard from './ContactCard';

const contactDetails = [
  {
    icon: Phone,
    title: 'Call Us',
    content: '+1 (123) 456-7890',
    link: 'tel:+11234567890',
    linkText: 'Call Now'
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'support@quickpetro.com',
    link: 'mailto:support@quickpetro.com?subject=Inquiry',
    linkText: 'Send Email'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    content: '123 QUICKPETRO Lane, Ahmedabad, India',
    link: 'https://www.google.com/maps',
    linkText: 'Get Directions',
    external: true
  }
];

const ContactInfo = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {contactDetails.map((detail, index) => (
            <ContactCard key={index} {...detail} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;