import NavbarComp from "./components/NavbarComp";
import HeroComp from "./components/HeroComp";
import GalleryComp from "./components/GalleryComp";
import ServiceComp from "./components/ServicesComp";
import FaqComp from "./components/FaqComp";
import FooterComp from "./components/FooterComp";
import OurTeam from "./components/OurTeam";

function App() {
  return (
    <div>
      <HeroComp />

      {/* Content */}
      <NavbarComp />
      <GalleryComp />
      <ServiceComp />
      <OurTeam />
      <FaqComp />
      {/* Content */}

      <FooterComp />
    </div>
  );
}

export default App;
