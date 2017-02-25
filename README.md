# Super Simple React Redux example
While super popular, React and Redux are not the easiest tools to get started with. 
There's a whole lot of great tutorials out there that can explain the how's, why's and what's of R+R.

I'm personally a huge fan of "Modern React with Redux" by Stephen Grider (https://www.udemy.com/react-redux/learn/v4/overview). 
It's an in-depth course that guides you through building your own apps. 

The main problem with in-depth courses is that
they try to build "real life" apps. Examples with WebPack, Bootstrap, some API calls, user interaction, etc.
It's a great way to learn, but I found it difficult to have a super simple example of React + Redux. So, that's what I made.

## The idea
If you know nothing about React or Redux, this is the wrong demo for you. Get a theoretical basis first. This is just the most simple example
I could come up with. There is a counter that starts at 0. There is banana that needs clicking. It's that simple.

## Components

* actions/index.js : contains the clickedBanana action creator
* components/Banana.js : the banana to click on
* components/Counter.js : the counter
* containers/App.js : the main container of the application. It renders the Counter and Banana with the right props and is linked to the Redux state.
* reducers/index.js : the rootReducer
* reducer_clicks.js : the clicks reducer. Responds to the BANANA_CLICKED action only.
* stores/index.js : sets up the Redux store.
* index.js : the starting point of the application.

## Getting started

You'll need npm for this.

"npm install" to download the dependencies
"npm start" to start the server.
