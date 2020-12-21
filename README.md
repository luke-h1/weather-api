### Weather API 

* Node JS & Express server that acts as a proxy in order to hide  sensitive information (such as API keys) from APIs. 

This project uses Express & Node JS. 

You can read about these technologies here: 

- [Express](http://expressjs.com/)
- [NodeJS](https://nodejs.org/en/)
<br />


## Project structure 
* Routes - Contains different API routes. Current this only contains City.js which serves weather information based on city 

* server.js - Main server file responsible for starting Express, initializing middleware, initializing CORS etc. 
<br />

## Getting started


### Available NPM commands: 


### server 
* Start a hot reloading development environment accessible at `localhost:8080`

```shell
npm run server 
```
### start 
* Command to start server in production 

```shell
npm run start
```

### clean
* Clean node_modules and do a fresh npm install 

```shell
npm run clean
```

