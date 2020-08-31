import React from 'react';
import WebFont from 'webfontloader';
import Routes from './Routes';
import Navbar from './components/Navbar';

WebFont.load({
  google: {
    families: ['Roboto:300,400,700', 'sans-serif'],
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.info('✔ APP MOUNTED! 🍀');
  }

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    );
  }
}
export default App;
