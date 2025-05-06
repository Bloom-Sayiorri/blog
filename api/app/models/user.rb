class User < ApplicationRecord
  has_secure_password

  has_many :reviews
  has_many :blogs

  validates :username, presence: true, length: { minimum: 3 }
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, uniqueness: true, length: { minimum: 6 }
end
