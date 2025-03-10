import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AboutSectionProps {
  title: string;
  content: string;
  icon: LucideIcon;
  alternate?: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  content,
  icon: Icon,
  alternate,
}) => {
  const highlightText = (text: string) =>
    text.split('QUICKPETRO').map((part, index, arr) =>
      index < arr.length - 1 ? (
        <React.Fragment key={`part-${index}`}>
          {part}
          <span className="text-brand-brown font-semibold">QUICKPETRO</span>
        </React.Fragment>
      ) : (
        part
      )
    );

  return (
    <div className={`p-4 md:p-6 lg:p-8 rounded-lg ${alternate ? 'bg-white' : 'bg-gray-50'}`}>
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
        <Icon className="w-8 h-8 text-brand-brown" />
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      <p className="text-gray-600 leading-relaxed text-base md:text-lg">
        {highlightText(content)}
      </p>
    </div>
  );
};

export default AboutSection;