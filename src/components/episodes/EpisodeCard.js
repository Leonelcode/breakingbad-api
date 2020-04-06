import React from 'react';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class EpisodeCard extends React.Component {

  render() {
    console.log(this.props.season)
    return (
      <React.Fragment>
        <ListItem button>
          <ListItemText primary={this.props.title} />
        </ListItem>
        <Divider />
      </React.Fragment>
    )
  }
}

export default EpisodeCard