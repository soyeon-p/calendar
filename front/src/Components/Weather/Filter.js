import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import { weatherDataState } from '../../Recoil/atoms';
import { useStyles } from '../../Styles/styles';

const cityList = [
  { name: '속초', code: 90 },
  { name: '서울', code: 108 },
  { name: '인천', code: 112 },
  { name: '수원', code: 119 },
  { name: '서산', code: 129 },
  { name: '청주', code: 131 },
  { name: '포항', code: 138 },
  { name: '대구', code: 143 },
  { name: '전주', code: 146 },
  { name: '울산', code: 152 },
  { name: '창원', code: 155 },
  { name: '광주', code: 156 },
  { name: '부산', code: 159 },
  { name: '제주', code: 184 },
  { name: '세종', code: 239 },
  { name: '대전', code: 258 },
];

const Filter = () => {
  const classes = useStyles();
  const [,setWeatherData] = useRecoilState(weatherDataState);
  const [cityCode, setCityCode] = useState('');

  const onChangeCity = useCallback((e) => {
    setCityCode(e.target.value);
  }, []);

  const onSubmit = useCallback((e) => {    
    const fetchData = async () => {
      const {
        data: {
          response: {
            body: {
              items: { item: weatherData },
            },
          },
        },
      } = await axios.post('http://localhost:3065/weather/city', {
        cityCode,
      });
      setWeatherData(weatherData);
    };

    e.preventDefault();
    fetchData();
    setCityCode('')
  }, [cityCode, setWeatherData]);

  return (
    <Box className={classes.box}>
      <Typography variant="subtitle1">2022-01-15</Typography>
      <Typography variant="h5">Weather</Typography>
      <div className={classes.filter}>
        <form onSubmit={onSubmit}>
          <FormControl className={classes.formControl}>
            <InputLabel>지역</InputLabel>
            <Select value={cityCode} onChange={onChangeCity}>
              {cityList.map((city) => (
                <MenuItem key={city.code} value={city.code}>
                  {city.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button type="submit" variant='contained' color='primary'>Select</Button>
        </form>
      </div>
    </Box>
  );
};

export default Filter;
