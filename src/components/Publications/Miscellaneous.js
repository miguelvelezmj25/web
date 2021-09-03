import React from 'react';
import PropTypes from 'prop-types';

import Poster from './Publications/Poster';

const Miscellaneous = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="miscellaneous" />
    <div className="title">
      <h3>Miscellaneous</h3>
    </div>
    {data.map((job) => (
      <Poster
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

Miscellaneous.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Miscellaneous.defaultProps = {
  data: [],
};

export default Miscellaneous;
