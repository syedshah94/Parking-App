*** Syed W Shah / 10/27/17 ***

# Concept: Parking-App
# Title: Courtesy Park[ing]

(Brief description of the game, why you're choosing to make it)

## Wireframe TESTER

![alternateText](./assets/index.jpg)

![alternateText](./assets/erd.png)

Specifics:
-Users can log in
-Geolocate current position, log it as as your parking spot
-Description of parking spot can be logged.
-Est. time of leaving spot

Database name: parking_app
tables used: 
-users 
-spots

NOTE: Changing migrations will require changing MODELS and CONTROLLERS as well.
-May need a changes on /seeds 
-May need to update views
-This is also important to keep in mind when we add in an API or User authentication.

NOTE 2: For when I want to redirect login/register to '/user' page 
-Change path for register in user.controller.js  .create() method
--set authRouter.post() to redirect to '/user' when successful.

## Phases of Completion

(The steps or phases you expect to go through, and the tasks that you'll need to accomplish to reach each step. These should resemble the acceptance criteria we were working through earlier.)

## Links and Resources


(Anything you've looked up so far or are thinking about using.)
Might be using this as a guide to creating user authentication: 
https://scotch.io/tutorials/easy-node-authentication-setup-and-local
I'll update this readme if I do, which will be more likely than not.
