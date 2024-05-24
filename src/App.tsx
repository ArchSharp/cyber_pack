import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import * as routes from "./Data/Routes";
import { Home } from "./Screens/Home";
import Error from "./Components/Error";
import { Footer } from "./Components/Footer";
import { CustomSoftwareDev } from "./Screens/CustomSoftwareDev";
import { MobileAppDev } from "./Screens/MobileAppDev";
import { WebAppServices } from "./Screens/WebAppServices";
import { UxReviewAnalysis } from "./Screens/UxReviewAnalysis";
import { UxDesign } from "./Screens/UxDesign";
import { UiDesign } from "./Screens/UiDesign";
import { OtherServices } from "./Screens/OtherServices";

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
        <Route
          path={routes.webAppServices}
          index
          element={<WebAppServices />}
        />
        <Route path={routes.mobileAppDev} index element={<MobileAppDev />} />
        <Route
          path={routes.uxReviewAnalysis}
          index
          element={<UxReviewAnalysis />}
        />
        <Route path={routes.uxDesign} index element={<UxDesign />} />
        <Route path={routes.uiDesign} index element={<UiDesign />} />
        <Route
          path={routes.uxOtherServices}
          index
          element={<OtherServices />}
        />
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
