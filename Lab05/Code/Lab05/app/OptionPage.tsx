import OptionPage from "@/components/layout/OptionPage";
import { ColorProvider } from "@/components/navigation/ColorConText";

export default function App() {
  return (
    <ColorProvider>
      <OptionPage />
    </ColorProvider>
  );
}
