import React from 'react';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);

    this.id = parseInt(this.props.match.params.id);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.id);
  }

  render() {
    return(
      <div>Album Show Page!</div>
    )

    // if (
    //   !album
    // ) {
    //   return <div></div>;
    // } else {
    //   return (
    //     <section className={playlistShowPageTopContainer}>
    //       <div className={playlistShowHeader}>
    //         <div className={playlistShowHeaderSetup}></div>
    //         <div className={playlistShowHeaderGradient}></div>
    //         <div></div>
    //         <div className={playlistShowHeaderImageBox}>
    //           <div className={playlistShowHeaderImage}>
    //             <img
    //               src={playlist.image}
    //               alt="playlist image"
    //               className={playlistShowHeaderImage}
    //             />
    //           </div>
    //         </div>
    //         <div className={playlistShowHeaderBanner}>
    //           <h2 className={playlistShowHeaderSubBanner}>
    //             {playlist.title}
    //           </h2>
    //           <span className={playlistShowHeaderTitleBox}>
    //             <h1 className={playlistShowHeaderTitle}>
    //               {playlist.title}
    //             </h1>
    //           </span>
    //         </div>
    //       </div>
    //       <div className={playlistTopColor}></div>
    //       <div className={playlistControlsBox}>
    //         <div className={playlistControls}>
    //           <button className={playlistShowPlayButon}>{playCircle}</button>
    //           <button className={fireButtonInactive}>{fire}</button>
    //           <div className={contextMenu}>
    //             <button className={contextEllipsis}>{ellipsis}</button>
    //           </div>
    //         </div>
    //       </div>
    //       <PlaylistShowMain
    //         id={this.id}
    //         fetchPlaylistTracks={fetchPlaylistTracks}
    //         tracks={tracks}
    //         saveNowPlaying={saveNowPlaying}
    //       />
    //     </section>
    //   );
    // }
  }
}

export default AlbumShow;