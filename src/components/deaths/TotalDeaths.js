import React from 'react';
import Typography from '@material-ui/core/Typography';

class TotalDeaths extends React.Component {
    render() {
      const { deathCount } = this.props;
    return (
      <Typography component="h2" variant="h5" color="primary" gutterBottom>
        Deaths | {deathCount.deathCount} deaths
      </Typography>
    );
  }
};

export default TotalDeaths