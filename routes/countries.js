const express = require('express');
const router = express.Router();
const Country = require('models/Country');

/* GET home page. */
router.get('/', async (req, res) => {
    const countries = await Country.findAll();
   //res.send(countries);
   res.render('countries', {title: 'Countries', countrylist: countries});
});

module.exports = router;