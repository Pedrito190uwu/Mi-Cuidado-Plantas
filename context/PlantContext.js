import React, { createContext, useContext } from "react";
import usePlants from "../hooks/usePlants";

const PlantContext = createContext();

export function PlantProvider({ children }) {
  const plantData = usePlants();
  
  return (
    <PlantContext.Provider value={plantData}>
      {children}
    </PlantContext.Provider>
  );
}

export function usePlantContext() {
  const context = useContext(PlantContext);
  if (!context) {
    throw new Error("usePlantContext must be used within PlantProvider");
  }
  return context;
}