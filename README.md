#### Tree structure of the app

## Check and configure the associations of the models and the necessary macros. (If neeed be create a join model for many to many relationship).

User, Comment, Category, Blog

User has_many: :blogs, :comments

Comment belongs_to: :blog

Blog has_many: :comments

Category has_many :blogs

The Entity Relationship Diagram link  [text](https://dbdiagram.io/d/Blog-App-664f977ff84ecd1d22fef225)

-We may need a pageviews_remaining attribute for the blogs and prompt the user to pay after view a certain number of pages.