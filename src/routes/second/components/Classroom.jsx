import React from 'react';
import { Typography, Paper, Grid, Container } from '@material-ui/core';
import TeacherContext from '../context/teacher-context';

class Classroom extends React.Component {
  componentDidMount() {}

  render() {
    const tac = {
      textAlign: 'center',
    };
    const { context2 } = this.context;
    return (
      <div>
        <Container>
          <Grid container spacing={3} style={tac}>
            <Grid item sm={12} md={6}>
              <Paper>
                <Typography variant="h3" gutterBottom>
                  The first one is using Consumer:
                </Typography>
                <TeacherContext.Consumer>
                  {(context) => (
                    <Typography variant="h4" gutterBottom>
                      <b>{context.context1}</b>
                    </Typography>
                  )}
                </TeacherContext.Consumer>
              </Paper>
            </Grid>
            <Grid item sm={12} md={6}>
              <Paper>
                <Typography variant="h3" gutterBottom>
                  The second one is by using this.consumer and (static)
                  contextType:
                </Typography>
                <Typography variant="h4" gutterBottom>
                  <b>{context2}</b>
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

Classroom.contextType = TeacherContext;
export default Classroom;
