class Api::TracksController < ApplicationController 
  def index
    if params[:playlist_id]
      @tracks = Playlist.find_by(id: params[:playlist_id]).tracks.with_attached_track_file
      caches_action render :index
    else
      @tracks = Album.find_by(id: params[:album_id]).tracks
      caches_action render :index
    end
  end
end