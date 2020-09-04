import React from 'react';
import { Grid, Container, Paper, Typography } from '@material-ui/core';
import ArrayMap from './components/ArrayMap';

export default class Fourth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.info('✔ Fourth chapter mounted! 4️⃣');
  }

  render() {
    const tac = {
      textAlign: 'center',
    };

    return (
      <div className="fourth">
        <header style={tac}>
          <Typography variant="h2">Array Map and list.</Typography>
          <Typography variant="h3" gutterBottom>
            Check console.
          </Typography>
        </header>
        <Container style={tac}>
          <Grid item xs={12}>
            <Paper>
              <ArrayMap />
            </Paper>
          </Grid>
        </Container>
      </div>
    );
  }
}
