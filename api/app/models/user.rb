class User < ApplicationRecord
  has_secure_password

  has_many :reviews
  haas_many :blogs

  vakidates :username, presence: true, length: { minimum: 3 }
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, uniqueness: true
end
