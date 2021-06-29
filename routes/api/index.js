const router = require('express').Router();
//Import all API routes from api/index/js (no need for index.js though since it's implied)

const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

//add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);

module.exports = router;