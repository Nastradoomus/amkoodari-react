import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TeacherContext from '../context/teacher-context';

class Classroom extends React.Component {
  componentDidMount() {}

  render() {
    const { context2 } = this.context;
    return (
      <div>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper>
                <Typography variant="h3" gutterBottom>
                  The first one is using Consumer:
                </Typography>
                <TeacherContext.Consumer>
                  {(context) => (
                    <Typography variant="h2" gutterBottom>
                      {context.context1}
                    </Typography>
                  )}
                </TeacherContext.Consumer>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper>
                <Typography variant="h3" gutterBottom>
                  The second one is by using this.consumer and (static)
                  contextType:
                </Typography>
                <Typography variant="h2" gutterBottom>
                  {context2}
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
