import { Grid, Box, Typography } from "@mui/material";
import person1 from "../assets/images/Ellipse 7.png"
import person2 from "../assets/images/Ellipse 8.png"
import person3 from "../assets/images/Ellipse 10.png"
import person4 from "../assets/images/Ellipse 9.png"

function OurTeam() {
    return (
        <>
            <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid size={{ xl: 8, lg: 8, md: 11, sm: 12, xs: 12 }} sx={{
                    display: "flex", flexDirection: "column", mt: "10%"
                }}>
                    <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginBottom: "50px" }}>
                        <Typography variant="h3" component="h3" sx={{
                            fontSize: {
                                lg: 50,
                                md: 40,
                                sm: 30,
                                xs: 20,
                            }
                        }}>
                            تیم ما
                        </Typography>
                        <Typography variant="h6" component="p" sx={{
                            fontSize: {
                                lg: 20,
                                md: 20,
                                sm: 16,
                                xs: 15,
                            },
                            textAlign: "center",
                            marginTop: "2%",
                            marginBottom: { xl: "50px", md: "20px", sm: "5px" },
                            width: { xl: "40%", md: "40%", sm: "45%", xs: "60%" },
                            fontWeight: "500",
                            color: "#6D6C6C",
                        }}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        </Typography>
                    </Grid>

                    <Grid sx={{ display: "flex", margin: "30px 0" }}>
                        <Grid size={{ xl: 3, lg: 3, md: 3, sm: 3, xs: 6 }} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                            <Box component="img" src={person1} alt="image1" sx={{ width: "60%", height: "60%" }} />
                            <Typography variant="h5" component="h5" sx={{
                                marginTop: "25px", fontWeight: 'bold', fontSize: {
                                    lg: 25,
                                    md: 25,
                                    sm: 25,
                                    xs: 15,
                                }
                            }}>
                                رضا اصلی
                            </Typography>
                            <Grid sx={{ display: "flex" }}>
                                <Typography variant="p" component="p" sx={{
                                    marginTop: "15px", color: "#6D6C6C", fontWeight: "bold", fontSize: {
                                        lg: 18,
                                        md: 15,
                                        sm: 15,
                                        xs: 10,
                                    }
                                }}>
                                    سرآشپز
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid size={{ xl: 3, lg: 3, md: 3, sm: 3, xs: 6 }} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                            <Box component="img" src={person2} alt="image1" sx={{ width: "60%", height: "60%" }} />
                            <Typography variant="h5" component="h5" sx={{
                                marginTop: "25px", fontWeight: 'bold', fontSize: {
                                    lg: 25,
                                    md: 25,
                                    sm: 25,
                                    xs: 15,
                                }
                            }}>
                                رضا اصلی
                            </Typography>
                            <Grid sx={{ display: "flex" }}>
                                <Typography variant="p" component="p" sx={{
                                    marginTop: "15px", color: "#6D6C6C", fontWeight: "bold", fontSize: {
                                        lg: 18,
                                        md: 15,
                                        sm: 15,
                                        xs: 10,
                                    }
                                }}>
                                    سرآشپز
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid size={{ xl: 3, lg: 3, md: 3, sm: 3, xs: 6 }} sx={{ display: { xl: "flex", lg: "flex", md: "flex", sm: "flex", xs: "none" }, justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                            <Box component="img" src={person3} alt="image1" sx={{ width: "60%", height: "60%" }} />
                            <Typography variant="h5" component="h5" sx={{
                                marginTop: "25px", fontWeight: 'bold', fontSize: {
                                    lg: 25,
                                    md: 25,
                                    sm: 25,
                                    xs: 15,
                                }
                            }}>
                                رضا اصلی
                            </Typography>
                            <Grid sx={{ display: "flex" }}>
                                <Typography variant="p" component="p" sx={{
                                    marginTop: "15px", color: "#6D6C6C", fontWeight: "bold", fontSize: {
                                        lg: 18,
                                        md: 15,
                                        sm: 15,
                                        xs: 10,
                                    }
                                }}>
                                    سرآشپز
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid size={{ xl: 3, lg: 3, md: 3, sm: 3, xs: 6 }} sx={{ display: { xl: "flex", lg: "flex", md: "flex", sm: "flex", xs: "none" }, justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                            <Box component="img" src={person4} alt="image1" sx={{ width: "60%", height: "60%" }} />
                            <Typography variant="h5" component="h5" sx={{
                                marginTop: "25px", fontWeight: 'bold', fontSize: {
                                    lg: 25,
                                    md: 25,
                                    sm: 25,
                                    xs: 15,
                                }
                            }}>
                                رضا اصلی
                            </Typography>
                            <Grid sx={{ display: "flex" }}>
                                <Typography variant="p" component="p" sx={{
                                    marginTop: "15px", color: "#6D6C6C", fontWeight: "bold", fontSize: {
                                        lg: 18,
                                        md: 15,
                                        sm: 15,
                                        xs: 10,
                                    }
                                }}>
                                    سرآشپز
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
export default OurTeam;
