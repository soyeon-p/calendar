import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { dustDataState, selectedCityState } from '../../Recoil/atoms';
import { useStyles } from '../../Styles/styles';

const Content = () => {
  const classes = useStyles();
  const dustData = useRecoilValue(dustDataState)
  const selectedCity = useRecoilValue(selectedCityState);

  return (
    <>
      {selectedCity && (
        <>
          <Typography variant="h4" color="primary">
            {selectedCity}
          </Typography>
          <Grid container spacing={3}>
            {dustData.map((dustCard) => (
              <Grid item key={dustCard.dataTime}>
                <Card className={classes.card}>
                  <CardHeader avatar="Dust" title={dustCard.dataTime} />
                  <CardContent>
                    <Typography>{dustCard[selectedCity]}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </>
  );
};

export default Content;
