class EditAwsurlColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :tracks, :aws_url
  end
end
