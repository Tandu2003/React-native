import React from "react";

import { ColorProvider } from "@/components/navigation/ColorConText";
import HomePage from "@/components/layout/HomePage";

export default function App() {
  return (
    <ColorProvider>
      <HomePage />
    </ColorProvider>
  );
}
