import React from "react";

interface LogoImageProps {
  className?: string;
}

const LogoImage = ({ className = "h-12 w-auto" }: LogoImageProps) => {
  return (
    <img 
      src="/logo-new.gif" 
      alt="Los Cabos Soccer Tournament Logo" 
      className={className}
    />
  );
};

export default LogoImage;
