# My Authentication Project

## Overview

This project is a simple authentication system built with React, using `mdb-react-ui-kit` for UI components. It includes login and registration functionalities, and dynamic routing with React Router. The project features:

- A login page for user authentication.
- A registration page for new users.
- A dynamic Navbar that updates based on user authentication status.
- A welcoming page displayed after a successful login.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)

## Features

- **User Authentication**: Login and registration functionality.
- **Dynamic Navbar**: Updates based on user login status.
- **Protected Routes**: Redirects users to appropriate pages based on authentication state.
- **Responsive Design**: Utilizes `mdb-react-ui-kit` for a responsive user interface.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **React Router**: For client-side routing.
- **Axios**: For making HTTP requests.
- **MDB React UI Kit**: For UI components and styling.
- **Local Storage**: For storing authentication tokens.

## Setup and Installation

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/Vladislp/Ban-Kos-Medium.git
cd Ban-Kos-Medium
```
## Install Dependencies
```bash
npm install
or
yarn install
```
## Start Front-End React application
```bash
cd /Ban-Kos-Medium/client/client
npm start
```
The application will be available at http://localhost:3006.

![image](https://github.com/user-attachments/assets/004d873d-0ac5-4fff-b7d3-385e62e33821)

## Start Back-End Node/Express application
```bash
cd /Ban-Kos-Medium
node app.js
```
The application will be available at http://localhost:3000.

![image](https://github.com/user-attachments/assets/fa506527-3a26-41cb-a02c-8e45316bb23e)

## Start MongoDB

### MongoDB Setup

Using MongoDB Atlas:
1) Go to MongoDB Atlas.
2) Sign up or log in to your account.
3) Create a new cluster.
4) In the cluster, create a new database and a new user with access permissions.
5) Obtain the connection string from the "Connect" button in your cluster dashboard.

Using Local MongoDB:
1) Install MongoDB on your local machine from the official MongoDB website.
2) Start the MongoDB service.
3) Use the connection string mongodb://localhost:27017/your-database for your .env file.

### Set up environment variables:

1) Create a .env file in the root directory of the project.
2) Copy the contents of the .env.example file into your .env file.
3) Replace placeholder values with your actual MongoDB URI, secret key, and any other necessary environment variables.

### Example .env file:
```bash
MONGODB_URI=mongodb://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority
```
### Environment Variables Explanation

- `MONGODB_URI`: This is the connection string that your application uses to connect to the MongoDB database. It includes the username, password, cluster URL, and database name. Ensure that this string is kept secure and never hard-coded in your application files.

- `PORT`: This is the port number on which your backend server will run.

- `SECRET_KEY`: This is used for various purposes such as signing cookies or JWT tokens. Keep this value secret and secure.

###########################################################################################################

### If my .env is required, i can provide for you on requiest. Sharing somehow online is ... bad :)

###########################################################################################################
## Usage
### Authentication Flow

    Register: Navigate to /register to create a new account.
    Login: Navigate to /login to authenticate with your credentials.
    Home Page: After successful login, you will be redirected to /welcomelog where you can see a personalized welcome message.

### Navbar Behavior

    Logged Out: Displays links to Home, Register, and Login pages.
    Logged In: Displays a Welcome link and a Logout button. The Register and Login links are hidden.

### Logout

Click the "Logout" button on the Welcome page to clear the authentication token and return to the login page.
