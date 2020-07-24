class Api::ArtistsController < ApplicationController
  def show
  @artist = Artist.find_by(id: params[:artist_id])

  render :show
  end

  def artist_params
    params.require(:artist).permit(:name, :biography)
  end
end