import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import NameButton from './components/NameButton';

export default class Third extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  componentDidMount() {
    console.info('✔ Third chapter mounted! 🐢');
  }

  callback = (data) => {
    this.setState({ name: data });
  };
  /*
   useEffect(() => {
     console.info('✔ Third chapter mounted! 🐢');
   }, []);
*/

  render() {
    const tac = {
      textAlign: 'center',
    };
    const { name } = this.state;
    return (
      <div className="third">
        <header style={tac}>
          <Typography variant="h1" gutterBottom>
            Event & Button example.
          </Typography>
        </header>
        <Container style={tac}>
          <Grid item xs={12}>
            <Paper>
              <React.StrictMode>
                <NameButton name={name} parentCallback={this.callback} />
              </React.StrictMode>
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
