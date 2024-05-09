class BlogsController < ApplicationController
rescue_from ActiveRecord::InvalidRecord with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound with: :render_not_found_response

  def index
    @blogs = Blog.all
    render json: @blogs
  end

  def show
    @blog = find_blog
    render json: @blog
  end

  def create
    @blog = Blog.create!(blog_params)
    render json: @blog, status: :created
  end

  def update
    @blog = find_blog
    @blog.update!(blog_params)
    render json: @blog, status: :updated
  end

  def destroy
    @blog = find_blog
    @blog.destroy
    head :no_content
  end

  private

  def find_blog
    @blog = Blog.find(params[:id])
  end

  def blog_params
    params.permit(:title, :genre, :content, :rating)
  end

  def render_unprocessable_entity(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found_response
    render json: { error: 'Not Found' }, status: :not_found
  end
end
