import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/footer/Footer";
import AboutUsPage from "./pages/AboutUsPage";


function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produktet-tona" element={<ProductPage />} />
          <Route path="/historiku" element={<AboutUsPage />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
