import { createBrowserRouter } from "react-router-dom";
import { HomeScreen } from "./screens";
import ErrorScreen from "./screens/ErrorScreen";
import { AdminDashboardScreen } from "./screens/admin";

const App = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
    errorElement: <ErrorScreen />,
  },

  // Admin Links
  {
    path: "/admin/dashboard",
    element: <AdminDashboardScreen />,
    errorElement: <ErrorScreen />,
  },
]);

export default App;
