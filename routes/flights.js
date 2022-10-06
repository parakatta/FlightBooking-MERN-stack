const express=require('express');
const router=express.Router();

const {getFlights,getFlightDetail}= require('../controllers/flights');

router.route('/').get(getFlights);
router.route('/about').get(getFlightDetail);


module.exports=router;