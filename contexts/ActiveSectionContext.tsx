import React, { createContext, useContext, useState } from "react";

interface ActiveSectionProviderProps {
  children: React.ReactNode;
}

const ActiveSectionContext = createContext("");

export const ActiveSectionProvider: React.FC<ActiveSectionProviderProps> = ({
  children,
}) => {
  const [activeSection, setActiveSection] = useState("");

  return (
    <ActiveSectionContext.Provider value={activeSection}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => useContext(ActiveSectionContext);
