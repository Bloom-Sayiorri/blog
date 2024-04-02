class UsersController < ApplicationController
  def index
    @user = User.all
    render json: @user
  end

  def show
    @user = find_user
    render json: @user
  end

  private

  def find_user
    User.find(params[:id, :username, :email, :password])
  end

end
