import React from 'react';
import Navbar from '../components/Navbar';
import FilterBar from '../components/FilterBar';
import Footer from '../components/Footer';
import Callback from "../components/Callback"

function Dashboard() {
  return (
    <div>
      <Callback />
      <Navbar />
      <FilterBar />
      <h1>Dashboard</h1>
      <Footer />
    </div>
  );
}

export default Dashboard;