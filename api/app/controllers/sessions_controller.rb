class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: { message: "Invalid username or password!" } }, status: :unauthorized
    end
  end

  def destroy
    if session[:user_id]
      session.delete :user_id
      head :no_content
    else
      render json: { errors: { message: "You are not logged in!" } }, status: :unauthorized
    end
  end

end
