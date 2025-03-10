import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
  link: string;
  linkText: string;
  external?: boolean;
}

const ContactCard = ({ icon: Icon, title, content, link, linkText, external }: ContactCardProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center">
      <Icon className="w-12 h-12 text-brand-brown mx-auto mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{content}</p>
      <a
        href={link}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="inline-flex items-center text-brand-brown hover:text-brand-brown/80 font-semibold transition-colors"
      >
        {linkText}
      </a>
    </div>
  );
};

export default ContactCard;