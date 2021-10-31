class Shot < ApplicationRecord 
    mount_uploader :user_shot, UserShotUploader
    belongs_to :user 
end
