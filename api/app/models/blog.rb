class Blog < ApplicationRecord
  CATEGORIES = %w[Action Tech Sports News]

  belongs_to :user

  validates :category, presence: true, inclusion: { in: CATEGORIES, message: "New blog must be one of: #{CATEGORIES.join(', ')}" }
end
