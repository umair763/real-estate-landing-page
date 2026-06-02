import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout/main.layout";
import { LandingPage } from "../pages/landing.page";
import { AboutPage } from "../pages/about.page";
import { ContactPage } from "../pages/contact.page";
import { BuyPage } from "../pages/buy.page";
import { RentPage } from "../pages/rent.page";
import { SellPage } from "../pages/sell.page";
import { InvestmentPage } from "../pages/investment.page";
import { NeighborhoodGuidesPage } from "../pages/neighborhood.guides.page";
import { PropertyDetailsPage } from "../pages/property.details.page";

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
    path: "/properties/sell",
    element: (
      <MainLayout>
        <SellPage />
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
  {
    path: "/neighborhoods",
    element: (
      <MainLayout>
        <NeighborhoodGuidesPage />
      </MainLayout>
    ),
  },
  {
    path: "/property/:id",
    element: (
      <MainLayout>
        <PropertyDetailsPage />
      </MainLayout>
    ),
  },
]);
