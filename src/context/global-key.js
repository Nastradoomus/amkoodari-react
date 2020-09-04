import React from 'react';
import ColoredLog from '../helpers/console';

const KEY = React.createContext({
  key: 0,
  setKey: (value) => {
    KEY.key = value;
    if (KEY.key === 1) {
      ColoredLog('🎈 KEY is global through context.', 'purple');
      ColoredLog('🎈 Use function setKey(value)', 'forestgreen');
    }
  },
});

export default KEY;
