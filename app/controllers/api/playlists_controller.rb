class Api::PlaylistsController < ApplicationController 

  skip_before_action :verify_authenticity_token
  before_action :ensure_logged_in, only: [:index, :new, :create, :edit, :update]

  def index
    @playlists = User.find_by(id: params[:user_id]).playlists
    
    render :index
  end

  def create 
    @playlist = Playlist.new(playlist_params)

    if @playlist.save
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def edit
    @playlist = Playlist.find_by(id: params[:id])

    if @playlist
      render :edit
    else
      render json: {}, status: 404
    end
  end

  def update
    @playlist = Playlist.find_by(id: params[:id])

    if @playlist.update!(playlist_params)
      render :show
    else
      render json: @playlist.errors.full_messages
    end
  end

  def show
    @playlist = Playlist.find_by(id: params[:id])

    render :show
  end

  def destroy
    @playlist = Playlist.find_by(id: params[:id])

    render :show
  end


  def playlist_params
    params.require(:playlist).permit(:creator_id, :title, :genre_id, :description)
  end
end