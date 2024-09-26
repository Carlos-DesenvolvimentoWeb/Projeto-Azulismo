import React from "react";
import NavbarLogin from "../components/NavbarLogin";
import FilterBar from "../components/FilterBar";
import Callback from "../components/Callback";
import Ccards from "../components/Ccards";

function Dashboard() {
  return (
    <div>
      <Callback />
      <NavbarLogin />
      <FilterBar />
      <Ccards />
    </div>
  );
}

export default Dashboard;
