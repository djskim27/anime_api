class CreateCharacters < ActiveRecord::Migration[5.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :anime
      t.string :image
      t.string :special_move

      t.timestamps
    end
  end
end
