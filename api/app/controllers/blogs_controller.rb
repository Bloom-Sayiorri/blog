class BlogsController < ApplicationController
  before_action :set_blog, only: %i[ show update destroy ]
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  # GET /blogs
  def index
    @blogs = Blog.all
    render json: @blogs, status: :ok
  end

  # GET /blogs/1
  def show
    render json: @blog, status: :ok
  end

  # POST /blogs
  def create
    @blog = Blog.create(blog_params)
    if @blog.valid?
      render json: @blog, status: :created
    else
      render json: @blog.errors.full_messages, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /blogs/1
  def update
    if @blog.update(blog_params)
      render json: @blog, status: :created
    else
      render json: @blog.errors.full_messages, status: :unprocessable_entity
    end
  end

  # DELETE /blogs/1
  def destroy
    @blog.destroy!
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def find_blog
      @blog = Blog.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def blog_params
      params.require(:blog).permit(:title, :image_url, :rating, :category, :content, :user_id, :category_id)
    end

    def render_not_found
      render json: { errors: ["Blog not found"] }, status: :not_found
    end
end
