var express = require('express');
var router = express.Router ();
var http = require('http');

router.get('/', function(req, res, next) {
    res.json([{
        id: 1,
        username : "aff"
    }, {
        id:2,
        username: "kaff"
    }]);
});

function getMenu () {
    var options = {
        host: "http://carboncloudrestaurantapi.azurewebsites.net",
        path: "/api/menuscreen/gethtmlweek?restaurantid=5"
    };

    callback = function(res) {

        res.on('data', function () {
            console.log("Got data!");
        });

        res.on('error', function () {
            console.log("Got an error!");
        });

        res.on('end', function () {
            console.log("end");
        } )
    };

    http.request(options, callback).end();
} 

module.exports = router;
getMenu();
