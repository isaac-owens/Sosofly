class Api::UsersController < ApplicationController

  skip_before_action :verify_authenticity_token
  before_action :ensure_logged_in, only: [:show, :index, :edit]

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else  
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render json: @user
  end

  def index
    @users = User.all
    render json: @users
  end

  def edit
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :gender, :birthdate)
  end
end

