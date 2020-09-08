import React from 'react';
import ColoredLog from '../helpers/console';

const KEY = React.createContext({
  key: 0,
  setKey: (value) => {
    KEY.key = value;
    if (KEY.key !== 0) {
      ColoredLog('🎈 KEY is global through context.', 'purple');
    }
  },
});

export default KEY;
