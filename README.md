![Sosofly logo](./app/assets/sosofly_media/sosofly_splash_logo.png)
# Sosofly v.0.0.1 
#### Listening is Everything

* Created w/ ruby 2.5.1 by Isaac Owens 2020
---
Sosofly is a web hosted music streaming app that allows you to listen to music, save and play playlists, and discover new music. Create powerful playlists and flex your genre muscle. You'll be feeling so, so fly and glad you did. (image here)

[Sosolfy.com](https://sosofly.herokuapp.com/#/)

--
## Tech Stack
Sosofly is an MVC framework app developed with ReactJS + PostgresSQL Database + Ruby on Rails API.
The audio mp3 file storage is handled by AWS S3.


## Run Sosofly
### Run the following code in sequence to get Sosofly up and running on your local machine
1. `bundle install` to install Rails gems
2. `webpack --mode=development --watch` or `npm run webpack` to package js files
3. `bundle exec rails db:create` to create database 
4. `bundle exec rails bd:seed` to seed database with a demo user, playists, and tracks (seed.rb)
5. `Run local server to view Sosofly in a browser window

## Features
Sosofly supports streaming of audio files along with creation of customized playlists.  From the Login page (login_form.jsx), use the Demo User button to start interacting with seeded data from the seed file)

## Audio Playback

Audio playback was implemented with a combination of basic <audio> html tags, and conditional callback statements.  Each Track Component maintains updating it's own local state and also relays information to the PlayBar component's (parent component) local state.  When a Track is clicked, the component will update it's local state key of 'nowPlaying' to true, and update the PlayBar component's local state key of 'nowPlaying' to the audio object queried from the document via it's title.  The object that is returned from the document query is then called with .play() which returns a promise, and upon success calls setState on it's local state key.  Within the play logic for each Track, a coniditional statement will have the Track determine if:
 
1. it is playing or paused in which case it toggles itself
 
2. there is another track playing in which case, it calls a function `stopAllSongs` that stops all tracks, resets their time, and begins to play

3. no track is playing in which case the songs begins to play

## Signup Form error handling

This section of the project was particularly tricky.  The form is to handle each field of it's errros separately, displaying it's erros below the field upon submit.  I struggled with figuring out how to determine how to isolate the errors from the array that returns them, to the specific field within the SignupForm Component.  I ended up making 
## Successes

## Challenges

## Code Snippets

##
This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite
 
* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
