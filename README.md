<h1 align="center"><img src="./assets/readme-assets/tippr-readme-header.png" /></h1>

# What is tippr?

In the modern service industry, laws and protocol are in place to make sure that employees receive tips from customers. However, shady practices still exist; tips are distributed unevenly between staff that aren't supposed to receive them, or perhaps the owner illegally takes a cut.

To combat these practices, we have made `tippr`, the modern tipping app that puts the financial control of receiving tips back into the hands to the employees and their patrons. `tippr` allows employees to direclty receive tips by cutting out the middleman, and customers will find that their interactions with service workers becomes better as a result of their direct tips.

## Table of Contents

- [Sample Screenshots](#sample-screenshots)
- [Front-End Instructions](#front-end-instructions)
- [Back-End Instructions](#back-end-instructions)
- [Built With](#built-with)
- [Acknowledgements](#acknowledgements)

## Sample Screenshots

![First sample image of tippr landing page](./assets/readme-assets/tippr-home-page.png)

![Second sample image of tippr sign-in screen](./assets/readme-assets/tippr-employee-profile.png)

![Third sample image of tippr employee list](./assets/readme-assets/tippr-employee-list.png)

![Fourth sample iamge of tippr tipping form](./assets/readme-assets/tippr-tip-form.png)

## Front-End Instructions

- Fork and clone the repository to your local machine
- Use the command `cd client` to navigate into the client directory
- Install dependencies by using the `yarn` or `yarn install` command in the terminal
- Ensure that the server is running from the `server` directory
- Run the client front-end by launching it with the command `yarn start`
- Navigate to `localhost:3000` on your browser of choice to view the client application

## Back-End Instructions

##### Data Schema (data structure)

`Worker`

```
{
    "username": "admin",              // required
    "first_name": "One Punch",        // defaults to 'Test'  required
    "last_name": "Man",               // defaults to 'Test'  required
    "occupation":"barista"            // required
    "user_type": 'employee'
}
```

`Tip`

```
{
        "worker_id": 1,                     // required
        "tip_amount": 10                    // required
}
```

`User`

```
{
    "username":'admin',  // required
    "password":'admin'   // required
}
```

`Test user account`

```
username:admin
password:password

username:mariekondo
password:sparksjoy

username:pewdiepie
password:tseries

username:ben
password:ben
```

| Method | Endpoint            | Description                                                                                                                                                                                             |
| ------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /register           | Creates a `user` using the information sent inside the `body` of the request.                                                                                                                           |
| POST   | /login              | Use the credentials sent inside the `body` to authenticate the user. On successful login, returns a message with the username and a JWT token                                                           |
| POST   | /tips               | Add a new `tip`, supply with `worker_id` and `tip_amount`                                                                                                                                               |
| GET    | /tips               | Get a list of tips                                                                                                                                                                                      |
| GET    | /tips/:id           | Get a specific tip with the provided id                                                                                                                                                                 |
| GET    | /workers            | If the user is logged in, respond with an array of all the workers contained in the database. If the worker is not logged in, return a message:"No token provided, must be set on Authorization Header" |
| GET    | /workers/:id        | If the user is logged in, respond with an object of the worker                                                                                                                                          |
| PUT    | /workers/:id        | Creates a new worker and returns with the id of the created worker                                                                                                                                      |
| POST   | /workers            | Creates a new worker and returns with the id of the created worker                                                                                                                                      |
| POST   | /workers/:id/upload | Post an image file to the specific worker profile                                                                                                                                                       |

### GET:

###### /workers

- returns a list of workers

```
axios
    .get('yourURL/workers')
    .then(res=> console.log(res))
    .catch(err=>console.log(err))
```

- console logs

```
       [
    {
        "id": 1,
        "username": "admin",
        "profile_photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk6_nkVgvmr5atTYATHSKriNP-AGyW7vJG9gJKVNlxdDwAKZjD",
        "working_since": "2012/11",
        "tagline": "Consecutive Punch!",
        "first_name": "One Punch",
        "last_name": "Mann",
        "occupation": "waiter",
        "user_type": "guest"
    },
    {
        "id": 2,
        "username": "mariekondo",
        "profile_photo": "https://pbs.twimg.com/media/DaWpr8HX4AAuUvz.jpg",
        "working_since": "2012/11",
        "tagline": "does it spark joy?",
        "first_name": "Marie",
        "last_name": "Kondo",
        "occupation": "barista",
        "user_type": "employee"
    }]
```

###### /workers/:id

- returns a worker object with the specified id

```
axios
    .get('yourURL/workers/1')
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
```

- console logs

```
        {
    "id": 1,
    "username": "admin",
    "profile_photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk6_nkVgvmr5atTYATHSKriNP-AGyW7vJG9gJKVNlxdDwAKZjD",
    "working_since": "2012/11",
    "tagline": "Consecutive Punch!",
    "first_name": "One Punch",
    "last_name": "Mann",
    "occupation": "waiter",
    "user_type": "guest",
    "tips": [
        {
            "tip_date": "2019-02-03 21:58:19",
            "tip_amount": 10
        },
        {
            "tip_date": "2019-02-05 21:58:19",
            "tip_amount": 5.25
        },
        {
            "tip_date": "2019-02-05 21:58:19",
            "tip_amount": 7.8
        },
        {
            "tip_date": "2019-02-05 21:58:19",
            "tip_amount": 9.9
        }
    ],
    "total_tip": 32.95
}
```

###### /tips

- returns a list of tips

```
axios
    .get('yourURL/tips')
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
```

- console logs

```
[
     {
        "id": 1,
        "worker_id": 1,
        "tip_date": "2019-02-03 21:58:19",
        "tip_amount": 10
    },
    {
        "id": 2,
        "worker_id": 2,
        "tip_date": "2019-02-04 21:58:19",
        "tip_amount": 5
    }
]
```

###### /tips/1

- returns a tip

```
axios
    .get('yourURL/tips/1')
    .then(res=>console.log(res))
    .catch(err=> console.log(err))
```

- console logs

```
{
    "id": 1,
    "worker_id": 1,
    "tip_date": "2019-02-03 21:58:19",
    "tip_amount": 10
}
```

### POST:

###### /register

- register an user and returns the id of the created user

- returns

```
{
    "userId": 9,
    "username": "admsin",
    "token": "gakjsdgfjkwhgjfgmjagjhgfkeawgwaefsdfsadfasefsafsafas",
    "user_type": "employee"
}
```

###### /login

- logs the user in and returns a token

```
{
    "userId": "9",
    "username": "admsin",
    "user_type": "employee",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbXNpbiIsImlhdCI6MTU0OTU5ODY2MX0.JsWkCCCjRg9pDzJ3LOTTW8wf3tjqQ6129u8SHTEt7mA"
}
```

###### /workers

- creates a new worker with the supplied `workeObject`(see schema for required fields) and returns with the id of the created worker

```
axios
    .post('yourURL/workers',workerObject)
    .then(res=> console.log(res))
    .catch(err=> console.log(err))
```

- console logs

```
{
    "id": 21,
    "message": "worker created with the id of 21"
}
```

###### /workers/:id/upload

###### /tips

- adds a tip and returns the id of the tip added

```
axios
    .post('yourURL/tips',tipObject)
    .then(res=> console.log(res))
    .catch(err=> console.log(err))
```

- console logs

```
[1]
```

### PUT:

###### /workers/:id

- Updates an existing worker with the `change`, and returns the id of the worker selected

```
axios
    .put('yourURL/workers/id',change)
    .then(res=> console.log(res))
    .catch(err=> console.log(err))
```

- console logs

```
{
    "id": 1,
    "username": "admin",
    "profile_photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk6_nkVgvmr5atTYATHSKriNP-AGyW7vJG9gJKVNlxdDwAKZjD",
    "working_since": "2012/11",
    "tagline": "Consecutive Punch!",
    "first_name": "One Punch",
    "last_name": "Mann",
    "occupation": "waiter",
    "user_type": "guest",
    "tips": [
        {
            "tip_date": "2019-02-03 21:58:19",
            "tip_amount": 10
        },
        {
            "tip_date": "2019-02-05 21:58:19",
            "tip_amount": 5.25
        },
        {
            "tip_date": "2019-02-05 21:58:19",
            "tip_amount": 7.8
        },
        {
            "tip_date": "2019-02-05 21:58:19",
            "tip_amount": 9.9
        }
    ]
}
```

## Built With

- Landing Page
  - [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
  - [LESS CSS Preprocessor](http://lesscss.org/)
  - [JavaScript](https://www.ecma-international.org/publications/standards/Ecma-262.htm)
- Front-End
  - [React](https://reactjs.org/)
  - [React Router](https://github.com/ReactTraining/react-router)
  - [Redux](https://redux.js.org/)
  - [Styled Components](https://www.styled-components.com/)
  - [Axios](https://www.npmjs.com/package/axios)
- Back-End
  - [Express](https://expressjs.com/)
  - [SQLite](https://www.sqlite.org/index.html)

## Authors

- [Huthman King](https://github.com/kinghuthman) - Scrum Master
- [Kermitt Davis](https://github.com/kermittd) - User Experience & Design
- [Cameron Dunn](https://github.com/cdunn2013) - iOS Developer
- [Joe Pak](https://github.com/josephpak) - User Interface
- [Justin Davis](https://github.com/JustinDavisA) - User Interface
- [Arshak Asriyan](https://github.com/AAsriyan) - User Interface
- [Nathan Thomas](https://github.com/nwthomas) - Front-End Architect
- [Leigh-Ann Friedel](https://github.com/lafriedel) - Front-End Architect
- [Ben Tsao](https://github.com/cbtsao47) - Back-End Architect
- [Alex Carter](https://github.com/alexcartaz) - Back-End Architect

## Acknowledgements

- Thanks to [Lambda School](https://lambdaschool.com/) for organizing the first-ever official Build Week
- Thanks to the entire `tippr` team for a phenomenal build week and a great experience
- Thanks to coffee for keeping us sane for what seemed like a 5 day blur of activity
