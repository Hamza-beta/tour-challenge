import "./styles.css";
import React from "react";
import Navig from "./components/navbar";
import Rolling from "./components/rolling";
import { useState } from "react";
import { Route } from "react-router";
import Addtour from "./components/addtour";
import Destination from "./components/tours";

export default function App() {
  const [tour, setTour] = useState([
    {
      name: "Tunisia",
      info:
        "Tunisia a country with a coast on the mediterranean sea to the north and a beatifull desert in the south",
      image: "/img/tunisia.jpg",
      price: 500,
      id: Math.floor(Math.random() * 10)
    },
    {
      name: "Turky",
      info: "Land of the great othmanian empire and the historique monuments",
      image: "/img/turkey.jpg",
      price: 300,
      id: Math.floor(Math.random() * 10)
    },
    {
      name: "Japan",
      info:
        "Land of the rising sun a very rich heritage of traditions and historical monuments",
      image: "/img/japan.jpg",
      price: "200",
      id: Math.floor(Math.random() * 10)
    },
    {
      name: "India",
      info:
        "India is known for the religious diversity ,famous for the street food",
      image: "/img/india.jpg",
      price: "300",
      id: Math.floor(Math.random() * 10)
    },
    {
      name: "Sri lanka",
      info:
        "Sri Lanka has a rich cultural heritage and the geographic location and deep harbours have made it one of the ancient Silk Road.",
      image: "/img/sirilanka.jpg",
      price: "",
      id: Math.floor(Math.random() * 10)
    }
  ]);
  return (
    <div className="App">
      <Navig />
      <Route exact path="/">
        <Rolling />
      </Route>
      <Route exact path="/Addtour">
        <Addtour tour={tour} setTour={setTour} />
      </Route>
      <Route exact path="/tour">
        <Destination tour={tour} />
      </Route>
    </div>
  );
}
