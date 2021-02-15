# Image Recognition Frontend
## What does it do?
This app let's the user signin and input images through an URL. The app then generates a box around the face it was able to detect in the picture.

This project works together with the Image Recognition Backend and is hosted for display on Heroku here: 

https://f-d-smart-brain.herokuapp.com/

(It might take heroku a while to display the app initially)

## What is it?
This is a project coded with `React`. The main components of the project include the following:
- Signin
- Register
- Rank (Keeping track of how many pictures a user provided)
- Navigation (Switching between signin and register)
- Logo (Moving Brain Logo)
- ImageLinkForm (Working with the provided link by the user) 
- FaceRecognition (Drawing a bounding box around a face in the picture) 

## What is the stage of the project?
This project is finished.

## Shortcommings
A known shortcomming is the fact that the app cannot recognize more than one face in any given picture.

There is also an unwanted warning when using Chrome, that appeaers right after the login. It can be savely disregarded, as all data is being stored only after it's being encrypted.

## How to use this
- Clone this repo
- Run `npm install`
- Run `npm start`
- You must add your own API key in the `src/App.js` file to connect to Clarifai.
- You can grab Clarifai API key [here](https://www.clarifai.com/)