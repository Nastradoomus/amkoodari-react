import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Grid,
  Container,
  Paper,
  Typography,
  Box,
  Link,
  Button,
} from '@material-ui/core';

function HeaderView() {
  const location = useLocation();
  console.log(location.pathname);
  return <span> {location.pathname}, pulled with useLocation hook</span>;
}

const Seventh = () => {
  useEffect(() => {
    console.info('✔ Seventh chapter mounted! 7️⃣');
  }, []);

  const tac = {
    textAlign: 'center',
  };
  return (
    <div className="seventh">
      <header style={tac}>
        <Typography gutterBottom variant="h2">
          React router
        </Typography>
        <Typography gutterBottom variant="h4">
          Current path:
          <HeaderView />
        </Typography>
      </header>
      <Container style={tac}>
        <Grid item xs={12}>
          <Paper>
            <Box pt={5} pb={5}>
              <Typography variant="h3">
                Navbar contains internal links.
              </Typography>
              <Typography variant="h4">
                Dashboard, Course, Programme. Coming as we head forward.
              </Typography>
            </Box>

            <Box pt={5} pb={5}>
              <Link component={RouterLink} to="/react-js">
                <Button>React JS</Button>
              </Link>
              <Link component={RouterLink} to="/redux-js">
                <Button>Redux</Button>
              </Link>
              <Link component={RouterLink} to="/react-router">
                <Button>React Router</Button>
              </Link>
            </Box>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
};
export default Seventh;
