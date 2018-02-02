var express = require('express');
var router = express.Router();
const request = require("request");
const cheerio = require('cheerio');

/* GET menu listing. */
router.get('/', function(req, res, next) {
 
    const url = "https://chalmerskonferens.se/lunchmenyer-johanneberg/" ;
    var returnz = "test";
    request(url, { json: true}, (err, result, body) => {
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
        /* Extract todays meals */
        /* Really ugly and will have to be redone */
        var firstVeg = menus[1].match(/\d/);
        var veg = menus[1].slice(0, menus[1].indexOf(firstVeg));
        var vegCO = menus[1].slice(menus[1].indexOf(firstVeg)+2, menus[1].length).split(' ')[0];

        var firstFish= menus[2].match(/\d/);
        var fish = menus[2].slice(0, menus[2].indexOf(firstFish));
        var fishCO = menus[2].slice(menus[2].indexOf(firstFish)+2, menus[2].length).split(' ')[0];
        
        var firstMeat = menus[3].match(/\d/);
        var meat = menus[3].slice(0, menus[3].indexOf(firstMeat));
        var meatCO = menus[3].slice(menus[3].indexOf(firstMeat)+2, menus[3].length).split(' ')[0];

        var firstSallad= menus[4].match(/\d/);
        var sallad = menus[4].slice(0, menus[4].indexOf(firstSallad));
        var salladCO = menus[4].slice(menus[4].indexOf(firstSallad)+2, menus[4].length).split(' ')[0];
        
        var firstSoup= menus[5].match(/\d/);
        var soup = menus[5].slice(0, menus[5].indexOf(firstSoup));
        var soupCO = menus[5].slice(menus[5].indexOf(firstSoup)+2, menus[5].length).split(' ')[0];
        
        var firstExpress= menus[6].match(/\d/);
        var express = menus[6].slice(0, menus[6].indexOf(firstExpress));
        var expressCO = menus[6].slice(menus[6].indexOf(firstExpress)+2, menus[6].length).split(' ')[0];
       
        //New json 
        res.json({
          veg: veg.split(':')[1],
          vegCO: vegCO,
          fish: fish.split(':')[1],
          fishCO: fishCO,
          meat: meat.split(':')[1],
          meatCO: meatCO,
          sallad: sallad.split(':')[1],
          salladCO: salladCO,
          soup : soup.split(':')[1],
          soupCO: soupCO,
          express: express.split(':')[1],
          expressCO: expressCO
        });

        }
    })
});

module.exports = router;
