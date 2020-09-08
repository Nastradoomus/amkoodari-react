import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

class Home extends React.Component {
  componentDidMount() {
    console.info('✔ Home MOUNTED! 👽');
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <Typography gutterBottom align="center" variant="h1">
            School app.
          </Typography>
        </header>
        <main>
          <Container>
            <Grid container spacing={3} />
          </Container>
        </main>
      </div>
    );
  }
}
export default Home;
