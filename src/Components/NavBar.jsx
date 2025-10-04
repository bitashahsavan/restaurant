import React, { useEffect, useState } from "react";
import "../app.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Grid,
  Grow,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import frame from "../assets/images/Frame.png";
import frameMin from "../assets/images/frameMin.png";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import text1 from "../assets/images/text1.png";
import text2 from "../assets/images/text2.png";
import text3 from "../assets/images/text3.png";
import bg from "../assets/images/bg.png";
import CloseIcon from "@mui/icons-material/Close";
import frameRes from "../assets/images/frame-res.png";

const menuItems = ["خانه", "درباره ما", "تیم ", "رزرو", "منو"];

export default function ResponsiveMenu({ display }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative"
        }}
      >
        {/* background image */}
        <Grid
          size={{ md: 12, xs: 12 }}
          sx={{ display: { xl: "none", lg: "none", md: "none", xs: "flex" }, position: "absolute" }}
        >
          <Box component="img" src={bg} alt="bg" sx={{ width: "100%" }} />
        </Grid>

        <Grid
          size={{ md: 12, xs: 12 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1000"
          }}
        >
          {/* navbar */}
          <Grid size={{ xl: 8, lg: 8, md: 8, sm: 12, xs: 12 }}>
            <Toolbar
              sx={{
                padding: " 15px",
                borderBottom: {
                  xl: "1px solid #C8BFBF",
                  lg: "1px solid #C8BFBF",
                  md: "1px solid #C8BFBF",
                  sm: "none",
                },
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* resposive menu */}
              <Grid
                size={4}
                sx={{
                  display: { sm: "flex", xs: "flex" },
                  justifyContent: { sm: "space-between", xs: "space-between" },
                  alignItems: "center",
                }}
              >
                <IconButton
                  onClick={toggleDrawer}
                  sx={{
                    display: { xl: "none", lg: "none", md: "none", sm: "flex" },
                  }}
                >
                  <MenuIcon sx={{ width: "50px", height: "45px" }} />
                </IconButton>
                <Grid
                  size={2}
                  sx={{
                    display: {
                      xl: "flex",
                      lg: "flex",
                      md: "flex",
                      sm: "flex",
                      xs: "none",
                    },
                    position: { sm: "absolute" },
                    right: { xl: "0", lg: "0", md: "0", sm: "50%" },
                  }}
                >
                  <img src={display ? frameMin : frame} />
                </Grid>
              </Grid>

              {/* menu item*/}
              <Grid
                size="auto"
                style={{ display: "flex", justifyContent: "center" }}
              >
                {!isMobile && (
                  <Box sx={{ display: "flex", gap: 2 }}>
                    {menuItems.map((item) => (
                      <Button
                        key={item}
                        color="inherit"
                        sx={{ fontSize: "1.25rem" }}
                      >
                        {item}
                      </Button>
                    ))}
                  </Box>
                )}
              </Grid>

              {/* menu button */}
              <Grid
                size={4}
                sx={{
                  display: {
                    xl: "flex",
                    lg: "flex",
                    md: "flex",
                    sm: "none",
                    xs: "none",
                  },
                  justifyContent: "left",
                }}
              >
                <Button
                  variant="outlined"
                  style={{
                    borderRadius: "20px",
                    padding: "5px 30px",
                    borderColor: "black",
                    color: "black",
                  }}
                >
                  منو
                </Button>
              </Grid>
            </Toolbar>
          </Grid>

          {/* header */}
          <Grid
            size={{ xl: 8, lg: 8, md: 8, sm: 10, xs: 11 }}
            sx={{
              height: { xl: "60vh", lg: "60vh", md: "30vh", sm: "30vh" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid
              size={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                zIndex: "1000",
              }}
            >
              <Box
                component="img"
                src={text1}
                alt="text1"
                sx={{ width: "80%" }}
              />
              <Box
                component="img"
                src={image1}
                alt="image1"
                sx={{ width: "100%", height: "55%" }}
              />
            </Grid>

            <Grid
              size={5}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={text3}
                alt="text2"
                sx={{ width: "80%" }}
              />
            </Grid>

            <Grid
              size={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Box
                component="img"
                src={image2}
                alt="لوگو"
                sx={{ width: "70%", height: "50%" }}
              />
              <Box
                component="img"
                src={text2}
                alt="لوگو"
                sx={{ width: "20%" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <List
          sx={{
            width: {sm: 309 ,xs:210},
            height: 529,
            background:
              "linear-gradient(to left bottom, #E8CDDC,#FDE1D1 , #FAFAFA)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Grid>
            <IconButton onClick={toggleDrawer}>
              <CloseIcon sx={{ width: "50px", height: "45px" }} />
            </IconButton>
            <Box
              component="img"
              src={frameRes}
              alt="frameRes"
              sx={{ position: "absolute", top: "10%", right: "35%" }}
            />
          </Grid>
          <Grid
            sx={{ textAlign: "right", margin: "35px 0", padding: "20px" }}
          >
            {menuItems.map((item) => (
              <ListItem button key={item} onClick={toggleDrawer}>
                <ListItemText primary={item} sx={{ fontWeight: "bold" }} />
              </ListItem>
            ))}
          </Grid>
        </List>
      </Drawer>
    </>
  );
}
