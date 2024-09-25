import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

import InfoPhone from "@/constants/InfoPhone";
import { ImageSourcePropType } from "react-native";

interface ColorContextType {
  color: ImageSourcePropType;
  setColor: (color: ImageSourcePropType) => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

interface ColorProviderProps {
  children: ReactNode;
}

export const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
  const [color, setColor] = useState<ImageSourcePropType>(InfoPhone.color.blue.uri);

  console.log("abc", InfoPhone.color.blue.uri);

  return <ColorContext.Provider value={{ color, setColor }}>{children}</ColorContext.Provider>;
};

export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
};
