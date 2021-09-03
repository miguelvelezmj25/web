import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/miguelvelez.jpg`} alt="" />
      </Link>
      <header>
        <h2>Miguel Velez</h2>
        <p><a href="mailto:mvelezce@cs.cmu.edu">mvelezce [at] cs.cmu.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Ph.D. Student in Software Engineering<br /> {' '}
        Carnegie Mellon University<br /> {' '}
        Institute for Software Research
      </p>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Miguel Velez
        {/* <Link to="/">cs.cmu.edu/~mvelezce</Link>. */}
      </p>
    </section>
  </section>
);

export default SideBar;
