import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";

const App = () => {
  const theme = {
    colors: {
      header_bg: "#f5f5f5",
      gray_text: "#666666",
      white: "#fff",
      black: "#000",
      mobile_bg: "#fff",
      box_shadow: "1px 1px 8px 1px #e6e6e6",
    },

    fonts: {
      normal_para: "1.6rem",
      small_para: "1.4rem",

      normal_heading: "4rem",
      small_heading: "1.7rem",

      mobile_normal_heading: "3.5rem",
      mobile_normal_para: "1.5rem",
    },

    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
