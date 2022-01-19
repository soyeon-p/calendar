import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import { useStyles } from '../../Styles/styles';

const Filter = () => {
  const classes = useStyles();
  const [city, setCity] = useState('');

  const onChangeCity = useCallback((e) => {
    setCity(e.target.value);
  }, []);

  return (
    <Box className={classes.box}>
      <Typography variant="subtitle1">2022-01-15</Typography>
      <Typography variant="h5">Weather</Typography>
      <div className={classes.filter}>
        <form>
          <FormControl className={classes.formControl}>
            <InputLabel>지역</InputLabel>
            <Select value={city} onChange={onChangeCity}>
              <MenuItem value="서울">서울</MenuItem>
              <MenuItem value="경기">경기</MenuItem>
              <MenuItem value="울산">울산</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit">Select</Button>
        </form>
      </div>
    </Box>
  );
};

export default Filter;
