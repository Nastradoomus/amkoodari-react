import React from 'react';
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
    const { context } = this.state;
    const { context1, context2 } = context;
    return (
      <div className="Second">
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
