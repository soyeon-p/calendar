const express = require('express');
const Calendar= require('../models/Calendar');


const router = express.Router();

router.route('/')
  .get(async (req, res, next) => {
    try {
      const calendars = await Calendar.findAll();
      res.json(calendars);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const calendar = await Calendar.create({
        schedule: req.body.schedule,
        start: req.body.start,
        finish: req.body.finish,
      });
      console.log(calendar);
      res.status(201).json(calendar);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });




module.exports = router;