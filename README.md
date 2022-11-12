# Recipes app

This project is for sharing recipes. The front-end part is created with React library. The back-end part uses rest api created with Node js, Express js and Mongoose.

To access the application go to: https://we-love-cooking.web.app

You can also run it locally as per the below instructions.

## Available Scripts

In the project directory in folder Back-end, you can run:

### `npm start`
Runs the app in the development mode.\
The server will be running on [http://localhost:5000](http://localhost:5000) 

In the project directory in folder Front-end, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## The app has public and private part

### Public 
- Home page
- About us
- Login
- Register
- List of recipes

### Private
- Create recipe
- My recipes
- Logout

### The app has private and public guards

The logged user cannot access Login and Register Pages. The guest user cannot access Create, Edit, My recipes pages.

### Error handling 

If an error occurred the user/guest receives an appropriate notification/ message.


