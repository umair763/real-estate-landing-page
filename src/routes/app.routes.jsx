import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "../pages/landing";
import { AboutPage } from "../pages/about";
import { ContactPage } from "../pages/contact";
import { PropertiesPage } from "../pages/properties";

export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/properties",
    element: <PropertiesPage />,
  },
]);
