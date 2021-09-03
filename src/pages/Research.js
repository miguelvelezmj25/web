import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Journal from '../components/Publications/Journal';
import Conference from '../components/Publications/Conference';
import Thesis from '../components/Publications/Thesis';
import Report from '../components/Publications/Report';
import Miscellaneous from '../components/Publications/Miscellaneous';

import journals from '../data/publications/journals';
import conference from '../data/publications/conference';
import thesis from '../data/publications/thesis';
import report from '../data/publications/report';
import miscellaneous from '../data/publications/miscellaneous';

const sections = [
  'Journal',
  'Conference',
  'Thesis',
  'Reports',
  'Miscellaneous',
];

const Resume = () => (
  <Main
    title="Research"
    description="Miguel Velez's Research."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="research">Research</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Journal data={journals} />
      <Conference data={conference} />
      <Thesis data={thesis} />
      <Report data={report} />
      <Miscellaneous data={miscellaneous} />

    </article>
  </Main>
);

export default Resume;
