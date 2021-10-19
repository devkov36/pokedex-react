import * as React from 'react';
import List from '@mui/material/List';
import { ListItemButton, ListItemText } from '@mui/material';
import ListItem from './ListItem';

const menu = [
  {
    title: 'Generations',
    children: [
      '1 - Kanto',
      '2 - Johto',
      '3 - Hoenn',
      '4 - Sinnoh',
      '5 - Unova',
      '6 - Kalos',
      '7 - Alola',
      '8 - Galar',
    ],
  },
  {
    title: 'Types',
    children: [
      'Flying',
      'Steel',
      'Rock',
      'Grass',
      'Dark',
      'Ghost',
      'Water',
      'Fairy',
      'Poison',
      'Normal',
      'Fighting',
      'Ground',
      'Fire',
      'Psychic',
      'Bug',
      'Ice',
      'Electric',
      'Dragon',
    ],
  },
  {
    title: 'Classifications',
    children: [
      'Cocoon',
      'Rock Snake',
      'Parent',
      'Humanshape',
      'Fish',
      'Lizard',
      'Seed',
      'Flower',
    ],
  },
];

const style = {
  width: '100%',
  bgcolor: '#D9D9D9',
  color: 'black',
};

export default function LateralMenu() {
  return (
      <List disablePadding={true} sx={style}
        component="nav">
      <ListItemButton>
        <ListItemText primary="Home" />
      </ListItemButton>
          {menu.map((menuItem, index) => (
            <ListItem key={index} title={menuItem.title}
              submenu={menuItem.children}/>
          ))}
      </List>
  );
}