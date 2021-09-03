import React from 'react';
import PropTypes from 'prop-types';

import Paper from './Publications/Paper';

const Conference = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="conference" />
    <div className="title">
      <h3>Refereed Conference Papers</h3>
    </div>
    {data.map((job) => (
      <Paper
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

Conference.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Conference.defaultProps = {
  data: [],
};

export default Conference;
