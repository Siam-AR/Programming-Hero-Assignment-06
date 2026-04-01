import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Stats from "./components/Stats/Stats";
import Steps from "./components/Steps/Steps";
import PurchasePage from "./pages/PurchasePage";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar></Navbar>
      <Hero></Hero>
      <Stats></Stats>
      <PurchasePage></PurchasePage>
      <Steps></Steps>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
