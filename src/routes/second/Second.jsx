import React from 'react';
import Typography from '@material-ui/core/Typography';
import Classroom from './components/Classroom';
import TeacherContext from './context/teacher-context';

class Second extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      context: {
        context1: "I'm sick 🤒, Please go home",
        context2: "I'm feeling better 😁. Come Back!",
      },
    };
  }

  componentDidMount() {
    console.info('✔ Second chapter mounted! 🐱‍💻🐱‍');
  }

  componentWillUnmount() {}

  render() {
    const tac = {
      textAlign: 'center',
    };
    const { context } = this.state;
    const { context1, context2 } = context;
    return (
      <div className="Second">
        <header style={tac}>
          <Typography variant="h1" gutterBottom>
            Hello I&apos;m the Classroom component.
          </Typography>
          <Typography variant="h4" gutterBottom>
            My parent component (the teacher -component) delivers two context
            messages using a state object.
          </Typography>
        </header>
        <TeacherContext.Provider
          value={{
            context1,
            context2,
          }}
        >
          .
          <Classroom />
        </TeacherContext.Provider>
      </div>
    );
  }
}
export default Second;
