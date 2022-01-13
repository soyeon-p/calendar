const express = require('express');
const axios = require('axios');
const dayjs = require('dayjs')
const dotenv = require('dotenv');
dotenv.config();

const router = express.Router();

const threeDaysAgo = dayjs().subtract(3, 'day').format('YYYY-MM-DD')
const dustURL = `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustWeekFrcstDspth?searchDate=${threeDaysAgo}&returnType=json&serviceKey=${process.env.DUST_KEY}&numOfRows=100&pageNo=1`;

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
