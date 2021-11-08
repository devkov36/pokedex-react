import * as React from 'react';
import List from '@mui/material/List';
import { ListItemButton, ListItemText, Divider } from '@mui/material';
import ListItem from './ListItem';
import { Link } from 'react-router-dom';
import "../../css/menu/lateralMenu.css";

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
      'Fearrow',
      'Mushroom',
      'Scracht Cat',
      'Coconut',
      'Punching',
      'Evolution',
      'Electric',
      'Sleeping',
      'Rock',
      'Gas',
      'Hairy',
      'Legendary',
      'Jellyfish',
      'Twin Bird',
      'Fossil',
      'Bone Keeper',
      'Poison Bee',
      'Fox',
      'Fire Horse',
      'Snake',
      'Psi',
      'Magnet',
      'River Crab',
      'Vine',
      'Spiral',
      'Flycatcher',
      'Ball',
      'Poison Gas',
      'Bubble Jet',
      'Virtual',
      'Sludge',
      'Pincer',
      'Spikes',
      'Transform',
      'Tiny bird',
      'Drill',
      'Mouse',
      'Cobra',
      'Hermit Crab',
      'Dragon',
      'Stagbeetle',
      'Freeze',
      'Tadpole',
      'Superpower',
      'Dopey',
      'Bivalve',
      'New Species',
      'Bat',
      'Duck',
      'Megaton',
      'Goldfish',
      'Mysterious',
      'Atrocious',
      'Shellfish',
      'Mole ',
      'Classy Cat',
      'Shadow',
      'Egg',
      'Venusaur',
      'Tiny Turtle',
      'Worm',
      'Turtle',
      'Butterfly',
      'Fairy',
      'Poison Moth',
      'Puppy',
      'Transport',
      'Genetic',
      'Bird',
      'Triple Bird',
      'Sea Lion',
      'Wild Duck',
      'Kicking',
      'Licking',
      'Starshape',
      'Wild Bull',
      'Lightning',
      'Balloon',
      'Pig Monkey',
      'Lonely',
      'Barrier',
      'Spitfire',
      'Flame',
      'Poison Pin',
      'Weed',
      'Insect',
      'Hypnosis',
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
      <Link to="/" style={{ textDecoration: 'none' }}>
        <ListItemButton>
          <ListItemText primary="Home" disableTypography={true} />
        </ListItemButton>
        <Divider />
      </Link>
      <ListItem key="0" title={menu[0].title}
        submenu={menu[0].children} route="gen" />
      <ListItem key="1" title={menu[1].title}
        submenu={menu[1].children} route="type" />
      <ListItem key="2" title={menu[2].title}
        submenu={menu[2].children} route="class" />
    </List>
  );
}