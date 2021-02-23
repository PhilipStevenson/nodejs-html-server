# Node.js HTML Server
A Node.js server that returns a HTML page with a background image when the `/` endpoint is called

![](src/public/image.jpeg)

## Prerequisites
* Docker installed
* NPM installed

## Environment variables
The following environment variables need to be set before the application can be run
```shell
export APP_PORT=3000
```

## Running the application
### Using NPM
Install dependencies
```shell
npm install
```
Start the server
```shell
npm start
```
Go to the following URL
`localhost:<APP_PORT>` e.g. `localhost:3000`

### Docker 🐳
Build the image and run the container using Docker compose
```shell
npm run docker
```
Go to the following URL
`localhost:<APP_PORT>` e.g. `localhost:3000`

## Running the unit tests
```shell
npm test
```
