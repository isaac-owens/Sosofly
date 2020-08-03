class ApplicationController < ActionController::Base
  helper_method :ensure_logged_in, :logged_in?, :current_user

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
    @current_user
  end

  def ensure_logged_in
    unless logged_in? 
      render json: {}, status: 401
    end
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.try(:reset_session_token!)
    session[:session_token] = nil
  end

  def default_url_options
    { host: ENV["DOMAIN"] || "localhost:3000" }
  end
end
