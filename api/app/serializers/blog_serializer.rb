class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :rating, :content, :user_id, :category_id
end
