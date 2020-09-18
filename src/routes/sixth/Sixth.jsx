import React, { useRef, useEffect } from 'react';
import {
  Grid,
  Container,
  Paper,
  Typography,
  Button,
  Box,
} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Ref from './components/Ref';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      outlined: {
        fontVariant: 'small-caps',
        fontWeight: 'bold',
        letterSpacing: '2px',
        margin: '5px',
      },
    },
  },
});

const Sixth = () => {
  const childRef = useRef();

  useEffect(() => {
    console.info('✔ Sixth chapter mounted! 6️⃣');
  }, []);

  const buttonClick = (e, type) => {
    e.preventDefault();
    childRef.current.handleClick(type);
  };

  const tac = {
    textAlign: 'center',
  };
  return (
    <div className="third">
      <ThemeProvider theme={theme}>
        <header style={tac}>
          <Typography gutterBottom variant="h2">
            Ref in a function.
          </Typography>
        </header>
        <Container style={tac}>
          <Grid item xs={12}>
            <Paper>
              <Box pt={5} pb={5}>
                <Ref ref={childRef} />
              </Box>
            </Paper>

            <Box pt={5} pb={3}>
              <Button
                color="primary"
                variant="outlined"
                onClick={(e) => buttonClick(e, 'add')}
              >
                Focus textfield
              </Button>
              <Button
                color="secondary"
                variant="outlined"
                onClick={(e) => buttonClick(e, 'remove')}
              >
                Remove Focus from textfield
              </Button>
            </Box>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
};
export default Sixth;
