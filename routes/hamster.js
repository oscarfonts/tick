var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data/hamster.db');

/* GET users listing. */
router.get('/', function(req, res, next) {
    db.all('SELECT id, name FROM categories ORDER BY name', function(error, categories) {
        if (error) throw error;
        res.send(200, categories);
    });
});

router.get('/:category', function(req, res, next) {
    db.all('select a.id, a.name activity, c.name category from activities a, categories c where a.category_id = c.id and c.name = \'' + req.params.category +'\'', function(error, activities) {
        if (error) throw error;
        res.send(200, activities);
    });
});

module.exports = router;
