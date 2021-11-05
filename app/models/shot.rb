class Shot < ApplicationRecord  
    mount_uploader :user_shot, UserShotUploader
    belongs_to :user 
    has_many :comments, dependent: :destroy 
    is_impressionable 
    acts_as_votable
end
