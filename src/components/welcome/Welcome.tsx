import React from 'react';
import WelcomeHeader from './WelcomeHeader';
import Introduction from './Introduction';

const Welcome = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <WelcomeHeader />
        <Introduction />
      </div>
    </section>
  );
};

export default Welcome;