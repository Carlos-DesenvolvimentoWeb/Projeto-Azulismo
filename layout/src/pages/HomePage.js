import React from 'react';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import CourseSection from '../components/CourseSection';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="App">
       <Header />
       <FilterBar />
       <CourseSection title="Front-End" />
       <CourseSection title="Orientação Objeto" />
       <Footer />
     </div>
  );
}

export default HomePage;