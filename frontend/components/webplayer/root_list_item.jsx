import React from 'react';

class RootListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

  let reactWrapper = "react-wrapper";
  let RootlistItem = "root=list=item";
  let textWrapper = "text-wrapper";

  let {playlist, deletePlaylistForm} = this.props;


    return (
      <div className={reactWrapper} key={playlist.id} >
        <li className={RootlistItem}>
          <div className={textWrapper}>
          {deletePlaylistForm}
          </div>
        </li>
      </div>
    )
  }
}

export default RootListItem;
