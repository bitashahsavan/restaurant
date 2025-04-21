import person from "../assets/images/Ellipse 9.png";
import { useState, useEffect } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Grid, Box, Typography, CardContent, Card, Rating, useTheme, useMediaQuery, IconButton } from "@mui/material";
const items = [
    {
        id: 1,
    },
    {
        id: 2,
    }
];
const Carousel = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const theme2 = useTheme();
    const isMobile = useMediaQuery(theme2.breakpoints.down('sm'));

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <Grid>
                {/* text section */}
                <Grid size={12} sx={{ mt: "8%" }}>
                    <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginBottom: "50px" }}>
                        <Typography variant="h3" component="h3" sx={{
                            fontSize: {
                                lg: 50,
                                md: 40,
                                sm: 30,
                                xs: 20,
                            }
                        }}>
                            نظرات مشتریان
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
                            width: { xl: "70%", md: "60%", sm: "60%", xs: "60%" },
                            fontWeight: "500",
                            color: "#6D6C6C",
                        }}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        </Typography>
                    </Grid>
                </Grid>
                {/* carousel section */}
                <Grid sx={{ overflow: "hidden", height: "40vh" }}>
                    <Box sx={{ margin: '0 auto', padding: isMobile ? '1rem 0' : '2rem 0' }}>
                        {/* کارت‌های کاروسل */}
                        <Box sx={{ display: 'flex'}}>
                            {items.map((item, index) => (
                                <Box
                                    key={item.id}
                                    sx={{
                                        padding: isMobile ? '0.5rem' : '1rem',
                                        boxSizing: 'border-box',
                                        transition: 'transform 0.5s ease',
                                        transform: `translateX(-${activeIndex * 100}%)`,
                                        width: { xl: "30%", sm: "80%", xs: "100%" },
                                       

                                    }}
                                >
                                    <Card sx={{
                                        position: "relative",
                                        overflow: "visible",
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        borderRadius: '12px',
                                        boxShadow: 3,
                                        height:"auto",
                                        padding:"15px"

                                    }}>
                                        <CardContent>
                                            <Box component="img" src={person} alt="person" sx={{ width: "20%", height: "35%", position: "absolute", top: { xl: "-30px", sm: "-30px", xs: "-20px" }, right: "5%", zIndex: "1000" }} />
                                            <Typography variant="p" component="" sx={{
                                                margin: "30px 0", textAlign: "center", color: "#363535",
                                                fontSize: {
                                                    xl: 18,
                                                    lg: 18,
                                                    md: 18,
                                                    sm: 15,
                                                    xs: 10,
                                                }
                                            }}>
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                            </Typography>
                                            <Typography sx={{ borderBottom: "1px solid #B6B6B6" }} />
                                            <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
                                                <Typography variant="h6" sx={{
                                                    fontSize: {
                                                        lg: 20,
                                                        md: 20,
                                                        sm: 20,
                                                        xs: 10,
                                                    }
                                                }} >
                                                    رضا اصلی
                                                </Typography>
                                                <Rating
                                                    name="simple-controlled"
                                                    defaultValue={3}
                                                    sx={{ scale:{xl:1 ,lg:1 ,md:1 ,sm:0.85 ,xs:0.75 }}}
                                                    readonly
                                                />
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Box>
                            ))}
                        </Box>

                        {/* دکمه‌های کنترل */}
                        <Box
                            sx={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                zIndex: 2,
                                padding: '0 1rem',
                                mt:"3%"

                            }}
                        >
                            <IconButton
                                onClick={handlePrev}
                                sx={{
                                    backgroundColor: 'rgb(255, 255, 255)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.9)'
                                    }, boxShadow: 3, margin: "10px"
                                }}
                            >
                                <KeyboardArrowRight fontSize={isMobile ? 'medium' : 'large'} />
                            </IconButton>

                            <IconButton
                                onClick={handleNext}
                                sx={{
                                    backgroundColor: 'rgb(255, 255, 255)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.9)'
                                    }, boxShadow: 3, margin: "10px"
                                }}
                            >
                                <KeyboardArrowLeft fontSize={isMobile ? 'medium' : 'large'} />
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Carousel