const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const router = express.Router();

const weatherURL = `http://apis.data.go.kr/1360000/AsosDalyInfoService/getWthrDataList?dataType=JSON&serviceKey=${process.env.API_KEY}&numOfRows=10&pageNo=1&dataCd=ASOS&dateCd=DAY&startDt=20210112&endDt=20210118&stnIds=108`;
router.get('/', async (req, res, next) => {
  try {
    const {data} = await axios.get(weatherURL);
    res.json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
