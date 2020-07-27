import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";


class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="artist-showpage-top-container">
        <div className="artist-showpage-banner">
          <div className="artist-showpage-banner-img">
            
          </div>
        </div>
        <div className="artist-playbar"></div>
        <div className="artist-nav-links"></div>
        <div>
          <section className="artist-music"></section>
          <section className="artist-albums"></section>
          <section className="artist-singles artist-albums"></section>
          <section className="artist-appears-on artist-albums"></section>
        </div>
      </section>
    )
  }
}

export default ArtistShow;