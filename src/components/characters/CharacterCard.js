import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '115.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
});

class CharacterCard extends React.Component {
    render() {
      const {classes, char_id, name, img, nickname, occupation, status, birthday, portrayed} = this.props;
    return (
      <Grid item key={char_id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={img}
          title={name}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography>
            <strong>Aka</strong> {nickname}
            <br></br>
            <strong>Ocupación</strong> {occupation[0]}
            <br></br>
            <strong>Status</strong> {status} 
            <br></br>
            <strong>Cumpleaños</strong> {birthday}
            <br></br>
            <strong>Protagonista</strong> {portrayed}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    );
  }
};

export default withStyles(styles)(CharacterCard);