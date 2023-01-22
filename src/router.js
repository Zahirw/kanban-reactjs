
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeView from "./view/HomeView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/v1" />,
  },
  {
    path: "/v1",
    element: <HomeView />,
  },
]);

export default router