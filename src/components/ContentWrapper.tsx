import React from "react";

interface ContentWrapperProps {
  children: React.ReactNode;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-red-100 border-2 border-red-500">
      {children}
    </div>
  );
};

export default ContentWrapper;