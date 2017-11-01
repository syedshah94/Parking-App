*** Syed W Shah / 10/27/17 ***

# Concept: Parking-App
# Title: Courtesy Park[ing]

Concept:
This app will allow users to park their vehicle and serve them a reminder
of where they parked with the description they've provided and a map view
of their vehicle's location. The 'courtesy' part comes in with the 
description users will provide, where they may detail information of when
they plan to leave the spot, so potential nearby drivers can just go to their
location rather than scouting for some free space.

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

Oct 31st, 2017 (11:07 pm):
    Now there's two things I've realized today. IT'S HALLOWEEN?! Also I should
    have been updating here a bit more frequently. Regardless, my overall goal was to create
    an app which would alert people seeking parking spots when a spot would free up,
    but I realized the building block is to first create a way to log that someone parked
    in the first place. This part seems to be completed so far. But I feel I'm at a 
    good point to just make my pages look better, since they're were not much
    to look at prior to today. 
    I will say I am quite proud of how quickly I learned to use Bootstrap, I felt
    it always seemed like something scary to me until I just tried it out. I have to say
    it makes creating a front-end so much easier...

    This may be a long update, but wait, there's more!
    My current future plans include creating 'cards' which will nicely
    display parking information along with a nice, small map with relative
    information.

    Current problems that should be addressed in the future: There's currently
    no user-specific page. So far it's just a sort of login and use. Well you 
    don't even need to log in since I made the process simpler with the "Explore"
    button on the landing page. Yes, I am well aware this makes no sense in a real app,
    but it's just there since this is not a completed app and I feel users should be allowed
    to just access it asap to get the point for now. Maybe I will remove this in the
    near future when I want to add more robustness to this app.


LONG TERM GOALS:
    -User specific pages
    -Users may be reviewed, and earn 'courtesy points'. Who knows, maybe
    they can spend these courtesy points somehow, maybe use it as coupons
    or just show off that they're better than you when it comes to 
    courtesy or something... sure, lets go with that. 

## Links and Resources
(Anything you've looked up so far or are thinking about using.)
Might be using this as a guide to creating user authentication: 
https://scotch.io/tutorials/easy-node-authentication-setup-and-local
I'll update this readme if I do, which will be more likely than not.
^I ended up not using this, but I'll keep it here for my future self.

API USED:
MapBox
