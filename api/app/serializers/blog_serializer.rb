class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :rating, :content
end
