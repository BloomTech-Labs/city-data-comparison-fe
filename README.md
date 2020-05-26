# Citrics

Applicatio deployed at https://citrics.io/.

## Contributors

[Meet the Team](https://citrics.io/meet-the-team)

## Project Overview

[Product Canvas](https://www.notion.so/City-Data-Comparison-bc94a2f56b05482e9c42a12748a0ed0a)

[UX Design files](https://www.figma.com/file/nPnVfqPCoitykxcuf8obvH/City-Data-Comparison%3A-Analysis%2C-Dariush-%26-Eddy)

Citrics is an application that analyzes data from cities such as populations, cost of living, crime rates and many other social and economic factors that are important in deciding where someone would like to live. Citrics present such important data in an intuitive and easy to understand interface.
<br>
Cities with data are marked on a searchable, indexed map generated from the Mapbox.com API. Selected markers populate navigable data graphs powered by the Chartjs library that indicate important information about the selected city. Graphs are generated dynamically as users adjust their selection of cities to compare.

### Key Features

### Basic Features

- Allows users to search city data set without logging in
- Data visualization of city metrics
- Map visualization that allows users to navigate and browse cities
- Autofill search feature to streamline city searching

### Future Features

- Expanded data set - Pending DS completion, this app aims to encompass data from ~30000 US cities
- User-friendly API access to DS model via multiple endpoints (Premium feature)
- Re-implementation of single city page view and corresponding API.
- Collapsible graph cards with brief summaries of the graph's data on the collapsed smaller version of the card.

## Tech Stack

### Front end built using:

- React
- Sass
- Chart JS
  - Used
- ChartJS Annotiation Plugin
  - This plugin is used for the vertical line dividers on the graph.
- Mapbox
- Font Awesome
- React-scroll
- React-carousel
- Redux
  - The application's state management uses redux. We currently have a reducer for the selected cities.
  - We use the hooks-based Redux API rather than the higher-order-component Redux API: https://react-redux.js.org/api/hooks
  - Future iterations of the project might implement a reducer for the map viewport settings, as they change dynamically when the user selects a city.
- Redux Thunk
  - Redux Thunk library is used for async action creator functions.
- Material UI

  - Several components use material UI for input elements. Future iterations of the project might implement Material UI's theming solution for consistent margins, brand colors, and typography.

- Redux Mock Store
  - Used for testing redux reducers and action creators.
- Axios Mock Adapter
  - Used to setup tests for async action creators or any functions that make any axios calls.

## Style Guidelines

### Color Scheme

- Action color: "#0066CC"
  - Used throughout the site to identify things that we want our users to notice.  This includes our logo, login button, and any other clickable words/icons we want our users to take notice of.  
- Data visualization colors: Green: "#6dd47ed0", Yellow: "#ffd55ad0", Darkblue/grey: "#6dd47ed0"
  - Colors Newly implemented to make the data visualizations more accessible to those who have vision impairments
  - Colors all have a varying brightness that ensures they appear differently on greyscale.

### Font
- font-family: "Rubik",sans-serif;

### Margins
- Multiples of 1.4 rems used for margins
- Css grid used to space the graphs out and give the site a consitent/even look.

#### Front-end deployed to https://citrics.io/

<!-- # 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

🚫These are just examples, replace them with the specifics for your app

    *  REACT_APP_apiKey - this is your Google API key, which can be generated in the Google Cloud Console
    *  REACT_APP_authDomain - when you set up your Firebase project, this information will be in the dashboard
    *  REACT_APP_databaseURL - in the Firebase dashboard
    *  REACT_APP_projectID - in the Firebase dashboard
    *  REACT_APP_storageBucket - in the Firebase dashboard
    *  REACT_APP_messagingSenderId - in the Firebase dashboard
    *  REACT_APP_stripe_API - this is your public Stripe API key, generated in the Stripe dashboard
    *  REACT_APP_backendURL - optional for your local development server
    *  REACT_APP_clientid - this is the Stripe_connect clientID, generated in Stripe_connect settings
    *  REACT_APP_stripe_plan - this is the ID for a second Stripe subscription plan, generated under Stripe products -->

<!-- # 5️⃣ Content Licenses

🚫For all content - images, icons, etc, use this table to document permission of use. Remove the two placeholders and add you content to this table

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| doodles.png    | Nicole Bennett   | [Creative Commons](https://www.toptal.com/designers/subtlepatterns/doodles/) |
| rings.svg      | Sam Herbert      | [MIT](https://github.com/SamHerbert/SVG-Loaders)                             | -->

# Testing

Test all your code. Pure functions, components, async, as much coverage as we can get.

To start the test suite use "yarn test".
You can run a specific test or set of tests by running "yarn test ExampleComponent" or any other filename matcher.

Testing Redux

- Use redux-mock-store to test your action creators as you add any Redux Thunks.
  https://www.npmjs.com/package/redux-mock-store
- Use axios mock adapter to mock axios endpoints for any Thunks.
  https://www.npmjs.com/package/axios-mock-adapter
- Reducers can be tested just like any other pure function!
  https://redux.js.org/recipes/writing-tests

# Installation Instructions

In the root folder, run "yarn"

## Other Scripts

- yarn start (starts local server)

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

<!-- 
## Documentation
