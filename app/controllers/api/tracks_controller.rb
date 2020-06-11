class Api::TracksController < ApplicationController 
  def index 
    @tracks = Playlist.find_by(id: params[:playlist_id]).tracks
    render :index
  end



  def track_params
    params.require(:track).permit(:title, :track_file)
  end
end