![Fatura Shopping Cart](https://user-images.githubusercontent.com/18647990/132025497-c63e8a57-1f6b-40cc-a3b7-3510b45b4e97.png)
# Fatura-shopping-cart
<h2 align="center">Fatura Shopping Cart using MEVN - MongoDB, Express, Vue.js, & Nodejs</h2>


## Table of Contents

- [About the Project](#about-the-project)
  - [Built with](#build-with)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running](#running)
- [Screenshots](#screenshots)
- [UI](#ui)
- [Leftouts](#leftouts)
- [Lessons Learned](#lessons-learned)
- [File Structure](#file-structure)
- [License](#license)

## About The Project
> **Fatura-shopping-cart** is a simple shopping cart for **Fatura** Fullstack technical task.

### Build with
- [Vue.js](https://vuejs.org/)
- [mongoDB](https://www.mongodb.com/)
- [Nodejs](https://nodejs.org/en/)
- [Express](https://expressjs.com/)


## Getting Started
> This is an list of needed instructions to set up your project locally, to get a local copy up and running follow these instructuins.

### Installation

1. **_Clone the repository_**

```sh
$ git clone https://github.com/Mohannedkandil/Fatura-shopping-cart.git
```
2. **_Navigate to repository directory_**
```sh
$ cd Fatura-shopping-cart
```
3. **_Install dependencies_**

```sh
$ npm install
```
4. **_Running on development mode_**
```sh
$ npm run start
```
5. **_Running Server_**
```sh
$ cd server
$ nodemon index.js
```
## Screenshots

<div align="center">
  
![home](https://user-images.githubusercontent.com/18647990/132264170-bb87070c-45ff-4afa-820b-62b149904261.PNG)
![home2](https://user-images.githubusercontent.com/18647990/132264175-82011f06-ca2a-4397-bf95-9d33677c362f.PNG)
![home3](https://user-images.githubusercontent.com/18647990/132264176-bed08a40-0f9b-4742-a71f-18c1db876966.PNG)
![home4](https://user-images.githubusercontent.com/18647990/132264178-453d4689-7a7b-4184-90bd-7db4b3531ff6.PNG)

</div>


## UI
I have started to design interface of the website using Figma as a future design for the website. Currently, I'm redesigning the UI with UX for a more enhanced solution

![figma](https://user-images.githubusercontent.com/18647990/132265955-e6f9694f-90e5-4ea8-ad9a-cf3cc5811ac5.png)

## Leftouts
- To start use **vuex** for the state managment, it will be ready for a large scale of users.
- Make a **coupon** component for generating coupons for users with various numbers/percentages.
- Authentication, authorization (I'm working on it now) with 2 roles, admin(**seller**) and user(**buyer**).


## Lessons Learned
When I received the task, I was not familiar with Nodejs. So I started to learn the basics of Nodejs and some practice with simple applications. Then, I did a quick warm up on VUE js (Vue CLI, Vue router basics, forms and data binding, fetching data, async code, routing) 

I have learned the following from various resources (Nodejs):      
- Node Module System 
- Node Package Manager
- Express basic apps
- Building RESTful API's using Express
- Express Advacned Topics (Middleware, creating custom Middleware, third-party Middleware, configuration, debuging, Templating Engines, Database Integration)
- CRUD operations using MONGODB
- Mongo - Data Validation
- Authentication, authorization, and Unit Testing (working on it now)





## File Structure
                                    
    Fatura-shopping-cart
    ├── README.md
    ├── LICENSE
    ├── node_modules
    ├── package.json
    ├── .gitignore
    ├── build
    ├── public
    │   ├── index.html
    │   └── logo.jpg
        └── favicon
    └── server
        ├── routes
        |   └── index.js
        │   └── api
               └── coupons.js
               └── items.js
        ├── api	
        |   └── fake.js	
    └── src
        ├── assets
        │   └── images
        ├── api	
        |   └── fake.js	
        ├── components	
        |   ├── Navbar
        |   ├── Popup
        |   ├── Footer
        |   ├── PopupEdit
        ├── plugins	
        |   ├── vuetify	
        ├── views	
        |   └── Items	
        |   └── Dashboard	
        ├── App.vue	
        ├── ItemService.js	
        ├── main.js
        ├── router.js	

## License

> This software is licensed under MIT License, See [License](https://github.com/AbdallahHemdan/Instanews/blob/master/LICENSE) for more information ©MohannedKandil.

