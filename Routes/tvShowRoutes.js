const express = require("express");

const router = express.Router();

const Controllers = require("../Controllers");

// matches GET requests sent to /api/tvshows
// (the prefix from server.js)
router.get('/Startup', (req, res)=> {
    Controllers.tvShowController.extracttvShowsAndCreateDataBase(res);
})
router.get('/', (req, res) => {
    Controllers.tvShowController.gettvShows(res);
})
// matches POST requests sent to /api/users/create
router.post('/create', (req, res) => {
    Controllers.tvShowController.createtvShow(req.body, res)
})

// matches PUT requests to /api/users/123 (stores 123 in id param)
router.put('/:id', (req, res) => {
    Controllers.tvShowController.updatetvShow(req, res)
})
// matches DELETE requests to /api/users/123 (123 in id param)
router.delete('/:id', (req, res) => {
    Controllers.tvShowController.deletetvShow(req, res)
})

module.exports = router;