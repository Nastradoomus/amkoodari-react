import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import Deg2Rad from './components/deg/Deg2Rad';
import Rad2Deg from './components/deg/Rad2Deg';
import Sync from './components/deg/Sync';

class First extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sync: false,
      degrees: '',
      rads: '',
    };
    this.syncEl = React.createRef();
    this.rad2DegEl = React.createRef();
    this.deg2RadEl = React.createRef();
  }

  componentDidMount() {
    console.info('✔ First chapter mounted! 1️⃣');
  }

  componentWillUnmount() {}

  handleSyncChange = () => {
    let { sync } = this.state;
    sync = !sync;
    this.setState(() => {
      return { sync };
    });
    this.syncEl.current.handleChange(sync);
    this.rad2DegEl.current.handleSyncChange();
    this.deg2RadEl.current.handleSyncChange();
  };

  handleUpdate = (degrees, rads, sender) => {
    const { state } = this;
    state.degrees = degrees;
    state.rads = rads;
    if (sender === 'rad2Deg') {
      this.deg2RadEl.current.handleUpdate(rads, degrees);
    } else {
      this.rad2DegEl.current.handleUpdate(rads, degrees);
    }
  };

  render() {
    const { sync, degrees, rads } = this.state;
    return (
      <div className="First">
        <header className="First-header">
          <Typography gutterBottom align="center" variant="h3">
            Radians to degrees, degrees to radians and a sync.
          </Typography>
        </header>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Deg2Rad
                degrees={degrees}
                rads={rads}
                sync={sync}
                ref={this.deg2RadEl}
                handleUpdate={this.handleUpdate}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Rad2Deg
                degrees={degrees}
                rads={rads}
                sync={sync}
                ref={this.rad2DegEl}
                handleUpdate={this.handleUpdate}
              />
            </Grid>
            <Grid item xs={12}>
              <Sync
                sync={sync}
                handleSyncChange={this.handleSyncChange}
                ref={this.syncEl}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
export default First;
