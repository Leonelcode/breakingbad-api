import React from 'react'
import axios from 'axios'
import CharacterCard from './CharacterCard'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
});

class CharacterIndex extends React.Component {
  state = {
    characters: [],
  }

  async componentDidMount() {
    try {
      const characters = await axios.get('https://breakingbadapi.com/api/characters')
      this.setState({ characters: characters.data })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const charArr = this.state.characters;
    const {classes} = this.props;

    return (
      <React.Fragment>
        <Container className={classes.cardGrid} maxWidth="md">
          <Typography component="h2" variant="h5" color="primary" gutterBottom>
            Characters
          </Typography>
          <Grid container spacing={4}>
            {charArr.map(character => <CharacterCard key={character.char_id} {...character} />)}
          </Grid>
        </Container>
      </React.Fragment>
    )
  }

}

export default withStyles(styles)(CharacterIndex)