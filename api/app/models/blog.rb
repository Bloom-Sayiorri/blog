class Blog < ApplicationRecord
  CATEGORIES = %w('Action', 'Tech', 'Sports', 'News')

  belongs_to :user
  belongs_to :category


end
=begin
  validates :blog, presence: true, inclusion {
    in: CATEGORIES,
      message: "must be one of: #{CATEGORIES.join(', ')}"
  }
end
