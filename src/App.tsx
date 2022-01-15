import React from "react";
import { Legendari } from "../src/components/Legendari";

export default function App() {
  let items = [
    {
      sourse: "http://muonlinewiki.com/images/b/b2/Leg_Helm.jpg",
      title: "Helm",
    },
    {
      sourse: "http://muonlinewiki.com/images/6/6d/Leg_Armor.jpg",
      title: "Armor",
    },
    {
      sourse: "http://muonlinewiki.com/images/5/55/Leg_Gloves.jpg",
      title: "Gloves",
    },
    {
      sourse: "http://muonlinewiki.com/images/b/ba/Leg_Pants.jpg",
      title: "Pants",
    },
    {
      sourse: "http://muonlinewiki.com/images/3/31/Leg_Boots.jpg",
      title: "Boots",
    },
  ];

  return (
    <div>
      <Legendari items={items} />
    </div>
  );
}
