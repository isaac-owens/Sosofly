class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.string :aws_url, null: false
      
      t.timestamps
    end
  end
end
