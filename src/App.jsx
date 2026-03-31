import "./App.css";
import FooterCTA from "./components/FooterCTA/FooterCTA";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import Stats from "./components/Stats/Stats";
import Steps from "./components/Steps/Steps";
import PurchasePage from "./pages/PurchasePage";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar></Navbar>
      <Hero></Hero>
      <Stats></Stats>
      <PurchasePage></PurchasePage>
      <Steps></Steps>
      <Pricing></Pricing>
      <FooterCTA></FooterCTA>
    </div>
  );
}

export default App;
