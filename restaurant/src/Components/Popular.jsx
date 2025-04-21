import { Grid, Box, Typography, Button } from "@mui/material";
import image5 from "../assets/images/image5.png"
import image6 from "../assets/images/image6.png"
import image7 from "../assets/images/image7.png"
import image8 from "../assets/images/image8.png"
import image2 from "../assets/images/image2.png"
import image1 from "../assets/images/image1.png"
import image3 from "../assets/images/image3.png"
import image9 from "../assets/images/image9.png"
import clock from "../assets/images/clock.png"
import group1 from "../assets/images/Group1.png"



function Popular() {
  return (
    <>
      <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {/* section 1 */}
        <Grid size={12} sx={{
          display: "flex", flexDirection: "column", mt: "10%"
        }}>
          {/* text section */}
          <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Typography variant="h3" component="h3" sx={{
              fontSize: {
                lg: 50,
                md: 40,
                sm: 30,
                xs: 20,
              },
            }}>
              پرطرفدارترین ها
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  lg: 20,
                  md: 20,
                  sm: 16,
                  xs: 15,
                },
                textAlign: "center",
                width: { xl: "40%", md: "40%", sm: "45%", xs: "55%" },
                fontWeight: "500",
                color: "#6D6C6C",
              }} variant="h6" component="p" >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </Typography>
          </Grid>

          {/* image gallery section */}
          <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "30px auto" }}>
            <Grid sx={{ m: "0 20px" }}>
              <Box component="img" src={image5} alt="image1" sx={{ width: "100%", height: "70%" }} />
              <Typography variant="h5" component="h5" sx={{
                marginTop: "25px", fontWeight: 'bold', fontSize: {
                  lg: 30,
                  md: 25,
                  sm: 25,
                  xs: 15,
                },
              }}>
                پاستا
              </Typography>
              <Grid sx={{
                display: "flex", fontSize: {
                  lg: 20,
                  md: 15,
                  sm: 15,
                  xs: 10,
                },
              }}>
                <Box component="img" src={clock} alt="image1" sx={{ margin: "15px 0 0 20px" }} />
                <Typography variant="p" component="p" sx={{ marginTop: "15px" }}>
                  20- 30 دقیقه
                </Typography>
              </Grid>
            </Grid>

            <Grid sx={{ m: "0 20px" }}>
              <Box component="img" src={image6} alt="image1" sx={{ width: "100%", height: "70%" }} />
              <Typography variant="h5" component="h5" sx={{
                marginTop: "25px", fontWeight: 'bold', fontSize: {
                  lg: 30,
                  md: 25,
                  sm: 25,
                  xs: 15,
                },
              }}>
                پاستا
              </Typography>
              <Grid sx={{
                display: "flex", fontSize: {
                  lg: 20,
                  md: 15,
                  sm: 15,
                  xs: 10,
                }
              }}>
                <Box component="img" src={clock} alt="image1" sx={{ margin: "15px 0 0 20px" }} />
                <Typography variant="p" component="p" sx={{ marginTop: "15px" }}>
                  20- 30 دقیقه
                </Typography>
              </Grid>
            </Grid>

            <Grid sx={{ m: "0 20px" }}>
              <Box component="img" src={image7} alt="image1" sx={{ width: "100%", height: "70%" }} />
              <Typography variant="h5" component="h5" sx={{
                marginTop: "25px", fontWeight: 'bold', fontSize: {
                  lg: 30,
                  md: 25,
                  sm: 25,
                  xs: 15,
                },
              }}>
                پاستا
              </Typography>
              <Grid sx={{
                display: "flex", fontSize: {
                  lg: 20,
                  md: 15,
                  sm: 15,
                  xs: 10,
                }
              }}>
                <Box component="img" src={clock} alt="image1" sx={{ margin: "15px 0 0 20px" }} />
                <Typography variant="p" component="p" sx={{ marginTop: "15px" }}>
                  20- 30 دقیقه
                </Typography>
              </Grid>
            </Grid>

            <Grid sx={{ display: { xl: "inline", sm: "inline", xs: "none" }, m: "0 20px" }}>
              <Box component="img" src={image8} alt="image1" sx={{ width: "100%", height: "70%" }} />
              <Typography variant="h5" component="h5" sx={{
                marginTop: "25px", fontWeight: 'bold', fontSize: {
                  lg: 30,
                  md: 25,
                  sm: 25,
                  xs: 15,
                },
              }}>
                پاستا
              </Typography>
              <Grid sx={{
                display: "flex", fontSize: {
                  lg: 20,
                  md: 15,
                  sm: 15,
                  xs: 10,
                }
              }}>
                <Box component="img" src={clock} alt="image1" sx={{ margin: "15px 0 0 20px" }} />
                <Typography variant="p" component="p" sx={{ marginTop: "15px" }}>
                  20- 30 دقیقه
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid sx={{ display: { xl: "flex", lg: "flex", md: "flex", sm: "flex", xs: "none" }, justifyContent: "center", margin: "30px auto" }}
            size={{ xl: 12, lg: 12, md: 12, sm: 11, xs: 11 }}>
            <Grid sx={{ m: "0 20px" }}>
              <Box component="img" src={image2} alt="image1" sx={{ width: "100%", height: "70%" }} />
              <Typography variant="h5" component="h5" sx={{ marginTop: "25px", fontWeight: 'bold' }}>
                پاستا
              </Typography>
              <Grid sx={{
                display: "flex", fontSize: {
                  lg: 20,
                  md: 15,
                  sm: 15,
                  xs: 10,
                }
              }}>
                <Box component="img" src={clock} alt="image1" sx={{ margin: "15px 0 0 20px" }} />
                <Typography variant="p" component="p" sx={{ marginTop: "15px" }}>
                  20- 30 دقیقه
                </Typography>
              </Grid>
            </Grid>

            <Grid sx={{ m: "0 20px" }}>
              <Box component="img" src={image1} alt="image1" sx={{ width: "100%", height: "70%" }} />
              <Typography variant="h5" component="h5" sx={{ marginTop: "25px", fontWeight: 'bold' }}>
                پاستا
              </Typography>
              <Grid sx={{
                display: "flex", fontSize: {
                  lg: 20,
                  md: 15,
                  sm: 15,
                  xs: 10,
                }
              }}>
                <Box component="img" src={clock} alt="image1" sx={{ margin: "15px 0 0 20px" }} />
                <Typography variant="p" component="p" sx={{ marginTop: "15px" }}>
                  20- 30 دقیقه
                </Typography>
              </Grid>
            </Grid>

            <Grid sx={{ m: "0 20px" }}>
              <Box component="img" src={image3} alt="image1" sx={{ width: "100%", height: "70%" }} />
              <Typography variant="h5" component="h5" sx={{ marginTop: "25px", fontWeight: 'bold' }}>
                پاستا
              </Typography>
              <Grid sx={{
                display: "flex", fontSize: {
                  lg: 20,
                  md: 15,
                  sm: 15,
                  xs: 10,
                }
              }}>
                <Box component="img" src={clock} alt="image1" sx={{ margin: "15px 0 0 20px" }} />
                <Typography variant="p" component="p" sx={{ marginTop: "15px" }}>
                  20- 30 دقیقه
                </Typography>
              </Grid>
            </Grid>

            <Grid sx={{ m: "0 20px" }}>
              <Box component="img" src={image9} alt="image1" sx={{ width: "100%", height: "70%" }} />
              <Typography variant="h5" component="h5" sx={{ marginTop: "25px", fontWeight: 'bold' }}>
                پاستا
              </Typography>
              <Grid sx={{
                display: "flex", fontSize: {
                  lg: 20,
                  md: 15,
                  sm: 15,
                  xs: 10,
                }
              }}>
                <Box component="img" src={clock} alt="image1" sx={{ margin: "15px 0 0 20px" }} />
                <Typography variant="p" component="p" sx={{ marginTop: "15px" }}>
                  20- 30 دقیقه
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* section 2 */}
        <Grid size={{ xl: 8, lg: 8, md: 10, sm: 12, xs: 12 }} sx={{
          display: "flex", height: "50vh" ,mt:"10%" ,justifyContent:"center"
        }}>
          <Grid size={3} sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "column" }}>
            <Grid>
              <Typography variant="h3" component="h2" sx={{
                textAlign: "center", fontSize: {
                  lg: 55,
                  md: 45,
                  sm: 40,
                  xs: 35,
                },
              }}>
                ۸
              </Typography>
              <Typography variant="h4" component="h2" sx={{
                fontSize: {
                  lg: 45,
                  md: 35,
                  sm: 25,
                  xs: 15,
                },
              }}>
                سال تجربه
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="h3" component="h2" sx={{
                fontSize: {
                  lg: 55,
                  md: 45,
                  sm: 40,
                  xs: 35,
                }, textAlign: "center"
              }}>
                ۵۰
              </Typography>
              <Typography variant="h4" component="h2" sx={{
                fontSize: {
                  lg: 45,
                  md: 35,
                  sm: 25,
                  xs: 15,
                }, textAlign: "center"
              }}>
                غذا
              </Typography>
            </Grid>
          </Grid>

          <Grid size={6} sx={{ position: "relative" }}>
            <Box component="img" src={group1} alt="image1" sx={{ width: "130%", height: "150%", position: "absolute", left: "0%", top: "-40%" }} />
            <Box sx={{ backgroundColor: "#B6CFB1", width: "50%", height: "85%", borderRadius: "8px", position: "absolute", left: "20%" }} />
            <Box component="img" src={image9} alt="image1" sx={{ width: "50%", height: "85%", borderRadius: "8px", position: "absolute", left: "20%", rotate: '-15deg' }} />

          </Grid>

          <Grid size={3} sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "column" }}>
            <Grid>
              <Typography variant="h3" component="h2" sx={{
                fontSize: {
                  lg: 55,
                  md: 45,
                  sm: 40,
                  xs: 35,
                }, textAlign: "center"
              }}>
                ۱۴
              </Typography>
              <Typography variant="h4" component="h2" sx={{
                fontSize: {
                  lg: 45,
                  md: 35,
                  sm: 25,
                  xs: 15,
                }
              }} >
                رستوران
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="h3" component="h2" sx={{
                fontSize: {
                  lg: 55,
                  md: 45,
                  sm: 40,
                  xs: 35,
                }, textAlign: "center"
              }}>
                ۲۰
              </Typography>
              <Typography variant="h4" component="h2" sx={{
                fontSize: {
                  lg: 45,
                  md: 35,
                  sm: 25,
                  xs: 15,
                }
              }}>
                سرآشپز
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Popular;