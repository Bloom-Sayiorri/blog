class CategoriesController < ApplicationController
  def index
    categories = Cateogory.all
    render json: categories, status: :ok
  end

  def show
    category = find_category
    render json: category, status: :ok
  end

  def create
    category = Category.create(category_params)
    if category.save
      render json: category, status: :created
    else
      render json: category.error, status: :unprocessable_entity
    end
  end

  def update
    category = Category(find_category)
    category.update(category_params)
    if category.save
      render json: category, status: :ok
    else
      render json: category, status: :unprocessable_entity
    end
  end

  # def destroy
  #   category.destroy
  #   head: no_content
  # end

  private

  def find_category
    Category.find(id: params[:id])
  end

  def category_params
    params.permit(:name)
  end
end
