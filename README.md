# School ERP Apis

## Expressjs + MongoDB

## Main Packages

- [express@4.17.1](https://expressjs.com/)
- [mongoose@5.12.0](https://mongoosejs.com/)
- [jsonwebtoken@8.5.1](https://www.npmjs.com/package/jsonwebtoken)
- [cors@2.8.5](https://www.npmjs.com/package/cors)

## How to start?

- npm install
- npm run start

## Other tools:

- [nodemon@2.0.7](https://nodemon.io/)
  For server restart on file change

## Postman collection

- [Postman](https://www.postman.com/)
- Use login api to get jwt token first
- Replace jwt token in each request in Auth section

## How to add new controller?

- Add new model
- Add new controller
- Add new route
- Register route in `routes/router.service.js` file

## For production use pm2

- [pm2](https://pm2.keymetrics.io/)
