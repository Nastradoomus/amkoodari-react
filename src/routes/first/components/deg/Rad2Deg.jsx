import React from 'react';
import { Typography, Button, Paper } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import './deg.css';

class Rad2Deg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rads: props.rads,
      degrees: props.degrees,
      sync: props.sync,
    };
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isANumber', (value) => {
      if (/^\d+(\.\d+)?$/.test(value)) {
        return true;
      }
      return false;
    });
  }

  componentWillUnmount() {
    ValidatorForm.removeValidationRule('isANumber');
  }

  handleChange = (e) => {
    const rads = e.target.value;
    this.setState({ rads });
  };

  handleSyncChange = () => {
    let { sync } = this.state;
    sync = !sync;
    this.setState(() => {
      return { sync };
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let degrees = this.state;
    const { sync } = degrees;
    const { handleUpdate } = this.props;
    const { rads } = degrees;
    degrees = Math.floor(degrees.rads * (180 / Math.PI) * 1000) / 1000;
    if (sync) {
      handleUpdate(degrees, rads, 'rad2Deg');
    }
    this.setState(() => {
      return { degrees };
    });
  };

  handleUpdate = (rads, degrees) => {
    this.setState(() => {
      return { rads, degrees };
    });
  };

  render() {
    const tac = {
      textAlign: 'center',
    };
    const { rads, degrees } = this.state;
    return (
      <Paper elevation={3} style={tac}>
        <Typography gutterBottom variant="h4">
          A Component
        </Typography>
        <Typography gutterBottom>
          ...which calclulates radians to degrees
        </Typography>
        <br />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            variant="outlined"
            placeholder="Gimme rads"
            name="rads"
            type="text"
            onChange={this.handleChange}
            validators={['isANumber', 'required']}
            errorMessages={['Needs a number!']}
            value={rads}
            inputProps={{
              style: { textAlign: 'center' },
            }}
          />
          <br />
          <br />
          <Button type="submit" color="primary" variant="outlined">
            Calculate
          </Button>
        </ValidatorForm>
        <br />
        <Typography gutterBottom variant="h4">
          {' '}
          {degrees}{' '}
        </Typography>
      </Paper>
    );
  }
}

export default Rad2Deg;
