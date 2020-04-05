import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

class DeathCard extends React.Component {
  render() {
    const {classes, death, cause, responsible, last_words} = this.props;
  return (
    <Grid item xs={12} sm={6}>
      <CardActionArea component="a">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {death}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {cause}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                <strong>Responsable</strong> {responsible}
                <br></br>
                <strong>Últimas palabras</strong> {last_words}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
};

export default withStyles(styles)(DeathCard);