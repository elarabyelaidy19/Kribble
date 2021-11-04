class Shot < ApplicationRecord  
    mount_uploader :user_shot, UserShotUploader
    belongs_to :user 
    has_many :comments, dependent: :destroy
end
