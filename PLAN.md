## PLAN

Get information about countries via a RESTful Countries API
(https://restcountries.com/)

### REQUIREMENTS

- See all countries from API on the homepage
- Use this API to fetch all countries: https://restcountries.com/v3.1/all
- Search country using input field
  - store data in front-end when filtering searches by input (check API limit)
- Filter countries by region
- Click on country to see more detailed information on new page
  - decide what to show on this page
  - use images where required

### DELIVERABLES

- responsive mobile first design using react/next
  - desktop: 4cols, tablet: 3cols, mobile: 2cols

### STRETCH GOALS

- Click through to border countries on details page
- Toggle color scheme between light and dark mode

### RESOURCES

- API: https://restcountries.com/
- WIKI:https://en.wikipedia.org/wiki/GERMANY

## CODE STEPS

### SETUP BASIC FILE STRUCTURE

- build in next.js because routing for multi-pages is easier than in react alone
- next also deals with SSR out of the gate so pages will pre-load on the server making them faster for the users

  - npx create-next-app
  - strip app of default content
  - research how you want design to look
  - sketch design of the initial layout and decide what data is initially required and what will be shown on the click-through more details page

- think about design css / mui framework
  - if mui then this needs to be installed in particular way so that the style engine works well throughout the entire app:
    - npm i @mui/material @emotion/styled @emotion/server @emotion/cache @emotion/react @mui/icons-material
    - in pages: create \_document.js and paste in boilerplate
    - in pages: create \_app.js and paste in boilerplate
      - add any fonts required for the project plus change in src/theme.js (see MUI docs for theming syntax)
    - create src folder:
      - create: theme.js file for MUI themes (use boilerplate for now)
      - create: createEmotionCache.js file for serving emotion to style engine (use boilerplate for now)
      - [For boilerplate files](https://github.com/mui/material-ui/tree/master/examples/nextjs)

### WIREFRAMING & COMPONENTS

- break UI into component hierarchy
  - draw boxes around every component and subcomponent and name them
    - create components folder
  - decide what each component will do and will it require a new function or object and remember single responsibility principle
  - arrange components into hierarchy with parent/child relationship
  - build static version of app layout based on wireframes and hierarchy (remember DRY & KISS principles)

### STATE & DATA

- Think about the minimalset of changing data that the app needs to remember to compute everything on demand.
- Think of all pieces of data required for each flow and which require state
  - does the remain unchanged over time
  - is it passed in from parent via props
  - can you computer it using existing state or props
  - document what components require state and what does not and where the state will live to own and change state (Context Provider can be used to provide data to all pages of the app)

#### GET DATA

- user getServerSideProps to get the state on server side
- pass to the page component as props
- destructure and save to state
- map over data and render card component for each country in data

#### DATA POINTS

- pass country object to card as props to use data
- destructure data inside the component and use

- flag image
- name of country: String
- population: Number
- Region: String
- Capital: String

#### FILTERING DATA

- when user types into Input component filter the countries according to inputValue
- pass filter function into Input component as props
- call the function in the component
- get the value from the event and set to state
- receive the value in the parent
- filter through the dataset and filter the country by name that matches the incoming value
- run validation for lowercase and spaces to error proof input
