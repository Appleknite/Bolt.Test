import React from 'react';
import CleaningHero from '../../components/services/cleaning/CleaningHero';
import Introduction from '../../components/services/cleaning/Introduction';
import ServiceList from '../../components/services/cleaning/ServiceList';
import FlushingProcedure from '../../components/services/cleaning/FlushingProcedure';
import Benefits from '../../components/services/cleaning/Benefits';
import Properties from '../../components/services/cleaning/Properties';
import SystemEfficiency from '../../components/services/cleaning/SystemEfficiency';
import ContactCTA from '../../components/services/cleaning/ContactCTA';

const CleaningPage = () => {
  return (
    <div className="flex-grow">
      <CleaningHero />
      <div className="space-y-0">
        <Introduction />
        <ServiceList />
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
          <FlushingProcedure />
          <Benefits />
          <Properties />
          <SystemEfficiency />
        </div>
        <ContactCTA />
      </div>
    </div>
  );
};

export default CleaningPage;