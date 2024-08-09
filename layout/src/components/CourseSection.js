import React from 'react';
import CourseCard from './CourseCard';
import './CourseSection.css';

const CourseSection = ({ title }) => {
  return (
    <section className="course-section">
      <div className="section-header">
        <h2>{title}</h2>
        <a href="/">Ver mais &gt;</a>
      </div>
      <div className="course-cards">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </section>
  );
};

export default CourseSection;
