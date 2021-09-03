import React from 'react';
import PropTypes from 'prop-types';

import Paper from './Publications/Report';

const Report = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="reports" />
    <div className="title">
      <h3>Technical Reports</h3>
    </div>
    {data.map((job) => (
      <Paper
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

Report.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Report.defaultProps = {
  data: [],
};

export default Report;
