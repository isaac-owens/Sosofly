class Api::TracksController < ApplicationController 
  def index
    if params[:playlist_id]
      @tracks = Playlist.find_by(id: params[:playlist_id]).tracks
      render :index
    else
      @tracks = Album.find_by(id: params[:album_id]).tracks
      render :index
    end
  end
end