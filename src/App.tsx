import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import * as routes from "./Data/Routes";
import { Home } from "./Screens/Home";
import Error from "./Components/Error";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={routes.homepage} index element={<Home />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
