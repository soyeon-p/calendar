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
  const { dust, dataTime, avatar } = dustData;
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.card}>
        <CardHeader avatar={avatar} title={dataTime} />
        <CardContent>
          <Typography>{dust}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default DustCard;
