class Api::TracksController < ApplicationController 
  def index 
    @playlist = Playlist.find_by(id: params[:playlist_id])
    render :index
  end

  def track_params
    params.require(:track).permit(:title, :track_file)
  end
end