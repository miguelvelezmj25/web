import React from 'react';
import PropTypes from 'prop-types';

import JournalPaper from './Publications/Journal';

const Journal = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="journal" />
    <div className="title">
      <h3>Refereed Journal Articles</h3>
    </div>
    {data.map((job) => (
      <JournalPaper
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

Journal.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Journal.defaultProps = {
  data: [],
};

export default Journal;
