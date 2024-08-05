class RenameGenreToCategoryInBlogs < ActiveRecord::Migration[7.1]
  def change
    rename_column :blogs, :category, :string
  end
end
