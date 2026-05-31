import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout/main.layout";
import { LandingPage } from "../pages/landing.page";
import { AboutPage } from "../pages/about.page";
import { ContactPage } from "../pages/contact.page";
import { PropertiesPage } from "../pages/properties.page";
import { BuyPage } from "../pages/buy.page";
import { RentPage } from "../pages/rent.page";
import { NewProjectsPage } from "../pages/new.projects.page";
import { InvestmentPage } from "../pages/investment.page";

export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <LandingPage />
      </MainLayout>
    ),
  },
  {
    path: "/about",
    element: (
      <MainLayout>
        <AboutPage />
      </MainLayout>
    ),
  },
  {
    path: "/contact",
    element: (
      <MainLayout>
        <ContactPage />
      </MainLayout>
    ),
  },
  {
    path: "/properties",
    element: (
      <MainLayout>
        <PropertiesPage />
      </MainLayout>
    ),
  },
  {
    path: "/properties/buy",
    element: (
      <MainLayout>
        <BuyPage />
      </MainLayout>
    ),
  },
  {
    path: "/properties/rent",
    element: (
      <MainLayout>
        <RentPage />
      </MainLayout>
    ),
  },
  {
    path: "/projects/new",
    element: (
      <MainLayout>
        <NewProjectsPage />
      </MainLayout>
    ),
  },
  {
    path: "/invest/plans",
    element: (
      <MainLayout>
        <InvestmentPage />
      </MainLayout>
    ),
  },
]);
