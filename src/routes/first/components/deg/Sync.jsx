import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';

class Sync extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: props.sync };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  handleChange = () => {
    let { checked } = this.state;
    checked = !checked;
    this.setState(() => {
      return { checked };
    });
  };

  render() {
    const tac = {
      textAlign: 'center',
    };
    const { checked } = this.state;
    const { props } = this;
    return (
      <Paper elevation={3} style={tac}>
        <Typography gutterBottom variant="h4">
          A Component
        </Typography>
        <Typography gutterBottom>...which Syncs these.</Typography>
        <Switch
          checked={checked}
          color="primary"
          onChange={props.handleSyncChange}
          name="checked"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      </Paper>
    );
  }
}

Sync.propTypes = {
  sync: PropTypes.bool.isRequired,
};

export default Sync;
