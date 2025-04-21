import { Grid, Box, Typography, Button } from "@mui/material";
import image4 from "../assets/images/image4.png";
import vector1 from "../assets/images/vector.png";
import vector2 from "../assets/images/vector2.png";
import vector3 from "../assets/images/vector3.png";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

function AboutUs({ display }) {
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          size={{ xl: 10, lg: 10, md: 12, sm: 12, xs: 12 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mt:"10%"
          }}
        >
          {/* about us  */}
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: {
                xl: "white",
                lg: "white",
                md: "white",
                sm: "#F9FBF2",
                xs: "#F9FBF2",
              }
            }}
          >
            {/* text section */}
            <Grid
              size={6}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "right",
                flexDirection: "column",
                padding: " 5%"
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    lg: 50,
                    md: 40,
                    sm: 30,
                    xs: 20,
                  },
                }}
                component="h2"
              >
                درباره ما
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    lg: 30,
                    md: 25,
                    sm: 15,
                    xs: 10,
                  },
                  textAlign: "justify",
                  marginBottom: { xl: "50px", md: "20px", sm: "5px" },
                  fontWeight: "500",
                }}
                component="h2"
              >
                لورم ایپسوم متن ساختگی با تولید سادگی
              </Typography>

              <Typography
                variant="h6"
                component="p"
                sx={{
                  marginBottom: { xl: "30px", md: "20px", sm: "5px" },
                  textAlign: "justify",
                  fontSize: {
                    lg: 25,
                    md: 20,
                    sm: 10,
                    xs: 10,
                  },
                  width: "100%",
                }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </Typography>

              <Grid size={{xl:4 ,lg:4 ,md:6,sm:6,xs:10}}>
                <Button
                  variant="outlined"
                  style={{
                    borderRadius: "20px",
                    padding: "5px  15px",
                    borderColor: "black",
                    color: "black",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width:"100%"
                  }}
                >
                  منو غذاها
                  <ArrowCircleLeftIcon fontSize="large"></ArrowCircleLeftIcon>
                </Button>
              </Grid>
            </Grid>

            {/* image section */}
            <Grid
              size={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={image4}
                alt="image1"
                sx={{ width: { xl: "80%", sm: "70%", xs: "90%" } }}

              />
            </Grid>
          </Grid>

          {/* section2 */}
          <Grid  
            sx={{
              display: "flex",
              height: "40%",
              marginTop: "70px",
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "row",
                sm: "row",
                xs: "column",
              },
            }}
          >
            <Grid sx={{ display: "flex" }}>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "#F46F0F",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={vector1}
                    alt="image1"
                    sx={{ width: "49%", height: "49%" }}
                  />
                </Box>
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{ marginTop: "25px", fontWeight: "bold" }}
                >
                  کیفیت بالا غذا
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  sx={{
                    width: "70%",
                    marginBottom: "20px",
                    textAlign: "center",
                    padding: "30px",
                    fontSize: {
                      lg: 20,
                      md: 20,
                      sm: 16,
                      xs: 15,
                    },
                    color: "#6D6C6C",
                  }}
                >
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </Typography>
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "#9914C8",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={vector2}
                    alt="image1"
                    sx={{ width: "49%", height: "49%" }}
                  />
                </Box>
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{ marginTop: "25px", fontWeight: "bold" }}
                >
                  امکان تست غذا
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  sx={{
                    width: "70%",
                    marginBottom: "20px",
                    textAlign: "center",
                    padding: "30px",
                    fontSize: {
                      lg: 20,
                      md: 20,
                      sm: 16,
                      xs: 15,
                    },
                    color: "#6D6C6C",
                  }}
                >
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </Typography>
              </Grid>
            </Grid>

            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: "#78EA83",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={vector3}
                  alt="image1"
                  sx={{ width: "49%", height: "49%" }}
                />
              </Box>
              <Typography
                variant="h5"
                component="h5"
                sx={{ marginTop: "25px", fontWeight: "bold" }}
              >
                تحویل سریع
              </Typography>
              <Typography
                variant="h6"
                component="p"
                sx={{
                  width: {
                    xl: "70%",
                    lg: "70%",
                    md: "70%",
                    sm: "70%",
                    xs: "40%",
                  },
                  marginBottom: "20px",
                  textAlign: "center",
                  padding: "30px",
                  fontSize: {
                    lg: 20,
                    md: 20,
                    sm: 16,
                    xs: 15,
                  },
                  color: "#6D6C6C",
                }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
export default AboutUs;
