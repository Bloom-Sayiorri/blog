class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize

  def authorize
    return render json: { errors: ["You are not logged in!"] }, status: :unauthorized unless logged_in?
  end

  def logged_in?
    !!session[:user_id]
  end

  def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end

end
