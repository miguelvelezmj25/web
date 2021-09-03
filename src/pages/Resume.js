import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Industry from '../components/Resume/Industry';

import degrees from '../data/resume/degrees';
import industry from '../data/resume/industry';

const sections = [
  'Education',
  'Experience',
  'Industry',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Miguel Velez."
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
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Experience data={industry} />
      <Industry data={industry} />

    </article>
  </Main>
);

export default Resume;
