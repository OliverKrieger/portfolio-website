import React from 'react';

interface LinkIconProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  url: string;
  linkClassName?: string;
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

const LinkedIcon: React.FC<LinkIconProps> = ({ Icon, url, linkClassName='', className = '', target = '_self', rel = '' }) => {
  return (
    <a href={url} target={target} rel={rel} className={`inline-block ${linkClassName}`}>
      <Icon className={`w-6 h-6 ${className}`} />
    </a>
  );
};

export default LinkedIcon;
