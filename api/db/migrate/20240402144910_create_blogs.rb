class CreateBlogs < ActiveRecord::Migration[7.1]
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :genre
      t.string :content
      t.integer :rating
      t.belongs_to :user_id, null: false, foreign_key: true
      t.belongs_to :category_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
