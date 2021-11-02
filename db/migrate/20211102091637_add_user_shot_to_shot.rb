class AddUserShotToShot < ActiveRecord::Migration[5.1]
  def change
    add_column :shots, :user_shot, :string
  end
end
