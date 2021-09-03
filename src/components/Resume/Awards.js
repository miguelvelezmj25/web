import React from 'react';
import PropTypes from 'prop-types';

import Award from './Experience/Award';

const Awards = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="awards" />
    <div className="title">
      <h3>Awards & Honors</h3>
    </div>
    {data.map((job) => (
      <Award
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

Awards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Awards.defaultProps = {
  data: [],
};

export default Awards;
