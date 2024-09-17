import React from 'react';
import NavbarLogin from '../components/NavbarLogin';
import FilterBar from '../components/FilterBar';
import Footer from '../components/Footer';
import Callback from "../components/Callback"

function Dashboard() {
  return (
    <div>
      <Callback />
      <NavbarLogin />
      <FilterBar />
      <h1>Dashboard</h1>
      <Footer />
    </div>
  );
}

export default Dashboard;