<<<<<<< HEAD
import { useEffect } from "react";
import Ecosystem from "./pages/Ecosystem";
import FeatureList from "./pages/FeatureList";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import "aos/dist/aos.css";

const App: React.FC = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      
      <div>
        <Home />
        <Ecosystem />
        <Products />
        <FeatureList />
        <Footer />
      </div>
    </>
  );
};


export default App;

=======
import Ecosystem from "./pages/Ecosystem";
import FeatureList from "./pages/FeatureList";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";

const App: React.FC = () => {
  return (
    <>
      
      <div>
        <Home />
        <Ecosystem />
        <Products />
        <FeatureList />
        <Footer />
      </div>
    </>
  );
};


export default App;

>>>>>>> a559dd53e30a15eb347f0b9ebf49b01babc183d3
