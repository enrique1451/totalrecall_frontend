**Car Recall Application TotalRecall**

The app has been made for vehicle owners who want to be on top of official complaints and recalls for their particular vehicles. The app allows the owner of the account
to provide the Year, Make, Model of their vehicles and save them into the account database and retrieve respective vehicle data, recalls and the corresponding date in which the
recall was submitted or forced by the NHTSA government agency.

**Data**
The data is provided by the National Highway and Traffic Safety of America (NHTSA) government agency.
Photos for each vehicle are provided by the Unsplash public API. The API has a limit of 50 pictures per hour, so after this rate is exceeded,
then the pictures will not load.

**DB schema:**

```
user table
car table
user's cars table
```

**Local Environment**
To get the code on your local machine, run the PostgreSQL database script provided your local psql environment.

> \i totalrecall.sql
**Clone GitHub Files**
> git clone (https://github.com/enrique1451/totalrecall_frontend.git)
> git clone (https://github.com/enrique1451/totalrecall_backend.git)

To start the Frontend React app:
> cd *local/folder/where/frontend/cloned/git/repositories/were/saved/in/your/local/machine*
> npm install
> npm start

To start the Backend node server:
> cd *local/folder/where/backend/cloned/git/repositories/were/saved/in/your/local/machine*
> npm install
> node server.js

Run the app:

You can now navigate to (http://127.0.0.1:3000/)
Backend Server Address is (http://127.0.0.1:3001/)

Author Enrique Hoyos
