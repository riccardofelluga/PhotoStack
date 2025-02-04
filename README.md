# PhotoStack - [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

Semester group project for the Internet and Mobile Services course at the Free University of Bolzano. PhotoStack is an innovative and easy to use personal photo collection service. It uses AI techniques to order and categorise photos without any help from the user.

## Motivation


## Build status
The project is currently under active development, first release is foreseen in late March 2018

## Code style

## Screenshots

## Frameworks used

### Frontend

* [ml5.js](https://ml5js.org/)
* [ReactJS](https://reactjs.org/)

### Backend

* [nginx](https://nginx.org/en/) - Serves compiled react/frontend code, proxy request to Flask/Restify
* [NodeJS](https://nodejs.org/en/) - Restify or Hapi.js for REST API, most of the actual business logic and job distribution is to be done here.
* [Python](https://www.python.org/) - Flask for REST API, consumes jobs to do work with ML libraries
* [Redis](https://redis.io/) - Job queue, i.e. images to process
* [MinIO](https://minio.io/) - Object (image) storage system
* [MongoDB](https://www.mongodb.com/) - Storing metadeta and references to objects

## Features

## Credits

## License

PhotoStack is [BSD 3-Clause licensed](https://github.com/claudiosv/PhotoStack/blob/master/LICENSE).
