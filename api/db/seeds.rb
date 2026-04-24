# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

require 'faker'

puts "Seeding db:before"
User.destroy_all()
Blog.destroy_all()
Review.destroy_all()
Category.destroy_all()

User.create!([
  {username: "Mike Tyson", email: "mike@mail.com", password: "123456", password_confirmation: "123456"}
])

Category.create([
  {name: "Tech"}
])

Blog.create([
  {
    title: "The TechWars",
    image_url: nil,
    rating: 5,
    content: "A blog about tech.",
    user_id: 1,
    category_id: 1,
  }
])

Review.create([
  {comment: "A great tech article.", user_id: 1, blog_id: 1,}
])

puts "Seeding db:after"
