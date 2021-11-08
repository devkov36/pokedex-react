import * as React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuItem from './MenuItem';
import { Link } from 'react-router-dom';
import "../../css/menu/listItem.css";

const style = {
  width: '100%',
  bgcolor: '#D9D9D9',
  color: 'black',
};


export default function ListItem({ title, submenu, route }) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText style={style} primary={title} disableTypography={true} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {submenu.map((subItem, index) => (
            <Link key={route + index}
              to={`/${route}/${route === 'type' ? subItem.toLowerCase() : subItem}`}>
              <MenuItem subTitle={subItem} />
            </Link>
          ))}
        </List>
      </Collapse>
      <Divider />
    </>
  );
}