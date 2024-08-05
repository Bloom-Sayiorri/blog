class Blog < ApplicationRecord
  # CATEGORIES = %w('Action', 'Tech', 'Sports', 'News')

  belongs_to :user
  belongs_to :category

  # validates :genre, presence: true, inclusion { in: %w('Action', 'Tech', 'Sports', 'News'), message: "New blog must be one of: #{CATEGORIES.join(', ')}" }
end
