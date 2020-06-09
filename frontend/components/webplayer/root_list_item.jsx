import React from 'react';

const RootListItem = ({ playlist }) => {

  let reactWrapper = "react-wrapper";
  let RootlistItem = "root=list=item";
  let textWrapper = "text-wrapper";

  return (
      <div className={reactWrapper} key={playlist.id} >
        <li className={RootlistItem}>
          <div className={textWrapper}>
          {this.props.deletePlaylistForm}
          </div>
        </li>
      </div>
  )
}

export default RootListItem;

