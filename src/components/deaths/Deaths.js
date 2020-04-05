import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import DeathCard from './DeathCard';
import TotalDeaths from './TotalDeaths';

const styles = theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
});

class Deaths extends React.Component {
  state = {
    deaths: [],
    deathCount: []
  }

  async componentDidMount() {
    try {
      const deaths = await axios.get('https://breakingbadapi.com/api/deaths')
      const deathCount = await axios.get('https://breakingbadapi.com/api/death-count')
      this.setState({ deaths: deaths.data, deathCount: deathCount.data })
    } catch (error) {
      console.log(error)
    }
  }

  render() {

    let charDeathArr = this.state.deaths
    charDeathArr = charDeathArr.filter((death,idx) => idx < 5)
    const deathArr = this.state.deathCount;
    const {classes} = this.props;

    return (
      <Container className={classes.cardGrid} maxWidth="md">
        {deathArr.map( deathCount => (
            <TotalDeaths key={deathCount} deathCount={deathCount} />
        ))}
        <Grid container spacing={4}>
          {charDeathArr.map(death => <DeathCard key={death.death_id} {...death} />)}
        </Grid>
      </Container>
    )
  }
}

export default withStyles(styles)(Deaths)