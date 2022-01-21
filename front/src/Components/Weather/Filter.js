import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from '@material-ui/core';
import axios from 'axios';
import React, { useState, useCallback } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { weatherValueState, weatherDataState, submitFormState } from '../../Recoil/atoms';
import { useStyles } from '../../Styles/styles';
import { cityList, temperatureList } from './WeatherList';
import dayjs from 'dayjs';

const Filter = () => {
  const classes = useStyles();
  const [,setWeatherData] = useRecoilState(weatherDataState);
  const [temperature, setTemperature] = useState(null)
  const [cityCode, setCityCode] = useState('');
  const [, setWeatherValue] = useRecoilState(weatherValueState)
  const [, setSubmitForm] = useRecoilState(submitFormState)
  const resetWeatherData = useResetRecoilState(weatherDataState)

  const onChangeCity = useCallback((e) => {
    setCityCode(e.target.value);
  }, [setCityCode]);

  const onChangeTemperature = useCallback((e) => {
    setTemperature(e.target.value)
  }, [])

  const onSubmit = useCallback((e) => {    
    const cityName = cityList.find((cityData) => cityData.code === cityCode).name
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
    resetWeatherData()
    setWeatherValue({
      temperature,
      cityName
    })
    fetchData();
    setSubmitForm(true)
  }, [resetWeatherData, setWeatherData, setWeatherValue, setSubmitForm, cityCode, temperature]);

  return (
    <Box className={classes.box}>
      <Typography variant="subtitle1">{dayjs().format('YYYY-MM-DD')}</Typography>
      <Typography variant="h5">Weather</Typography>
      <form onSubmit={onSubmit} className={classes.filter}>
        <FormControl className={classes.formControl}>
          <InputLabel>지역</InputLabel>
          <Select value={cityCode} onChange={onChangeCity} required>
            {cityList.map((city) => (
              <MenuItem key={city.code} value={city.code}>
                {city.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl conponent='fieldset'>
          <FormLabel component='legend'>Temperatures</FormLabel>
          <RadioGroup
            aria-label='temperature'
            value={temperature}
            control={<Radio  />}
            name='temperature'
            onChange={onChangeTemperature}
          >
            {temperatureList.map((temperatureMenu) => (
              <FormControlLabel 
                key={temperatureMenu.value}
                value={temperatureMenu.value}
                label={temperatureMenu.title} 
                control={<Radio required />}
              />
            ))}
          </RadioGroup>
        </FormControl>

        <Button type="submit" variant='contained' color='primary' className={classes.resetButton}>Select</Button>
      </form>
    </Box>
  );
};

export default Filter;
