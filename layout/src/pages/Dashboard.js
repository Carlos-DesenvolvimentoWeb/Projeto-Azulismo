import React from 'react';
import Navbar from '../components/Navbar';
import FilterBar from '../components/FilterBar';
import Footer from '../components/Footer';


function Dashboard() {
  return (
    <div>
       <Navbar />
       <FilterBar />
       <h1>Dashboard</h1>
       <Footer />
     </div>
  );
}

export default Dashboard;