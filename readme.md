### Introduction
GreenLeaves is a web-based application whose main function is to be able to detect symptoms or diseases that exist in cassava plants based on their leaves.

### Installation For Backend Service
To be able to run this program you must install several tools, such as nodejs you can download nodejs using nvm:

```wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash```

after that you restart your terminal for using nvm.

The next step is to install node version 18 and above using nvm:

```nvm install v20```

And finally use the node with the version you have downloaded:

```nvm use v20```

Install nodemon so that the app can listen to changes without restarting the app:

```npm install -g nodemon```

Once successful, clone this repository using git clone:

```git clone https://github.com/azkaowi222/C242-PR611.git```

Change directory to Backend:

```cd Backend/```

Install the required dependencies:

```npm install```

### Set Environment Variables

Enter the Backend folder then find the .env file and fill it according to your application

### Run the application
```npm run start:dev```

At this point the backend application is running, you can see the application running on localhost:8080 on the console.

### Installation For Frontend

Change directory to Frontend folder

```cd Frontend/```

### Install the required dependencies:

```npm install```

### Change the backend URL on the frontend

Replace the backendUrl variable in the src/utils/fetch.js folder using the backend URL you ran earlier.

### Run the application

```npm run dev```

At this point the frontend & backend application is running, you can try open the app in web browser with the url provided.