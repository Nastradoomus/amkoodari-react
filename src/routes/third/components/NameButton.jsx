import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const NameButton = (props) => {
  useEffect(() => {
    console.info('✔ Button mounted. 👌🤷‍♂️😒');
  }, []);

  const { name } = props;
  const [state, setName] = useState(name);
  const [nameSubmitted, setNameSubmitted] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('👉 Submit!');
    setNameSubmitted(state);
    props.parentCallback(state);
  };

  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <Box pb={2}>
        <TextField
          type="text"
          variant="outlined"
          onChange={handleNameInput}
          value={state}
          label="Your name"
        />
      </Box>
      <Box pb={3}>
        <Button
          type="submit"
          onClick={handleSubmit}
          color="primary"
          variant="contained"
          size="large"
        >
          Submit
        </Button>
      </Box>
      <Box pb={3}>
        <Typography variant="h4">
          {' '}
          This is from Button component as state: <b>{nameSubmitted}</b>
        </Typography>
      </Box>
    </div>
  );
};

export default NameButton;
