import NavbarComp from "./components/NavbarComp";
import HeroComp from "./components/HeroComp";
import GalleryComp from "./components/GalleryComp";
import ServiceComp from "./components/ServicesComp";
import FaqComp from "./components/FaqComp";
import FooterComp from "./components/FooterComp";
import OurTeam from "./components/OurTeam";
import Content from "./components/ContentComp";
import KontakKami from "./components/KontakKami";
// import Counter from "./components/Counter";

import React, { useState, useEffect } from "react";

function App() {
  const [merchants, setMerchants] = useState(false);
  useEffect(() => {
    getMerchant();
  }, []);
  function getMerchant() {
    fetch("https://goldfish-app-jjp9x.ondigitalocean.app")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        setMerchants(data);
      });
  }
  function createMerchant() {
    let CountID = prompt("Enter CountID");
    let Count = prompt("Enter count");
    fetch("https://goldfish-app-jjp9x.ondigitalocean.app/merchants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ CountID, Count }),
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getMerchant();
      });
  }
  function deleteMerchant() {
    let CountID = prompt("Enter merchant CountID");
    fetch(
      `https://goldfish-app-jjp9x.ondigitalocean.app/merchants/${CountID}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getMerchant();
      });
  }

  return (
    <div>
      <HeroComp />
      {merchants ? merchants : "There is no merchant data available"}
      <br />
      <button onClick={createMerchant}>Add merchant</button>
      <br />
      <button onClick={deleteMerchant}>Delete merchant</button>

      {/* Content */}
      <NavbarComp />
      <Content />
      <GalleryComp />
      <ServiceComp />
      <OurTeam />
      <FaqComp />
      <Contoh />
      <KontakKami />
      {/* <Counter /> */}
      {/* Content */}

      <FooterComp />
    </div>
  );
}

export default App;
