import { Grid, Box, Typography } from "@mui/material";
import frame from "../assets/images/Frame.png"
import group1 from "../assets/images/Group.png"
import group2 from "../assets/images/Group2.png"
import group3 from "../assets/images/Group3.png"
import one from "../assets/images/1.png"
import two from "../assets/images/4.png"
import three from "../assets/images/3.png"
import four from "../assets/images/2.png"

function Footer() {
    return (
        <>
            <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center",mt:"5%"}}>
                <Grid size={12} sx={{
                    display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#F9FBF2"
                }}>
                    <Grid size={{ xl: 8, lg: 8, md: 12, sm: 12, xs: 12 }} sx={{ display: "flex", flexDirection: "column", padding: "25px" }}>
                        <Grid size={12} sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", borderBottom: "1px solid #C8BFBF", paddingBottom: "25px" }}>
                            <Grid size={8} sx={{ display: "flex", justifyContent: "space-around" }}>
                                <Grid sx={{ display: "flex", flexDirection: "column" }}>
                                <Grid sx={{ display: { xl: "none", lg: "none", md: "none", sm: "none" ,xs:"flex"}, alignItems: "center", justifyContent: "space-between", marginTop: "23px", width: "70%" ,margin:"auto"}}>
                                    <Grid><Box component="img" src={one} alt="image1" /></Grid>
                                    <Grid><Box component="img" src={two} alt="image1" /></Grid>
                                    <Grid><Box component="img" src={three} alt="image1" /></Grid>
                                    <Grid><Box component="img" src={four} alt="image1" /></Grid>
                                </Grid>
                                    <Box component="img" src={group1} alt="image1" />
                                    <Box component="img" src={group3} alt="image1" sx={{ display: { xl: "none", lg: "none", md: "none", sm: "inline" ,xs:"inline" }, marginTop: "20px" }} />
                                    <Box component="img" src={group2} alt="image1" sx={{ width: "70%", marginTop: "20px" }} />

                                </Grid>

                                <Grid sx={{ display: { xl: "inline", lg: "inline", md: "inline", sm: "none" ,xs:"none"} }}>
                                    <Box component="img" src={group3} alt="image1" />
                                    <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", marginTop: "23px" }}>
                                        <Box component="img" src={one} alt="image1" />
                                        <Box component="img" src={two} alt="image1" />
                                        <Box component="img" src={three} alt="image1" />
                                        <Box component="img" src={four} alt="image1" />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid size={{ xl: 4, lg: 4, md: 4, sm: 8 }} sx={{  display: { xl: "flex", lg: "flex", md: "flex", sm: "flex" ,xs:"none" }, justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                <Box component="img" src={frame} alt="image1" sx={{ width: "35%" }} />
                                <Grid sx={{ display: { xl: "none", lg: "none", md: "none", sm: "flex" }, alignItems: "center", justifyContent: "space-between", marginTop: "23px", width: "70%" }}>
                                    <Grid><Box component="img" src={one} alt="image1"  /></Grid>
                                    <Grid><Box component="img" src={two} alt="image1"  /></Grid>
                                    <Grid><Box component="img" src={three} alt="image1"/></Grid>
                                    <Grid><Box component="img" src={four} alt="image1"  /></Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid size={12} sx={{ textAlign: "center", paddingTop: "50px", fontWeight: "bold", color: "#757575" }}>
                            <Typography variant="p" component="p">
                                کلیه حقوق این وب سایت متعلق به شرکت وب گستران سورین می باشد.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;