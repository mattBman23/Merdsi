import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@material-ui/core';
import { FaceOutlined } from '@material-ui/icons';
import React from 'react';

export const CartItems = () => {
  return (
    <>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <FaceOutlined /> : <FaceOutlined />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <FaceOutlined /> : <FaceOutlined />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
