import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const style = {
  color: '#545454',
};

function MenuItemElem({ subTitle }) {
  return (
    <ListItemButton sx={{ pl: 4 }}>
      <ListItemText style={style} primary={subTitle} />
    </ListItemButton>
  );
}

export default MenuItemElem;