import React from 'react';

class ArtistShowMain extends React.Component {
  constructor(props){
    super(props);
  }


  render() {

    const { artist, albums } = this.props;

    console.log(albums);
    return (
      <div>
        {/* <section className="artist-music">
          <div className="artist-main-section">
            <section className="artist-toptracks">
              <h1 className="artist-section-header">Popular</h1>
              <section className="artist-tracklist-container">
                <ol className="artist-tracklist">
                  <li>Track One</li>
                  <li>Track Two</li>
                  <li>Track Three</li>
                  <li>Track Four</li>
                  <li>Track Five</li>
                </ol>
              </section>
            </section>
          </div>
        </section> */}
        <section className="artist-albums">
          <div className="artist-main-section">
          </div>
        </section>
        <section className="artist-singles artist-albums">
          <div className="artist-main-section">
            <h1 className="artist-section-header">Albums</h1>
            <div className="artist-albums-container-fluid">
              <div className="album-row">
                  <div className="album">
                    <div className="album-object">
                      <div className="album-object-hoverable">
                        <div className="album-info">
                          {albums.map(album => {
                            return typeof album === 'undefined' ? 
                            "nothing to see here" : 
                            <img src={album.image} key={album.id}></img>
                          })}
                        </div>
                      </div>
                    </div>
                  </div> 
              </div>
            </div>
          </div>
        </section>
        {/* <section className="artist-appears-on artist-albums">
          <div className="artist-main-section">
            <h1 className="artist-section-header">Singles and EPs</h1>
            <div className="artist-albums-container-fluid">
              <div className="album-row">
                <div className="album">
                  <div className="album-object">
                    <div className="album-object-hoverable">
                      <div className="album-info">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    )
  }
}

export default ArtistShowMain;