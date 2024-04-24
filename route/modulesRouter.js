const express = require('express');
const router = express.Router();
const modulesService = require('../service/modulesService');

router.get('/', async function(req, res, next) {
    try {
        res.json(await modulesService.getAll());
        } 
        catch (error) {
            console.error('Error while fetching module data.', error.message);
            next (error);
        }
});

router.post('/', async function (req, res, next) {
    try {
        res.json(await modulesService.save(req.body));
    } 
    catch (err) {
        console.error('module data saving error. err.message');
        next(err);
    }
});

module.exports = router;