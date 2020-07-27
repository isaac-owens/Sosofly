import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { artist } = this.props;
    let playCircle = <FontAwesomeIcon icon={faPlayCircle} size="5x" />;
    let ellipsis = <FontAwesomeIcon icon={faEllipsisH} size="3x" />;
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
            <span className="artist-name-header-container">
              <h1 className="artist-name-header">Artist Name</h1>
            </span>
            <span className="artist-monthly-listeners">### monthly listeners</span>
          </div>
        </div>
        <div className="artist-playbar-gradient"></div>
        <div className="artist-playbar">
          <div className="artist-playbar-buttons">
            <button className="artist-playbar-play">{playCircle}</button>
            <button className="artist-follow-button">Follow</button>
            <div classname="artist-contextmenu-wrapper">
              <button className="artist-contextmenu-button">
                <div className="artist-ellipsis">{ellipsis}</div>
              </button>
            </div>
          </div>
        </div>
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