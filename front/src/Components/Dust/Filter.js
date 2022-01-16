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
import React, { useCallback } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { selectedCityState, selectedDustState } from '../../Recoil/atoms';
import { useStyles } from '../../Styles/styles';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

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
  const [selectedState, setSelectedState] = useRecoilState(selectedDustState)
  const cityReset = useResetRecoilState(selectedCityState);
  const dustRest = useResetRecoilState(selectedDustState)


  const onChangeCity = useCallback(
    (e) => {
      setSelectedCity(e.target.value);
    },
    [setSelectedCity]
  );

  const onChangeDustState = useCallback((e) => {
    console.log(e.target.value)
    setSelectedState(e.target.value)
  }, [setSelectedState])

  const onFilterReset = useCallback(() => {
    cityReset();
    dustRest()
  }, [cityReset, dustRest]);

  return (
    <Box className={classes.box}>
      <Typography variant="subtitle1">2022-01-15</Typography>
      <Typography variant="h5">Filter</Typography>
      <div className={classes.filter}>
        <FormControl className={classes.formControl}>
          <InputLabel>지역</InputLabel>
          <Select value={selectedCity} onChange={onChangeCity}>
            {cityData.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">Dust alert</FormLabel>
          <RadioGroup aria-label="dust" value={selectedState} control={<Radio />} name="dust" onChange={onChangeDustState}>
            <FormControlLabel value="모두" control={<Radio />} label="모두" />
            <FormControlLabel value="좋음" control={<Radio />} label="좋음" />
            <FormControlLabel
              value="보통"
              control={<Radio />}
              label="보통"
            />
            <FormControlLabel value="나쁨" control={<Radio />} label="나쁨" />
            <FormControlLabel
              value="매우 나쁨"
              control={<Radio />}
              label="매우 나쁨"
            />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<RotateLeftIcon />}
          onClick={onFilterReset}
          className={classes.resetButton}
        >
          Reset
        </Button>
      </div>
    </Box>
  );
};

export default Filter;
