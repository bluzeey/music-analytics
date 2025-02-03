/* eslint-disable @typescript-eslint/no-unused-vars */

import { ThemeProvider } from "../src/components/ui/theme-provider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./DashboardPage";
import NotFoundPage from "./NotFound";

function App() {
  // const [showSidebar, onSetShowSidebar] = useState(false);
  // const { setTheme } = useTheme();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
