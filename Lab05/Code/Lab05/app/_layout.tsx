import { Slot } from "expo-router";
import React from "react";
import { ColorProvider } from "@/components/navigation/ColorConText";

export default function _layout() {
  return (
    <ColorProvider>
      <Slot />
    </ColorProvider>
  );
}
