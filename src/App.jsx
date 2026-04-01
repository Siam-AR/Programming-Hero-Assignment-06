import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Stats from "./components/Stats/Stats";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar></Navbar>
      <Hero></Hero>
      <Stats></Stats>
    </div>
  );
}

export default App;
