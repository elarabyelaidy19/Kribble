class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.text :response
      t.string :name

      t.timestamps
    end
  end
end
