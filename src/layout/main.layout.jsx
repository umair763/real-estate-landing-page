import { NavigationBar } from "../components/navigation.bar";
import { FooterSection } from "../components/footer.section";
import { useLocation } from "react-router-dom";

export const MainLayout = ({ children }) => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <>
      <NavigationBar transparent={isLandingPage} />
      {children}
      <FooterSection />
    </>
  );
};
