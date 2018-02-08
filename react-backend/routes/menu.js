var express = require('express');
var router = express.Router();
const request = require("request");
const cheerio = require('cheerio');

/* GET menu listing. */
router.get('/', function(req, res, next) {
 
    //const url = "https://chalmerskonferens.se/lunchmenyer-johanneberg/" ;
    const url = "http://carboncloudrestaurantapi.azurewebsites.net/api/menuscreen/getdataday?restaurantid=5" 
    var returnz = "test";
    request(url, { json: true}, (err, result, body) => {
    if(err) {
        console.log("Error: " + err); 
    } else {
        var veg = body['recipeCategories'][0]['recipes'][0]['displayNames'][0]['displayName'];
        var vegCO = body['recipeCategories'][0]['recipes'][0]['cO2e'];
        
        var fish= body['recipeCategories'][1]['recipes'][0]['displayNames'][0]['displayName'];
        var fishCO = body['recipeCategories'][1]['recipes'][0]['cO2e'];
        
        var meat = body['recipeCategories'][2]['recipes'][0]['displayNames'][0]['displayName'];
        var meatCO = body['recipeCategories'][2]['recipes'][0]['cO2e'];
        
        var sallad = body['recipeCategories'][3]['recipes'][0]['displayNames'][0]['displayName'];
        var salladCO = body['recipeCategories'][3]['recipes'][0]['cO2e'];
        
        var soup = body['recipeCategories'][4]['recipes'][0]['displayNames'][0]['displayName'];
        var soupCO = body['recipeCategories'][4]['recipes'][0]['cO2e'];
        
        var express = body['recipeCategories'][5]['recipes'][0]['displayNames'][0]['displayName'];
        var expressCO = body['recipeCategories'][5]['recipes'][0]['cO2e'];
        
        if (veg) {
              res.json({
                  veg: veg, 
                  vegCO: vegCO,
                  fish: fish, 
                  fishCO: fishCO,
                  meat: meat,
                  meatCO: meatCO,
                  sallad: sallad,
                  salladCO: salladCO,
                  soup : soup,
                  soupCO: soupCO,
                  express: express,
                  expressCO: expressCO
              });
        } else {
              res.json({
                  veg: "Default veg", 
                  vegCO: 100,
                  fish: "Default fish", 
                  fishCO: 100,
                  meat: "Default meat", 
                  meatCO: 100,
                  sallad: "Default sallad",  
                  salladCO: 100,
                  soup : "Default soup", 
                  soupCO: 100,
                  express: "Default express", 
                  expressCO: 100
              });
        }
    }
});
});

module.exports = router;
