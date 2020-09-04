import React from 'react';
import Box from '@material-ui/core/Box';
import WebFont from 'webfontloader';
import Routes from './Routes';
import Navbar from './components/Navbar';
// import Id from './context/global-id';

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
        <React.StrictMode>
          <Box pt={5}>
            <Routes />
          </Box>
        </React.StrictMode>
      </div>
    );
  }
}
export default App;
