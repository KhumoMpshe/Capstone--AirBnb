import Hero from "../components/Hero/Hero";
import Inspiration from "../components/Inspiration/Inspiration";
import Experiences from "../components/Experiences/Experiences";
import Footer from "../components/Footer/Footer";
import ShopAirbnb from "../components/ShopAirbnb/ShopAirbnb";
import FutureGateways from "../components/FutureGateways/FutureGateways";
import AskHost from "../components/AskHost/AskHost";

function Home() {
  return (
        <>
            <Hero />
            <Inspiration />
            <Experiences />
            <ShopAirbnb />
            <AskHost />
            <FutureGateways />
        </>
    );
}

export default Home;