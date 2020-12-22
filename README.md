### Weather API 

* Node JS & Express server that acts as a proxy in order to hide  sensitive information (such as API keys)


This project uses Express & Node JS. 

You can read about these technologies here: 

- [Express](http://expressjs.com/)
- [NodeJS](https://nodejs.org/en/)


## Project structure 
* Routes - Contains different API routes. Current this only contains City.js which serves weather information based on city 

* server.js - Main server file responsible for starting Express, initializing middleware, initializing CORS etc. 



## Getting started


### Available NPM commands: 


### server 
* Start a hot reloading development environment accessible at `localhost:8080`

```shell
npm run server 
```
### start 
* Command to start the server in production 

```shell
npm run start
```

### clean
* Clean node_modules and do a fresh npm install 

```shell
npm run clean
```

## Contributing 
* This project is open to contributions. Issued labelled with `Help wanted` or `Good first issue` are a good place to look if you're interested in contributing to this project. Once you've found an issue you want to work on leave a note on the issue stating that you want to work on this issue. 


### To start contributing: 


## Get an API key 
* Go to https://www.weatherapi.com/ to register for an API key and add it to .env.example 
* Move .env.example to .env 
```shell 
mv .env.example .env
``` 


open a pull request detailing your changes: 
1. Fork it 
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request detailing the changes made 
