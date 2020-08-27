import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import './deg.css';

class Deg2Rad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      degrees: props.degrees,
      rads: props.rads,
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

  handleChange = (event) => {
    const degrees = event.target.value;
    this.setState({ degrees });
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
    let rads = this.state;
    const { sync } = rads;
    const { handleUpdate } = this.props;
    const { degrees } = rads;
    rads = Math.floor(degrees * (Math.PI / 180) * 1000) / 1000;
    if (sync) {
      handleUpdate(degrees, rads, 'deg2Rad');
    }
    this.setState(() => {
      return { rads };
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
    const { degrees, rads } = this.state;
    return (
      <Paper elevation={3} style={tac}>
        <Typography gutterBottom variant="h4">
          A Component
        </Typography>
        <Typography gutterBottom>
          ...which calclulates degrees to radians
        </Typography>
        <br />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            variant="outlined"
            placeholder="Gimme degrees &deg;"
            name="degrees"
            type="text"
            onChange={this.handleChange}
            validators={['isANumber', 'required']}
            errorMessages={['Needs a number!']}
            value={degrees}
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
          {rads}{' '}
        </Typography>
      </Paper>
    );
  }
}

export default Deg2Rad;
