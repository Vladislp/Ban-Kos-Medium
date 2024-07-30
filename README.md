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
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

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
git clone https://github.com/yourusername/your-repository-name.git
cd your-repository-name
```
## Install Dependencies
npm install
# or
yarn install
## Start the Development Server
npm start
# or
yarn start

The application will be available at http://localhost:3000.

## Usage
### Authentication Flow

    Register: Navigate to /register to create a new account.
    Login: Navigate to /login to authenticate with your credentials.
    Home Page: After successful login, you will be redirected to /welcome-log where you can see a personalized welcome message.

### Navbar Behavior

    Logged Out: Displays links to Home, Register, and Login pages.
    Logged In: Displays a Welcome link and a Logout button. The Register and Login links are hidden.

### Logout

    Click the "Logout" button on the Welcome page to clear the authentication token and return to the login page.

    src/

