import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface ScrollLinkProps extends LinkProps {
  className?: string;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ children, ...props }) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ScrollLink;