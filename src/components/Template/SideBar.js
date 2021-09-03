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
      <p>Hi, I&apos;m Miguel!
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
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
