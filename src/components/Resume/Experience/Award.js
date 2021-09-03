import React from 'react';
import PropTypes from 'prop-types';

const Award = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree award"><b>{data.name}</b>. {data.year}. {data.note}</h4>
    </header>
  </article>
);

Award.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired,
  }).isRequired,
};

export default Award;
