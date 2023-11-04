import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import PhotoBook from "./Components/PhotoBook";
import PhotoShare from "./Components/PhotoShare";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <PhotoShare />
      <PhotoBook />
      <Footer />
    </div>
  );
};
export default App;
