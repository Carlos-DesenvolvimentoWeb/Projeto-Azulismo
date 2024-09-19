import React from "react";
import NavbarLogin from "../components/NavbarLogin";
import FilterBar from "../components/FilterBar";
import Callback from "../components/Callback";
import Ccards from "../components/Ccards";
import FooterCcards from "../components/FooterCcards";

function Dashboard() {
  return (
    <div>
      <Callback />
      <NavbarLogin />
      <FilterBar />
      <Ccards />
      <FooterCcards />
    </div>
  );
}

export default Dashboard;
