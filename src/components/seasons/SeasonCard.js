import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
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


class SeasonCard extends React.Component {
    render() {
      const {classes, seasonId, img, name} = this.props;
    return (
      <Grid item xs={12} md={6}>
        <CardActionArea component="a" href={`/seasons/${seasonId}`}>
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  Temporada {seasonId}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {seasonId}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  Accede a todos los episodios de la temporada
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Ver episodios...
                </Typography>
              </CardContent>
            </div>
            <Hidden xsDown>
              <CardMedia className={classes.cardMedia} image={img} title={name} />
            </Hidden>
          </Card>
        </CardActionArea>
      </Grid>
    );
  }
};

export default withStyles(styles)(SeasonCard);