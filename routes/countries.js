const express = require('express');
const router = express.Router();
const Country = require('models/Country');

/* GET home page. */
router.get('/', async (req, res) => {
    const countries = await Country.findAll();
   //res.send(countries);
   res.render('countries/index', {title: 'Countries', countrylist: countries});
});

/* GET a single country from the database */
router.get('/:id', async (req, res) => {
    const requestedId = req.params.id;
    
    // Query the database to get the country with that ID
    const country = await Country.findOne({
        where: {id: requestedId}
    });
    
    // Render the detail view for that country
    res.render('countries/detail', {
        title: 'Country Details: ' + country.name,
        countryItem: country
    });
});

module.exports = router;