# Kribble
## Project Description

This project involves the building of a light weight version of [dribble](https://dribbble.com/) demonstrating the concepts of Authentication and Authorization in ruby on rails and getting familiar with using the Devise gem in the process and be able to use some ruby gems to mimic some functionality as number of view on each shit, like/unlike shits

A user is able to sign-up and sign-in, create, edit, and delete their shits/comments, view shits/comments made by all users.  A user **can not** edit or delete a shit created by another user also **can not** Unlike other users Likes.
An Unregistered user can only view shits made by all registered users.

### Screenshots

![](screens/home.png)


## Built With

- Ruby 2.6.5
- Ruby on Rails 5.1.7
- bulm rails (CSS framework) 
- jquery-rails 
- Devise gem (for authentication) 
- Carrierwave (for files uplaod) 
- Mini-magick (for maniuplate images) 
- Impressionist (Log views from controller actions or from model) 
- acts_as_votable (Allowing records to be votable) 
- Figaro (app config usin ENV and single YAML file)
## How to run this project on your local machine

### Prerequisites
1. You should have ruby installed.(This project was tested on version `2.6.5`)
1. You should have rails installed.(This project was tested on version `5.1.7`)
1. You should have bundler installed.(This project was tested with Bundler version `2.1.4`)

### Steps to follow
1. Clone the repository to your local machine using `git clone https://github.com/elarabyelaidy19/Kribble.git`
1. On your local machine, navigate to the folder using `cd kribble` in your terminal
1. Install all the gems for the project by running `bundle` in your terminal
1. Migrate the database using this command
`bin/rake db:migrate`
1. Start the server by using this command.
`bin/rails server`

1. Open this link in your favorite browser `http://localhost:3000`


## Live Demo

- [kribble](https://kribble.herokuapp.com/)

## Contributions

  There are two ways of contributing to this project:

1.  If you see something wrong or not working, please check [the issue tracker section](https://github.com/RNtaate/twitter_clone/issues), if that problem you met is not in already opened issues then open the issue by clicking on `new issue` button.

2.  If you have a solution to that, and you are willing to work on it, follow the below steps to contribute:
    1.  Fork this repository
    1.  Clone it on your local computer by running `git clone https://github.com/elarabyelaidy19/Kribble.git` 
    1.  Open the cloned repository which appears as a folder on your local computer with your favorite code editor
    1.  Create a separate branch off the *master branch*,
    1.  Write your codes which fix the issue you found
    1.  Commit and push the branch you created
    1.  Raise a pull request, comparing your new created branch with our original master branch [here](https://github.com/elarabyelaidy19/Kribble.git)

## Authors

👤 **Elaraby Elaidy**

- Github: [@elarabyelaidy](https://github.com/elarabyelaidy19)
- Twitter: [@elarabyelaidy](https://twitter.com/elarabyelaidy)
- Linkedin: [elarabyelaidy](https://linkedin.com/in/elarabyelaidy)


## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments
- This project was built following the screen cast tutorials of "*__Project 3__*" made by [Andy Leverenz](https://github.com/justalever)
