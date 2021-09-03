import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';

const Internship = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="internship" />
    <div className="title">
      <h3>Internships</h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

Internship.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Internship.defaultProps = {
  data: [],
};

export default Internship;
