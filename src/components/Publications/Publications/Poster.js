import React from 'react';
import PropTypes from 'prop-types';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Poster = ({ data }) => (
  <article className="paper-container">
    <header>
      <p className="paper">{data.authors}. <b>{data.title}</b>. {data.artifact}. <i>{data.venue}</i>, {data.date}. [<a href={`${PUBLIC_URL}/${data.poster}`}>PDF</a>]</p>
    </header>
  </article>
);

Poster.propTypes = {
  data: PropTypes.shape({
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    venue: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    artifact: PropTypes.string.isRequired,
  }).isRequired,
};

export default Poster;
