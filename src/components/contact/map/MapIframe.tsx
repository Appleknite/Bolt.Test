import React from 'react';

const MapIframe = () => {
  return (
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d546.0515966065486!2d72.640591374097!3d22.97295273887746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e889f2d41a47d%3A0xd95ca47d0f1d35c3!2sPushpak%20Trading%20Company!5e0!3m2!1sen!2sca!4v1735509717042!5m2!1sen!2sca"
      className="w-full h-full"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Shop No. 8, Radhe Estate, Vatva GIDC"
      aria-label="Map showing QUICKPETRO location at Radhe Estate, Vatva GIDC"
    />
  );
};

export default MapIframe;