import React from 'react';
import { Box, Grid, Typography, Paper, Button } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      contained: {
        fontVariant: 'small-caps',
        fontWeight: 'bold',
        letterSpacing: '4px',
        width: '100%',
      },
    },
  },
});

const handleClick = (e, i, props) => {
  e.preventDefault();
  props.items.splice(i, 1);
  props.callback(props.items);
};

const ListItems = (props) => {
  const tac = {
    textAlign: 'center',
  };
  const { items, title, lorem, keys } = props;
  let key = '';
  return items.map((item, i) => {
    key = keys[i];
    return (
      <ThemeProvider key={key} theme={theme}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={2}>
            <Box p={3}>
              <Typography
                style={tac}
                gutterBottom
                variant="h3"
              >{`${title} ${item.id}`}</Typography>
              <hr />
              <Typography gutterBottom variant="h5">
                {lorem}
              </Typography>
              <Box style={tac} p={3}>
                <Button
                  color="secondary"
                  variant="contained"
                  size="large"
                  onClick={(e) => handleClick(e, i, props)}
                >
                  Delete
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </ThemeProvider>
    );
  });
};
export default ListItems;
