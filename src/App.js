import "./Root.css";
import "./App.css";
import "./js/index";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import About from "./components/About";
import Utitle from "./components/Utitle";
import Kong from "./components/Kong";
import Redlable from "./components/Redlable";
import Roadmap from "./components/Roadmap";
import Partners from "./components/Partners";
import Meettheteam from "./components/Meettheteam";
import Faqs from "./components/Faqs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <>
      <Header />
      <About />
      <Utitle />
      <Kong />
      <Redlable />
      <Roadmap />
      <Partners />
      <Meettheteam />
      <Faqs />
    </>
  );
}

export default App;
