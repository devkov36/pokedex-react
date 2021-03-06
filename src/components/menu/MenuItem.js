import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const style = {
  color: '#545454',
  fontFamily: ['Saira','sans-serif'],
};

function MenuItemElem({ subTitle }) {
  return (
    <ListItemButton sx={{ pl: 4 }}>
      <ListItemText style={ style} primary={subTitle} disableTypography={true}/>
    </ListItemButton>
  );
}

export default MenuItemElem;