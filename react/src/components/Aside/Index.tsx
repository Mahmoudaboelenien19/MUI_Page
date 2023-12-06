import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  AccountBox,
  Article,
  Group,
  Home,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";

const listArr = [
  {
    Icon: Home,
    text: "Homepage",
  },
  {
    Icon: Article,
    text: "Pages",
  },
  {
    Icon: Group,
    text: "Group",
  },
  {
    text: "MarketPlace",
    Icon: Storefront,
  },
  {
    Icon: Person,
    text: "Friends",
  },
  {
    Icon: Settings,
    text: "Settings",
  },
  {
    Icon: AccountBox,
    text: "Profile",
  },
];
const Aside = () => {
  return (
    <Box sx={{ display: { xs: "none", sm: "block" } }} width="250px">
      <Box position="fixed" width="250px">
        <List>
          {listArr.map(({ Icon, text }, index) => {
            return (
              <ListItem key={index}>
                <ListItemButton component="a" href="#home">
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default Aside;
