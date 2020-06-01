class Api::UsersController < ApplicationController

  before_action :ensure_logged_in, only: [:show, :edit]

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
  end

  def index
  end

  def edit
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end

