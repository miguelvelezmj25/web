import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Miguel Velez's personal website."}
  >
    <article className="post" id="index">
      <h2 data-testid="heading"><Link to="/">About me</Link></h2>
      <p>
        My research interest is in using static and dynamic program analyses to investigate the performance {' '}
        behavior of configurable software systems. {' '}
        Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link> {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
