# bsport Calendar test

This is a small React project that aims at creating a simple weekly calendar connected the API of bsport.
It displays a simple weekly calendar with selectible dates, and a list of dummy offers.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Structure of the project

The project is strutured the following way :

All the components are contained in the src/components folder.
The components are grouped by purposes in specific folders (a Calendar folder for the Calendar components for instance) containing the components, the CSS stylesheets, potential test files, images...

The main component of the application is the App.js component. It does most of the stateful logic. This component has two children : the calendar, and the list of dummy offers.

## Running the project 

For running the project call `npm start` in the app folder. 
