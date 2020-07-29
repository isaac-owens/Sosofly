class Api::AlbumsController < ApplicationController
  def show
    @album = Album.find_by(id: params[:id])

    render :show
  end

  def artist_params
    params.require(:album).permit(:title, :artist_id, :year)
  end
end