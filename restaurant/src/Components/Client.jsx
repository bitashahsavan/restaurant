
import { Grid, Box, Typography, Button, TextField, CardContent, Card, Rating, useTheme, useMediaQuery, IconButton } from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { shadows } from '@mui/system';
import arrow from "../assets/images/arrow-right.png"
import image4 from "../assets/images/image4.png"
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';





function Client() {
    const theme = createTheme({ direction: 'rtl' });
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });


    return (
        <>
            <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>

                {/* section 1 */}
                <Grid size={12} sx={{
                    display: "flex", flexDirection: { xl: "row", lg: "row", md: "row", sm: "row", xs: "column-reverse" }, background: "linear-gradient(to  right, #F0D7CA,#ECE1E3 , #F9FBF2)",
                    justifyContent: "space-between", padding: "50px", width: "100%"
                }}>

                    {/* text section */}
                    <Grid size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <Grid
                            sx={(theme) => ({
                                boxShadow: 3,
                                bgcolor: '#fff',
                                p: 1,
                                m: 1,
                                borderRadius: 2,
                                textAlign: 'center',
                                fontSize: '0.875rem',
                                fontWeight: '700',
                                width: { xl: "60%", md: "80%", sm: "90%" }
                            })}>
                            <Typography variant="h3" component="h3" sx={{
                                marginTop: "25px", fontWeight: 'bold', fontSize: {
                                    lg: 45,
                                    md: 40,
                                    sm: 30,
                                    xs: 25,
                                }
                            }}>
                                رزرو کنید
                            </Typography>
                            <Typography variant="p" component="p" sx={{ marginTop: "15px", color: "#6D6C6C", fontWeight: "bold" }}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                            </Typography>
                            <CacheProvider value={cacheRtl}>
                                <ThemeProvider theme={theme}>
                                    <div dir="rtl">
                                        <Grid sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: "40px" }}>
                                            <TextField id="standard-basic" label="نام ونام خانوادگی" variant="standard" sx={{ width: "80%", marginTop: "10px" }} />
                                            <TextField id="standard-basic" label="تاریخ" variant="standard" sx={{ width: "80%", marginTop: "10px" }} />
                                            <TextField id="standard-basic" label="ایمیل" variant="standard" sx={{ width: "80%", marginTop: "10px" }} />
                                            <TextField id="standard-basic" label="تلفن" variant="standard" sx={{ width: "80%", marginTop: "10px" }} />
                                        </Grid>
                                    </div>
                                </ThemeProvider>
                            </CacheProvider>
                            <Button variant="outlined" style={{ borderRadius: "30px", margin: "auto", marginBottom: "30px", borderColor: "black", color: "black", display: "flex", justifyContent: "space-between" }}>
                                <Grid size={6} sx={{ marginLeft: "20px", fontWeight: "bold", fontSize: "1.3rem" }}>رزرو</Grid>
                                <Grid >
                                    <Box sx={{ backgroundColor: "black", borderRadius: "50%", display: "flex", width: "25px", height: "25px" }}>
                                        <Box component="img" src={arrow} alt="image1" sx={{ width: "100%" }} />
                                    </Box>
                                </Grid>

                            </Button>
                        </Grid>
                    </Grid>

                    {/* image section */}
                    <Grid size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                        <Box component="img" src={image4} alt="image1" sx={{ width: { xl: "50%", lg: "60%", md: "70%", sm: "80", xs: "100%" } }} />
                    </Grid>
                </Grid>

                
            </Grid>
        </>
    )
}
export default Client;      