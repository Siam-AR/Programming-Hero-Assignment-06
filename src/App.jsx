import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Steps from "./components/Steps/Steps";
import Pricing from "./components/Pricing/Pricing";
import FooterCTA from "./components/FooterCTA/FooterCTA";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar></Navbar>
      <Hero />
      <Steps />
      <Pricing />
      <FooterCTA />
    </div>
  );
}

export default App;
