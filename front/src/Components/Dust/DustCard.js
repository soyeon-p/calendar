import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../Styles/styles';

const DustCard = ({ dustData }) => {
  const {dust, dataTime, state} = dustData
  const classes = useStyles(dustData);

  return (
    <>
      <Grid item>
        <Card className={classes.card}>
          <CardHeader
            avatar={state}
            title={dataTime}
          />
          <CardContent>
            <Typography>{dust}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default DustCard;
