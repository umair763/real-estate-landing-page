import { NavigationBar } from "../components/navigation.bar";
import { FooterSection } from "../components/footer.section";
import { useLocation } from "react-router-dom";

export const MainLayout = ({ children }) => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const isPropertyPage = location.pathname.startsWith("/properties") || location.pathname.startsWith("/invest") || location.pathname.startsWith("/projects");

  return (
    <>
      <NavigationBar transparent={isLandingPage || isPropertyPage} />
      {children}
      <FooterSection />
    </>
  );
};
