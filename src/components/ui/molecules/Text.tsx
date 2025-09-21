import React, { type PropsWithChildren } from "react";

const Text: React.FC<
  PropsWithChildren & { size: number; className?: string }
> = ({ children, size, className }) => {
  switch (size) {
    case 1:
      return <h1 className={`font-habibi ${className}`}>{children}</h1>;
    case 2:
      return <h2 className={`font-gupter ${className}`}>{children}</h2>;
    case 3:
      return <h3 className={`font-gupter ${className}`}>{children}</h3>;
    case 4:
      return <h4 className={`font-gupter ${className}`}>{children}</h4>;
    case 5:
      return <h5 className={`font-gupter ${className}`}>{children}</h5>;
    default:
      return <h6 className={`font-habibi ${className}`}>{children}</h6>;
  }
};

export default Text;
