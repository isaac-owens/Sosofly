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
      </section>
    )
  }
}

export default ArtistShow;