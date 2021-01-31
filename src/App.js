import "./App.css";
import Header from "./components/HeaderComponent/header";
import Layout from "./components/LayoutComponent/layout";
import Footer from "./components/FooterComponent/footer";

import logo from "./assets/bg1.jpg";

const App = () => {
  return (
    <>
      <Header title="Pokemon Game" descr="" />
      <Layout
        id="1"
        title="Layout 1"
        descr="lorem*18"
        urlBg={logo}
        colorBg=""
      />
      <Layout
        id="2"
        title="Layout 2"
        descr="lorem*19"
        urlBg=""
        colorBg="green"
      />
      <Layout
        id="3"
        title="Layout 3"
        descr="lorem*20"
        urlBg="bg1.jpg"
        colorBg=""
      />
      <Footer />
    </>
  );
};

export default App;
