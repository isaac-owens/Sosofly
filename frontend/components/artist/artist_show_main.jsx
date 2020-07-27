import React from 'react';

class ArtistShowMain extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <section className="artist-music"></section>
        <section className="artist-albums"></section>
        <section className="artist-singles artist-albums"></section>
        <section className="artist-appears-on artist-albums"></section>
      </div>
    )
  }
}

export default ArtistShowMain;