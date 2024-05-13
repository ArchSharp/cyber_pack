import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import * as routes from "./Data/Routes";
import { Home } from "./Screens/Home";
import Error from "./Components/Error";
import { Footer } from "./Components/Footer";
import { CustomSoftwareDev } from "./Screens/CustomSoftwareDev";
import { MobileAppDev } from "./Screens/MobileAppDev";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={routes.homepage} index element={<Home />} />
        <Route
          path={routes.custSoftDev}
          index
          element={<CustomSoftwareDev />}
        />
        <Route path={routes.mobileAppDev} index element={<MobileAppDev />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
