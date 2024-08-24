import React from 'react';
import Navbar from '../components/Navbar';
import FilterBar from '../components/FilterBar';
// import CourseSection from '../components/CourseSection';
import Footer from '../components/Footer';
import Intro from '../components/Intro';  
import Modos from '../components/Modos';
import SectionCards from '../components/SectionCards';
import SectionDepoiments from '../components/SectionDepoiments';
import { SectionResults } from '../components/SectionResults';


function HomePage() {
  return (
    <div className="App">
       <Navbar />
       <FilterBar />
       <Intro />
       <Modos />
       {/* <CourseSection title="Front-End" />
       <CourseSection title="Orientação Objeto" /> */}
       <SectionResults />
       <SectionCards />
       <SectionDepoiments />
       <Footer />
     </div>
  );
}

export default HomePage;