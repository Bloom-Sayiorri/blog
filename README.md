#### Tree structure of the app

## Check and configure the associations of the models and the necessary macros. (If neeed be create a join model for many to many relationship).

User, Comment, Category, Blog

User has_many: :blogs, :comments

Comment belongs_to: :blog

Blog has_many: :comments

Category has_many :blogs
