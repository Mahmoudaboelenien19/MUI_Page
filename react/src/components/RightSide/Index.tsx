import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
];

const chats = [
  {
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    alt: "Remy Sharp",
    primary: "Brunch this weekend?",
    secondary: "Ali Connors — I'll be in your neighborhood doing errands this…",
  },
  {
    avatar: "https://material-ui.com/static/images/avatar/2.jpg",
    alt: "Travis Howard",
    primary: "Summer BBQ",
    secondary:
      "to Scott, Alex, Jennifer — Wish I could come, but I'm out of town this…",
  },
  {
    avatar: "https://material-ui.com/static/images/avatar/3.jpg",
    alt: "Cindy Baker",
    primary: "Oui Oui",
    secondary:
      "Sandra Adams — Do you have Paris recommendations? Have you ever…",
  },
];
const RightSide = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "block" },
        p: 2,
      }}
      width="300px"
    >
      <Box position="fixed" px={2}>
        <Stack spacing={2}>
          <Typography variant="h6" color="text.secondary">
            online friends
          </Typography>
          <AvatarGroup max={7}>
            {[...Array(20)].map((_, i) => (
              <Avatar
                key={i}
                alt=""
                src={`https://material-ui.com/static/images/avatar/${
                  i + 1
                }.jpg`}
              />
            ))}
          </AvatarGroup>
        </Stack>
        <ImageList
          sx={{ width: "100%", mt: 2, mb: 2 }}
          cols={3}
          rowHeight={100}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {chats.map(({ avatar, alt, primary, secondary }, i) => (
            <Fragment key={i}>
              <ListItem alignItems="flex-start" key={i}>
                <ListItemAvatar>
                  <Avatar alt={alt} src={avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={primary}
                  secondary={
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      "{secondary}"
                    </Typography>
                  }
                />
              </ListItem>
              {i < chats.length - 1 && (
                <Divider variant="inset" component="li" />
              )}
            </Fragment>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default RightSide;
