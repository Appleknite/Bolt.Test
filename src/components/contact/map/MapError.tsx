import React from 'react';

const MapError = () => {
  return (
    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
      <div className="text-red-500">
        Unable to load the map. Please try again later.
      </div>
    </div>
  );
};

export default MapError;