import React from 'react';

class ArtistShowMain extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <section className="artist-music">
          <div className="artist-main-section">
            <section className="artist-toptracks">
              <h1 className="artist-section-header">Popular</h1>
            </section>
          </div>
        </section>
        <section className="artist-albums">
          <div classNam="artist-main-section">

          </div>
        </section>
        <section className="artist-singles artist-albums">
          <div classNam="artist-main-section">

          </div>
        </section>
        <section className="artist-appears-on artist-albums">
          <div classNam="artist-main-section">

          </div>
        </section>
      </div>
    )
  }
}

export default ArtistShowMain;