class Api::SessionsController < ApplicationController

  before_action :ensure_logged_in, only: [:destroy]

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user.nil?
      render json: ["Invalid username/password"], status: 401
    else
      login!(@user)
      render :show
    end
  end

  def destroy
    logout!
    render json: [], status: 200
  end

end
