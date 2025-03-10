import React, { useState } from 'react';
import MapContainer from './map/MapContainer';

const ContactMap = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleMapLoad = () => {
    setIsLoading(false);
  };

  const handleMapError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <MapContainer 
          isLoading={isLoading} 
          hasError={hasError} 
        />
      </div>
    </section>
  );
};

export default ContactMap;