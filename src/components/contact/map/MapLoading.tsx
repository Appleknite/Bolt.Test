import React from 'react';

const MapLoading = () => {
  return (
    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
      <div className="animate-pulse text-gray-500">Loading map...</div>
    </div>
  );
};

export default MapLoading;