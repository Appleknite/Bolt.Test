import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactMap from '../components/contact/ContactMap';
import ContactCTA from '../components/contact/ContactCTA';

const ContactPage = () => {
  return (
    <div className="flex-grow">
      <ContactHero />
      <ContactInfo />
      <ContactMap />
      <ContactCTA />
    </div>
  );
};

export default ContactPage;