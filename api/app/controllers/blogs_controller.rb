class BlogsController < ApplicationController

  def show
    @blog = find_blog
    render json: @blog
  rescue ActiveRecord::RecordNotFound
    render_not_found_response
  end

  def destroy
    @blog = find_blog
    @blog.destroy
    head :no_content
  rescue ActiveRecord::RecordNotFound
    render_not_found_response
  end

  private

  def find_blog
    @blog = Blog.find(params[:id])
  end

  def blog_params
    params.permit(:title, :genre, :content, :rating)
  end

  def render_not_found_response
    render json: { error: 'Not Found' }, status: :not_found
  end
end
