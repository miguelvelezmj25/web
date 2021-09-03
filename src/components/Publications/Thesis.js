import React from 'react';
import PropTypes from 'prop-types';

import Paper from './Publications/Thesis';

const Thesis = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="thesis" />
    <div className="title">
      <h3>Thesis</h3>
    </div>
    {data.map((job) => (
      <Paper
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

Thesis.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Thesis.defaultProps = {
  data: [],
};

export default Thesis;
