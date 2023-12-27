import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/footer/Footer";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import RefineryPage from "./pages/RefineryPage";
import FloilCaresPage from "./pages/FloilCaresPage";
import RecipesPage from "./pages/RecipesPage";
import SinglePageOfProducts from "./pages/SinglePageOfProducts";


function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produktet-tona" element={<ProductPage />} />
          <Route path="/produktet-tona/:productID" element={<SinglePageOfProducts />} />
          <Route path="/historiku" element={<AboutUsPage />} />
          <Route path="/kontakti" element={<ContactPage />} />
          <Route path="/rafineria-floil" element={<RefineryPage />} />
          <Route path="/floil-cares" element={<FloilCaresPage />} />
          <Route path="/recetat" element={<RecipesPage />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
