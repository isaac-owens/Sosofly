import React from 'react';

class Landing extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <section>
        <section>
          <div className={webplayerClassNames}>
            {/* <PlaylistCollection /> */}
            <section className={playlistCollection}>
              <div className={playlistClassNames}>
                <div className={playlistCollectionHeaderGrid}>
                  <div className={playlistCollectionHeaderFlex}>
                    <div className={playlistCollectionHeaderWidth}>
                      <h2 className={playlistCollectionHeader}>
                        <Link to="#" className={GenreHeaderLink}>
                          My Playlists
                        </Link>
                      </h2>
                    </div>
                    <Link to="#" className={GenreIndexLink}>
                      <span>See all</span>
                    </Link>
                  </div>
                </div>
                {this.props.playlists.length > 0
                  ? this.props.playlists.map((playlist) => {
                      return (
                        <PlaylistItem playlist={playlist} key={playlist.id} />
                      );
                    })
                  : ""}
              </div>
            </section>
          </div>
        </section>
      </section>
    );
  }
}

export default Landing;