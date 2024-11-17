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

