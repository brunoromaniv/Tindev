
const express = require('express')

const routes = express.Router();
const LikeControler = require('./controllers/LikeController');
const DislikeLikeControler = require('./controllers/DislikeController');
const DevController = require('./controllers/DevController');


routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeControler.store);
routes.post('/devs/:devId/dislikes', DislikeLikeControler.store);

module.exports = routes;