class Api::ArtistsController < ApplicationController
  def show
    @artist = Artist.find_by(id: params[:artist_id])

    if @artist
      render :show
    else
      render :json @artist.error.full_messages, status 422
    end
  end

  def artist_params
    params.require(:artist).permit(:name, :biography)
  end
end