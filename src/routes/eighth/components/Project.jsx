import React from 'react';
import { Box, Grid } from '@material-ui/core';
import KEY from '../../../context/global-key';
import ListItems from './Listitems';

class Project extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      lorem:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries...",
      items: [{ id: 1 }, { id: 2 }, { id: 3 }],
      title: 'Item',
      keys: [],
    };
  }

  componentDidMount() {}

  callback = (items) => {
    this.setState({ items });
  };

  render() {
    const { lorem, items, title, keys } = this.state;
    let { key } = this.context;
    const { setKey } = this.context;
    for (let i = 0; i < items.length; i += 1) {
      keys[i] = key;
      key += 1;
    }
    setKey(key);
    return (
      <Box pl={3} pr={3}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <ListItems
            items={items}
            title={title}
            lorem={lorem}
            keys={keys}
            callback={this.callback}
          />
        </Grid>
      </Box>
    );
  }
}
Project.contextType = KEY;
export default Project;
