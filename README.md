# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Stack and Tools Used
React: The foundation of our project, chosen for its component-based architecture, virtual DOM, and strong community support, which facilitates the building of interactive and dynamic user interfaces.

Ant Design: Used for several components such as input forms, buttons, dropdowns, and selects. Ant Design offers a rich set of customizable components, ensuring a consistent look and feel across the application, while also accelerating development time due to its pre-built, high-quality UI components.

SCSS (Sass): Chosen for the major styling as requested. SCSS extends CSS with variables, nested rules, and mixins, making the styling process more efficient and maintainable. It allows for better organization and reusability of styles, which is crucial in larger projects.

Zustand: Used for state management. Zustand is a small, fast, and scalable state management library. It provides a straightforward API that integrates seamlessly with React, making state management simpler and more intuitive compared to more complex solutions like Redux.

### Component Architecture and Modular Coding: 
This is emphasized throughout the project to ensure that each component is self-contained and reusable. This approach enhances maintainability, scalability, and readability of the codebase.

### Mocky: 
This is used to pull data for the application. Mocky is a useful tool for generating mock APIs for development and testing purposes. However, it is noted that Mocky is not 100% uptime reliable. To mitigate this, data has also been saved locally to ensure that the table components and filtering functionalities can be demonstrated even when Mocky is unavailable.

### Key Considerations
Ant Design Integration: Ant Design was integrated for form elements and interactive components to ensure a professional and consistent UI. It also reduces the time needed to style and implement complex UI elements from scratch.

SCSS (Sass): SCSS was required for styling, allowing us to leverage reusability methods like mixins, functions, and other SCSS features for more organized and modular styles. This approach enhances the maintainability and scalability of the codebase by providing a more structured and efficient way to write CSS.

Zustand for State Management: Zustand was chosen due to its simplicity and efficiency in handling state in a React application. It avoids the boilerplate associated with more complex state management solutions while providing the necessary functionality to manage state effectively.


### Notes for the Interviewer
Fallback Data: In scenarios where Mocky is down, the application will fall back to locally stored data. This ensures that the application remains functional and the table components and filtering features can be reviewed regardless of Mocky's availability
