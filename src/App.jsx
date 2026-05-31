import { RouterProvider } from "react-router-dom";
import { appRoutes } from "./routes";
import "./App.css";

function App() {
  return <RouterProvider router={appRoutes} />;
}

export default App;
