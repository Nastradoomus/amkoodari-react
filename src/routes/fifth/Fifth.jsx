import React, { useEffect, useState, useContext } from 'react';
import {
  Grid,
  Container,
  Paper,
  Typography,
  FormGroup,
  TextField,
  Button,
  Box,
} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import KEY from '../../context/global-key';
import ColoredLog from '../../helpers/console';

const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      root: {
        fontVariant: 'small-caps',
        fontWeight: 'bold',
        letterSpacing: '4px',
        '&::before': {
          borderBottom: '0px !important',
        },
      },
    },
    MuiFormControl: {
      root: {
        width: '100%',
      },
    },
    MuiTypography: {
      root: {
        paddingTop: '4px',
        paddingBottom: '7px',
        paddingLeft: '3px',
        fontWeight: 'bold',
        minWidth: '30px !important',
      },
    },
  },
});

const Fifth = () => {
  let { key } = useContext(KEY);
  const { setKey } = useContext(KEY);

  useEffect(() => {
    console.info('✔ Fifth mounted. 5️⃣');
  }, []);

  const init = [
    { icon: '🍟', title: 'Fries', price: 2 },
    { icon: '🍧', title: 'Ice cream', price: 1 },
    { icon: '🍔', title: 'Hamburger', price: 3 },
    { icon: '🍰', title: 'Cake', price: 2 },
  ];
  const [foods, setFoods] = useState(init);
  const getKey = () => {
    const value = key;
    key += 1;
    setKey(key);
    return value;
  };
  function handleChange(value, i, t) {
    setTimeout(() => {
      foods[i][t] = value;
    }, 30);
  }
  function buttonClick(e) {
    e.preventDefault();
    setFoods(foods);
    ColoredLog(JSON.stringify(foods), 'teal');
  }
  const listFoods = foods.map((food, index) => (
    <ThemeProvider key={getKey()} theme={theme}>
      <FormGroup>
        <Container>
          <Grid container spacing={0}>
            <Grid item xs={1}>
              <Typography id={food.icon}>{food.icon}</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id={food.title}
                defaultValue={food.title}
                onChange={(e) =>
                  handleChange(parseInt(e.target.value, 10), index, 'title')
                }
                inputProps={{
                  style: {
                    width: '100%',
                    textAlign: 'center',
                  },
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id={toString(food.price)}
                defaultValue={food.price}
                onChange={(e) => handleChange(e.target.value, index, 'price')}
                inputProps={{
                  style: {
                    fontWeight: 'bold',
                    width: '100%',
                    textAlign: 'right',
                  },
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <Typography align="left">EUR</Typography>
            </Grid>
          </Grid>
        </Container>
      </FormGroup>
    </ThemeProvider>
  ));

  const tac = {
    textAlign: 'center',
  };

  return (
    <div className="fifth">
      <header style={tac}>
        <Typography gutterBottom variant="h2">
          Modifying arrays.
        </Typography>
      </header>
      <Container style={tac}>
        <Grid item xs={12}>
          <Paper>
            <form noValidate autoComplete="off">
              <div>{listFoods}</div>
            </form>
          </Paper>
          <Box pt={5} pb={3}>
            <Button
              color="primary"
              variant="contained"
              onClick={(e) => buttonClick(e)}
            >
              Console Log Food array
            </Button>
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default Fifth;
