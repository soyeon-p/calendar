import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../Styles/styles';

const Content = ({ dustData }) => {
  const classes = useStyles();
  console.log(dustData);

  return (
    <>
      <Typography variant="subtitle1" color="textSecondary">
        Seoul
      </Typography>
      <Grid container spacing={3}>
        {dustData.map((dustCard) => (
          <Grid item key={dustCard.dataTime}>
            <Card className={classes.card}>
              <CardHeader avatar="bed" title={dustCard.dataTime} />
              <CardContent>
                <Typography>22pm10</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Content;
