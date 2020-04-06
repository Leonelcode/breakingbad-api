import React from 'react';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
});

const seasonEpArr = []

let seasonId = null

class EpisodeIndex extends React.Component {
  state = {
    episodes: null
  }

  async componentDidMount() {
    try {
      let episodeArr = []
      const episodes = await axios.get('https://breakingbadapi.com/api/episodes')
      for (let i = 1; i < 6; i++) {
        episodeArr = episodes.data.filter(episode => episode.season === i.toString())
        seasonEpArr.push(episodeArr)
        seasonId = window.location.href.slice(-1)
      }
      this.setState({ episodes: seasonEpArr })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    if (!this.state.episodes) return null
    const {classes} = this.props
    return (
      <Container className={classes.cardGrid} maxWidth="xs">
        <Typography component="h2" variant="h5" color="primary" gutterBottom>
          Episodios
        </Typography>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          {this.state.episodes[parseInt(seasonId) - 1].map(episode => <EpisodeCard key={episode.episode_id} {...episode} />)}
        </List>
      </Container>
    )
  }
}

export default withStyles(styles)(EpisodeIndex);