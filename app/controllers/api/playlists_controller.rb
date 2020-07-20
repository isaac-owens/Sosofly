class Api::PlaylistsController < ApplicationController 

  before_action :ensure_logged_in, only: [:index, :new, :create, :edit, :update]

  def index
    @playlists = User.find_by(id: params[:user_id]).playlists

    render :index
  end

  def create 
    @playlist = Playlist.create(playlist_params)
    
    file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/images/music_note.png')
    @playlist.image.attach(io: file, filename: 'music_note.png')
    if @playlist.save
      debugger
      debugger
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
    Playlist.delete(@playlist.id)
    
    render :show
  end


  def playlist_params
    params.require(:playlist).permit(:creator_id, :title, :genre_id, :description)
  end
end