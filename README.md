# FriendFinder - Node.js and Express Application

## Overview
The FriendFinder app uses a survey to match a user with a friend. A server, created using the `express` npm package, listens for the POST from the survey submission, then compares the answers to those from other profiles already on record, and responds with the match.

## Depedencies
The views use several of the components from the Materialize framework, to create the form inputs, and the modal that shows the server's response.

The back-end of the app uses NPM packages:
* `express` to create the server; it handles the request for matching a friend
* `path` to more easily access files within the app directory

## Main App Structure
```
- `./app` - contains sub-directories for the app data, the public assets, and the API requests to the server;
app/
├── data/
|   ├── friend.js       - stores the the profiles--user info and their answers--in an array
├── public/
|   ├── css/
|   |   ├── survey.css  - some styling for the label section of the questions
|   ├── js/
|   |   ├── survey.js   - loads questions on page-load, initializes elements
|   ├── home.html       - view for any route not matching survey; contains a link to the survey
|   ├── survey.html     - view with 10-question form; modal displays match after form submission
├── routing/
|   ├── apiRoutes.js    - GET and POST requests to friends api
|   ├── htmlRoutes.js   - GET reques for survey and home views
```
- `./app/routing/apiRoutes.js` - contains functions that compare the answers of two users, and then filters for a match based on the results
- `./server,js` - uses `express` npm package to create and configure the app server;
