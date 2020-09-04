import React from 'react';
import { Grid, Container, Paper, Typography, Box } from '@material-ui/core';
import NameButton from './components/NameButton';

export default class Third extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  componentDidMount() {
    console.info('✔ Third chapter mounted! 3️⃣');
  }

  callback = (data) => {
    this.setState({ name: data });
  };

  render() {
    console.log(
      '👬 In React.strictmode render (& constructor) fires twice! ✌',
    );
    const tac = {
      textAlign: 'center',
    };
    const { name } = this.state;
    return (
      <div className="third">
        <header style={tac}>
          <Typography variant="h2" gutterBottom>
            Event & Button example.
          </Typography>
        </header>
        <Container style={tac}>
          <Grid item xs={12}>
            <Paper>
              <NameButton name={name} parentCallback={this.callback} />
              <Box pb={3}>
                <Typography variant="h4">
                  This is from the parent component as a returned callback:{' '}
                  {name}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Container>
      </div>
    );
  }
}
