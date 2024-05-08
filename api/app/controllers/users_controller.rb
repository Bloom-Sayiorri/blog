class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = find_user
    if @user.present?
      render json: @user
    else
      render json: { error: 'User not found' }, status: :not_found
    end
  end

  private

  def find_user
    User.find_by(id: params[:id])
  end
end

# REST ROUTES
# :index, :new, :create, :show, :update, :destory and :edit
