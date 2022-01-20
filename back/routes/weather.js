const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const router = express.Router();

router.post('/city', async (req, res, next) => {
  try {
    const {
      body: { cityCode },
    } = req;
    const weatherURL = `http://apis.data.go.kr/1360000/AsosDalyInfoService/getWthrDataList?dataType=JSON&serviceKey=${process.env.API_KEY}&numOfRows=10&pageNo=1&dataCd=ASOS&dateCd=DAY&startDt=20210112&endDt=20210118&stnIds=${cityCode}`;

    const { data } = await axios.get(weatherURL);
    return res.json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
