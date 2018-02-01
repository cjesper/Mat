var express = require('express');
var router = express.Router();
const request = require("request");
const cheerio = require('cheerio');

/* GET menu listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  var result = extractMenu();
  console.log("RESULT!");
  console.log(result);
  res.json([{
    id:1,
    username: "aff"
    }, {
    id:2,
    username: "kaffff"
    }]);
});

/* Get kårrestaurangen menu */
var extractMenu = function () {
    const url = "https://chalmerskonferens.se/lunchmenyer-johanneberg/" ;
    console.log("Hi!");
    var returnz = "test";
    request(url, { json: true}, (err, res, body) => {
        if(err) {
            console.log("Error: " + err); 
        } else {
            var menus = [];
            var $ = cheerio.load(body);
            /* Scrape the kåris menu */
            var unionMenu = $('div[data-index="1"]').text();
            var childs = $('div[data-index="1"]').find('tbody').length;
            var next = $('div[data-index="1"]').children('div').children('div')
                .children('div').children('table').children().each(
                    function (i, elem) {
                        menus[i] = $(this).children().text();
                    });
            /* Extract todays meals*/
            var veg = menus[1].split(/[0-9]/)[0];
            var fish= menus[2].split(/[0-9]/)[0];
            var meat = menus[3].split(/[0-9]/)[0];
            var sallad = menus[4].split(/[0-9]/)[0];
            var soup = menus[5].split(/[0-9]/)[0];
            var express= menus[6].split(/[0-9]/)[0];
            console.log(veg);
            console.log(fish);
            console.log(meat);
            console.log(soup);
            console.log(sallad);
            console.log(express);
        } 
    })
} 

module.exports = router;
