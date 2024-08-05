class UsersController < ApplicationController
  before_action :find_user, only: %i[ show update destroy ]
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotDestroyed, with: :render_not_destroyed

  def index
    @users = User.all
    render json: @users, status: :ok
  end

  def show
    render json: @user, status: :ok
  end

  def create
    @user = User.create!(user_params)
    session[:user_id] = user.id
    render json: @user, status: :created
  end

  def update
    @user.update!(user_params)
    render json: :created, status: :created
  end

  def destroy
    if @user
      @user.destroy!
      head :no_content
    end
  end

  private

  def find_user
    @user = User.find_by(id: session[:user_id])
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

  # def recipe_params
  #   params.require(:recipe).permit(:title, :instructions, :minutes_to_complete)
  # rescue ActionController::ParameterMissing
  #   params.permit(:title, :instructions, :minutes_to_complete)
  # end

  def render_unprocessable_entity(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_destroyed(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end

end
