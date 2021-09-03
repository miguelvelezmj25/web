import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';

const Research = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="research" />
    <div className="title">
      <h3>Research Experience</h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

Research.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Research.defaultProps = {
  data: [],
};

export default Research;
