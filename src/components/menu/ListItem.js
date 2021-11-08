import * as React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuItem from './MenuItem';
import { getAllClassifications } from '../../services/getPokemonInfo';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ListItem({ title, submenu }) {
  const [open, setOpen] = React.useState(false);
  const [classifications, setclassifications] = React.useState([]);

  const handleClick = () => {
    setOpen(!open);
  };

  // Get classifications
  useEffect(() => {
    getAllClassifications().then((classData) => {
      setclassifications(classData);
    });
  }, []);

  console.log(classifications);

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {submenu.map((subItem, index) => (
            <Link to={`/class/${subItem}`}>
                <MenuItem key={index} subTitle={subItem} />
            </Link>
          ))}
        </List>
      </Collapse>
      <Divider />
    </>
  );
}