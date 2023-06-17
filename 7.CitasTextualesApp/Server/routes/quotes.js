const {Router} = require('express');
const { getQuotes } = require ( "../controller/quotesController" );


const router = Router();
      router.get('/',getQuotes);

module.exports = router;