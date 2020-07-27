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
          <div className="artist-showpage-banner-img"></div>
          <div className="artist-img-gradient"></div>
          <div className="artist-banner-content">
            <span className="verified-badge">
              icon
              <span className="verified-text">Verified Artist</span>
            </span>
            <span className="artist-name-header">
              <h1>Artist Name</h1>
            </span>
            <span>### monthly listeners</span>
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