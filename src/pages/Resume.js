import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
// import Experience from '../components/Resume/Experience';
import Industry from '../components/Resume/Industry';
import Research from '../components/Resume/Research';
import Internship from '../components/Resume/Internship';
import Awards from '../components/Resume/Awards';

import degrees from '../data/resume/degrees';
// import positions from '../data/resume/positions';
import industry from '../data/resume/industry';
import research from '../data/resume/research';
import internship from '../data/resume/internship';
import awards from '../data/resume/awards';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const sections = [
  'Education',
  'Industry',
  'Research',
  'Internships',
  'Awards',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Miguel Velez's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
            &nbsp;
            &nbsp;
            &nbsp;
            <h4 className="cv"><a href={`${PUBLIC_URL}/Miguel Velez CV.pdf`}>[Download CV]</a></h4>
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Industry data={industry} />
      <Research data={research} />
      <Internship data={internship} />
      <Awards data={awards} />

    </article>
  </Main>
);

export default Resume;
