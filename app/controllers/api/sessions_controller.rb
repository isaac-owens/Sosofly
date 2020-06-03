class Api::SessionsController < ApplicationController

  skip_before_action :verify_authenticity_token
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
