import React from 'react';
import MapLoading from './MapLoading';
import MapError from './MapError';
import MapIframe from './MapIframe';

interface MapContainerProps {
  isLoading: boolean;
  hasError: boolean;
}

const MapContainer: React.FC<MapContainerProps> = ({ isLoading, hasError }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg h-[450px]">
      {isLoading && <MapLoading />}
      {hasError && <MapError />}
      <MapIframe />
    </div>
  );
};

export default MapContainer;