# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## CREATE A USER PROFILE RESOURCE
A user has one profile hence we use a one-to-one relationship
Profile Data attr: username, email, password-change, bio, img-url, favorites, (optional: socials)
User Data Attr: username, email, password

# Authorization
- We use an authorized user to perform crud actions on blogs. General users who arent logged in can only view blogs.
- We use Filters to execute certain actions when we have an authenticated user who can access certain resources