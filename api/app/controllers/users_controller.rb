class UsersController < ApplicationController
  skip_before_action :authorize, only: %i[ create ]
  # before_action :authorize, only: %i[ show update ]
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotDestroyed, with: :render_not_destroyed

  def index
    users = User.all
    render json: users, status: :ok
  end

  def show
    user = find_user
    if user
      render json: user, status: :ok
    else
      render json: { errors: { message: ['Not authorized'] } }, status: :not_authorized
    end
  end

  def create
    user = User.create!(user_params)
    if user.valid?
      render json: user, status: :created
    else
      render json: {  errors: user.errord.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    user = find_user
    user.update!(user_params)
    render json: user, status: :created
  end

  def destroy
    if user
      user.destroy!
      head :no_content
    end
  end

  private

  def find_user
    User.find_by(id: session[:user_id])
  end

  def user_params
    params.require(:user).permit(:username, :email, :password) #password confirmation
  end

  def render_not_found
    render json: { errors: [message: "User not found!"] }, status: :not_found
  end

  def render_unprocessable_entity(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_destroyed(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end

end
