class CreateArtistsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.string :name, null: false
      t.text :biography, optional: true

      t.timestamps
    end
  end
end
