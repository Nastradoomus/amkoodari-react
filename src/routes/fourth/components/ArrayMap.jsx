import React, { useEffect } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import ColoredLog from '../../../helpers/console';

const ArrayMap = () => {
  useEffect(() => {
    console.info('✔ Array mounted. ');
  }, []);

  const names = [
    { id: 0, firstName: 'Austin', lastName: 'Powers' },
    { id: 1, firstName: 'John', lastName: 'Wick' },
    { id: 2, firstName: 'Butrt', lastName: 'Reynolds' },
    { id: 3, firstName: 'Vanilla', lastName: 'Ice' },
  ];
  ColoredLog(JSON.stringify(names), 'green');
  const listNames = names.map((name) => (
    <ListItem button key={name.id}>
      <ListItemText primary={name.lastName} secondary={name.firstName} />
    </ListItem>
  ));
  return <List>{listNames}</List>;
};

export default ArrayMap;
