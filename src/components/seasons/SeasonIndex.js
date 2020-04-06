import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SeasonCard from './SeasonCard';

const styles = theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
});

class SeasonIndex extends React.Component {

  state = {
    seasons: [
      {
        seasonId: '1',
        img: 'https://images.amcnetworks.com/blogs.amctv.com/wp-content/uploads/2013/12/bb-s1-poster.jpg'
      },
      {
        seasonId: '2',
        img: 'https://images.amcnetworks.com/blogs.amctv.com/wp-content/uploads/2013/12/bb-s2-poster.jpg'
      },
      {
        seasonId: '3',
        img: 'https://images.amcnetworks.com/blogs.amctv.com/wp-content/uploads/2013/12/BB-s3-poster.jpg'
      },
      {
        seasonId: '4',
        img: 'https://images.amcnetworks.com/blogs.amctv.com/wp-content/uploads/2013/12/bb-s4-poster.jpg'
      },
      {
        seasonId: '5',
        img: 'https://images.amcnetworks.com/blogs.amctv.com/wp-content/uploads/2013/12/bb-s5-poster.jpg'
      }
    ]
  }

  render() {
    const {classes} = this.props;
    return (
      <Container className={classes.cardGrid} maxWidth="md">
        <Typography component="h2" variant="h5" color="primary" gutterBottom>
          Temporadas
        </Typography>
        <Grid container spacing={4}>
          {this.state.seasons.map(season => <SeasonCard key={season.seasonId} {...season} />)}
        </Grid>
      </Container>
    )
  }
}

export default withStyles(styles)(SeasonIndex);