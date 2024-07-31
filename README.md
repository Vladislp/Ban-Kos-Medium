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
- [How it looks in practice](#how-it-looks-in-practice)

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

## How it looks in practice :star: :star:

### Front-End React Application
1) We launch Front-End React application. I go to my project folder, currently using "Git Bash" on my pc and make sure i am in: "/Ban-Kos-Medium/client/client".
Should look something like this
![image](https://github.com/user-attachments/assets/7644b8ff-fd2c-4b8c-93f0-03a0712c388d)
2) Next, we simply type: "npm start". You should see similar to this screen.
![image](https://github.com/user-attachments/assets/a61242fd-c8b9-4856-b3f8-31f979a0b063)
2.1) Go to your browser and type in searchbar: http://localhost:3006/. This should be the result
![image](https://github.com/user-attachments/assets/91f2d50e-7fae-4446-baa2-c67429ab9a90)

### Back-End Node.js/Express.js/MongoDB application
1) We launch Back-End Node.js/Express.js application. I go to my project folder in new "Git Bash" terminal and make sure i have this location: "/Ban-Kos-Medium". You should see similar to this...
NB! You should see 'app.js' file in folder
![image](https://github.com/user-attachments/assets/cfefe538-5c18-4dda-83c4-3c6c519d4618)
2) Next, type "node app.js"...you should see similar picture
![image](https://github.com/user-attachments/assets/e704b142-2a2f-462d-bda9-2e4688c084e3)
3) Congratulation, Back-End works properly.

### MongoDB
As for MongoDB, explained in - [Set up environment variables](#set-up-environment-variables) section .env file is crucial with MongoDB Atlas connection.
For security reasons, it is not allowed to public push sensitive information to the internet. (Crawlers are everywhere)
If my .env, which consistes "connection string" with MongoDB required, i can provide it.
But now, i can show simple way to have connection.

1) When cluster is ready, you should head to "Connect" section.
![1](https://github.com/user-attachments/assets/785b0f55-9c80-4559-a6e6-6357b71b4dfc)
2) Choose "Drivers"
![2](https://github.com/user-attachments/assets/98b60839-231a-434c-9d1c-26c2d437bfbd)
3) Under "Add your connection string into your application code" you will see you'r connection string to your MongoDB.
![3](https://github.com/user-attachments/assets/b769f46d-01f6-4b29-bbe3-0f5acaa52393)
4) Cloned project SHOULD NOT have .env file inside root folder. Create it and put inside your .env file.

        MONGODB_URI="connection string"

### Take it further
1) This is how my date looks in MongoDB
![image](https://github.com/user-attachments/assets/e49c1d08-3e88-4b13-aa69-580f5e579f87)
2) While everything works, i can try to login with my POSTMAN...just to be sure.
![image](https://github.com/user-attachments/assets/d42ab4a4-e8e4-48b8-a093-6e45d8ffca0c)
![POSTMAN](https://github.com/user-attachments/assets/262ca776-f925-4305-ae40-96b4c83187d5)
3) It seems everything works here, let's look at the browser
![image](https://github.com/user-attachments/assets/3659a995-8566-4616-a54a-391741d71c7f)
We can see, that no key is provided before login, let's see further...
![image](https://github.com/user-attachments/assets/845b5f54-22a1-448a-a285-ca1826122a78)
Login is successful and we have new JWT to work with.
3.1) Right, we are in...but we also should have remove JWT, when client leaves our app.
![image](https://github.com/user-attachments/assets/c816813b-152a-4d23-ae82-c83c4ee43f50)
I know, that it might look that i have similar screenshot :D ... but after we logout JWT is gone.
![image](https://github.com/user-attachments/assets/70392c53-6933-40c3-a7ad-1ef64646660b)







