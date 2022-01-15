import {
  Box,
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
import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { selectedCityState } from '../../Recoil/atoms';
import { useStyles } from '../../Styles/styles';

const cityData = [
  'busan',
  'chungbuk',
  'chungnam',
  'daegu',
  'daejeon',
  'gangwon',
  'gwangju',
  'gyeongbuk',
  'gyeonggi',
  'gyeongnam',
  'incheon',
  'jeju',
  'jeonbuk',
  'jeonnam',
  'sejong',
  'seoul',
  'ulsan',
];

const Filter = () => {
  const classes = useStyles();
  const [selectedCity, setSelectedCity] = useRecoilState(selectedCityState);

  const onChangeCity = useCallback(
    (e) => {
      setSelectedCity(e.target.value);
    },
    [setSelectedCity]
  );

  return (
    <Box className={classes.box}>
      <Typography variant="subtitle1">2022-01-15</Typography>
      <Typography variant="h5">Filter</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>지역</InputLabel>
        <Select defaultValue="" onChange={onChangeCity}>
          {cityData.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">Dust alert</FormLabel>
        <RadioGroup aria-label="dust" control={<Radio />} name="dust">
          <FormControlLabel value="good" control={<Radio />} label="좋음" />
          <FormControlLabel value="average" control={<Radio />} label="보통" />
          <FormControlLabel value="bad" control={<Radio />} label="나쁨" />
          <FormControlLabel
            value="veryBad"
            control={<Radio />}
            label="매우 나쁨"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default Filter;
