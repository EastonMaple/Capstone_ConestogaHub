import React from 'react';
import { Link, Navigate } from 'react-router-dom';

export const wikiPagesDict = {
    "part time jobs" : "/WikiPage",
    "health insurance" : "/WikiPage2",
    "work permit" : "/WikiPage3",
    "study permit" : "/WikiPage4",


}

const WikiIndex = () => {
  return (
    <div className='wiki'>
      <h1>Our wiki</h1>
      <h2>Here you will find articles you may find helpful as you start college terms!</h2>
      <ul className='my-list'>
        <Link to = {wikiPagesDict["part time jobs"]}><li>How to find part-time jobs</li></Link>
        <li>How to apply for study permit (and extension)</li>
        <Link to = {wikiPagesDict["work permit"]}><li>How to apply for work permit</li></Link>
        <Link to = {wikiPagesDict["health insurance"]}><li>Health Insurance</li></Link>
        <li>How to find your timetable</li>
        <li>How to find room for rent</li>
        <li>How to apply for G1 license</li>
        <li>Immigration Information for students</li>
        <li>Immigration information for family members</li>
        <li>Social insurance number for international students</li>
        <li>Introduction to conestoga college learning</li>
        <li>Familiarize new students with banking services</li>
        <li>Local and regional transportation</li>
        <li>Familiarize new students with mobile services</li>
      </ul>
    </div>
  );
}

export default WikiIndex;