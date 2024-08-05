class ReviewsController < ApplicationController
  before_action :find_review, only: %i[ show update destroy ]
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  # GET /reviews
  def index
    @reviews = Review.all
    render json: @reviews, status: :ok
  end

  # GET /reviews/1
  def show
    render json: @review, status: :ok
  end

  # POST /reviews
  def create
    @review = Review.create(review_params)
    if @review.valid?
      render json: @review, status: :created
    else
      render json: @review.errors.full_messages, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reviews/1
  def update
    if @review.update(review_params)
      render json: @review, status: :created
    else
      render json: @review.errors.full_messages, status: :unprocessable_entity
    end
  end

  # DELETE /reviews/1
  def destroy
    @review.destroy!
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def find_review
      @review = Review.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def review_params
      params.require(:review).permit(:comment, :user_id, :blog_id)
    end

    def render_not_found
      render json: { errors: ["Review not found!"] }, status: :not_found
    end
end
