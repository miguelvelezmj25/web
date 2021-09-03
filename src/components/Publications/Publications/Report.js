import React from 'react';
import PropTypes from 'prop-types';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Thesis = ({ data }) => (
  <article className="paper-container">
    <header>
      <p className="paper">{data.authors}. <b>{data.title}</b>. {data.venue}, {data.date}. [<a href={`${PUBLIC_URL}/${data.link}`}>PDF</a>]</p>
    </header>
  </article>
);

Thesis.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    venue: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Thesis;
