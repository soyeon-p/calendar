const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const router = express.Router();

const dustURL = `http://apis.data.go.kr/B552584/ArpltnStatsSvc/getCtprvnMesureLIst?itemCode=PM10&dataGubun=DAILY&searchCondition=MONTH&pageNo=1&numOfRows=100&returnType=json&serviceKey=${process.env.DUST_KEY}`;

router.get('/', async (req, res, next) => {
  try {
    const { data } = await axios.get(dustURL);
    res.json(data);

  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
