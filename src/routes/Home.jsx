import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Roboto:300,400,700', 'sans-serif'],
  },
});

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
