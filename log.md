

# LOG
* guard init livereload   
* import "pulma"
* setup devise   
    * rails g devise:install 
    * add alert, notice /layout/application 
    * rails g controller home 
    * rails g devise:views
    * create devise model_devise(user) 
        * rails g devise User   
    * create custom controller that extends from devise  
        * routes >> devise_for :users, controllers: {registrations: 'registrations' }  
    * params function (update, sign_up) reg_controller 
    * add name column to user

* craete scaffold Shot(Title, description, user_id)   
    * rails g scaffold Shot 
    * routes shots#index 

* customize views
    * add nav to application layout  
    * delete scaffold stylesheet  
    * update devise views 
        * password, registrations, sessions 
    * update application style with pulma 

* Customize shots view 
    * index, new, edit, _form

* CarrierWave Uploader 
    * rails g uploader user_shot(file name) 
    * setup Carrierwave github  
        * uncomment carrier::minimagick 
        * specify image full/thumb  
        * add mount_uploader to Shot model
    * add user_shot column to shots 

* implement drag and drop functionality 
    * shots.js 

* customize shots views
    * shots.scss 
    * application.scss 

* create comments  
    * controller and model 
    * associatons between User/shots comments  
    * nested resource for commnets 
    * view for commnets in shot/show view 
    * form partial for comments 
    * Comment partial 
* imperisont gem for analytics  
    * rails g impressionist
    * shot model is_impressionable 
    * shot controller impressionists 
    * view 
* acts as votable 
    * rails generate acts_as_votable:migration 
    * shot acts_as_votable 
    * user acts_as_voter 
    * controller actions like/unlike 
    * Authem=nticate user on like/unlike 
    * index view for like/unlike  
    * member route for like/unlike 
    * show view  
