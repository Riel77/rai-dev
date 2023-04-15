import NavbarComp from "./components/NavbarComp";
import HeroComp from "./components/HeroComp";
import GalleryComp from "./components/GalleryComp";
import ServiceComp from "./components/ServicesComp";
import FaqComp from "./components/FaqComp";
import FooterComp from "./components/FooterComp";
import OurTeam from "./components/OurTeam";
import Content from "./components/ContentComp";
import KontakKami from "./components/KontakKami";

function App() {
  return (
    <div>
      <HeroComp />

      {/* Content */}
      <NavbarComp />
      <Content />
      <GalleryComp />
      <ServiceComp />
      <OurTeam />
      <FaqComp />
      <KontakKami />
      {/* Content */}

      <FooterComp />
    </div>
  );
}

export default App;
