const router = require('express').Router();
//Import all API routes from api/index/js (no need for index.js though since it's implied)
const pizzaRoutes = require('./pizza-routes');

//add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/pizzas', pizzaRoutes);

module.exports = router;