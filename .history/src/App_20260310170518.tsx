import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import ValueAdded from "./sections/ValueAdded/ValueAdded";
import Market from "./sections/Market/Market";
import SupplyChain from "./sections/SupplyChain/SupplyChain";
import Products from "./sections/Products/Products";
import Auction from "./sections/Auction/Auction";
import Journey from "./sections/Journey/Journey";
import JoinNetwork from "./sections/JoinNetwork/JoinNetwork";
// import Founder from './sections/Founder/Founder';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ValueAdded />
        <SupplyChain />
        <Products />
        <Market />

        <Auction />
        <Journey />
        <JoinNetwork />
      </main>
      <Footer />
    </>
  );
}

export default App;
