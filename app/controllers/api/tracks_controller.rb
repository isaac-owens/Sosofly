class Api::TracksController < ApplicationController 
  def index 
    if params[:playlist_id]
      @tracks = Playlist.find_by(id: params[:playlist_id]).tracks
    else
      @tracks = Album.find_by(id: params[:album_id]).tracks
    end

    render :index
  end
end