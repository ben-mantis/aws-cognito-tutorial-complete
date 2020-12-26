import React, { Fragment } from 'react';
import Hero from './Hero';
import HomeContent from './HomeContent';

export default function Home() {
  console.log("checking");
  console.log(process.env.TESTING);
  return (
    <Fragment>
      <Hero />
      <div className="box cta">
        <p className="has-text-centered">
          <span className="tag is-primary">New {console.log("checking")}{console.log(process.env.REACT_APP_TESTING)} </span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <HomeContent />
    </Fragment>
  )
}
