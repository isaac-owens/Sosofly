import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import ArtistShowMain from '../../components/artist/artist_show_main';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    }

    this.id = parseInt(this.props.match.params.id);
  }

    componentDidMount() {
      this.loadData();
    }

    loadData() {
      this.setState({ data: this.props.fetchArtist(this.id) });
    }

  render() {
    let { artist } = this.props;
    let playCircle = <FontAwesomeIcon icon={faPlayCircle} size="5x" />;
    let ellipsis = <FontAwesomeIcon icon={faEllipsisH} size="3x" />;
    let verified = <FontAwesomeIcon icon={faCertificate} size="2x" />;
    if(!artist) {
      return <div></div>
    } else {

    return (
      <section className="artist-showpage-top-container">
        <div className="artist-showpage-banner">
          <div 
              // style={{ backgroundImage: `${artist.image}` }}
              // className="artist-showpage-banner-img"
          >
            <img
            src={artist.image}
            alt="artist image"
            className="artist-showpage-banner-img"/>
          </div>
          <div className="artist-img-gradient"></div>
          <div className="artist-banner-content">
            <span className="verified-badge">
              {verified}
              <span className="verified-text">Verified Artist</span>
            </span>
            <span className="artist-name-header-container">
              <h1 className="artist-name-header">{artist.name}</h1>
            </span>
            <span className="artist-monthly-listeners">### monthly listeners</span>
          </div>
        </div>
        <div className="artist-playbar-gradient"></div>
        <div className="artist-nav-container">
          <nav className="artist-nav-links-container">
            <ul className="artist-nav-links">
              <li className="artist-nav-link-item">
                <Link to={'#'} className="artist-nav-link">Overview</Link>
              </li>
              <li className="artist-nav-link">
                <Link to={'#'} className="artist-nav-link">Related Artists</Link>
              </li>
              <li className="artist-nav-link">
                <Link to={'#'} className="artist-nav-link">About</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="artist-playbar">
          <div className="artist-playbar-buttons">
            <button className="artist-playbar-play">{playCircle}</button>
            <button className="artist-follow-button">Follow</button>
            <div className="artist-contextmenu-wrapper">
              <button className="artist-contextmenu-button">
                <div className="artist-ellipsis">{ellipsis}</div>
              </button>
            </div>
          </div>
        </div>
        <ArtistShowMain /> 
      </section>
    )
    }
  }
}

export default ArtistShow;