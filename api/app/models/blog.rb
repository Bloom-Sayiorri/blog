class Blog < ApplicationRecord
  # CATEGORIES = %w[Action Tech Sports News]

  has_many :reviews
  belongs_to :user
  belongs_to :category

  # validates :category, presence: true, inclusion: { in: CATEGORIES, message: "New blog must be one of: #{CATEGORIES.join(', ')}" }
end
