import React from 'react';
import PropTypes from 'prop-types';

import Job from './Industry/Job';

const Industry = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="industry" />
    <div className="title">
      <h3>Industry Experience</h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

Industry.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Industry.defaultProps = {
  data: [],
};

export default Industry;
