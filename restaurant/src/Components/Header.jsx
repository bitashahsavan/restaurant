import {Grid ,Box} from "@mui/material";
import image1 from "../assets/images/image1.png"
import image2 from "../assets/images/image2.png"
import text1 from "../assets/images/text1.png"
import text2 from "../assets/images/text2.png"
import text3 from "../assets/images/text3.png"
import bg from "../assets/images/bg.png"

function Header() {
  
  return (
    <>
        <Grid container sx={{display:"flex" , justifyContent:"center",alignItems:"center" ,position:"relative"}}>
            <Grid size={12}>
              <Box  component="img" src={bg} alt="bg" sx={{ }} />
            </Grid>
            <Grid size={8} sx={{height:"60vh",display:"flex" , marginBottom:"50px" }}>
                
                <Grid size={3} sx={{display:"flex" , flexDirection:"column" , alignItems:"center" , justifyContent:"space-around" ,zIndex:"1000",position:"absolate",right:"0"}}>
                  <Box component="img" src={text1} alt="text1" sx={{ width:"80%"}} />
                  <Box component="img" src={image1} alt="image1" sx={{ width:"100%", height:"55%"}} />
                </Grid>
                <Grid size={5} sx={{display:"flex", alignItems:"center" ,justifyContent:"center"}}>
                  <Box component="img" src={text3} alt="text2" sx={{width:"80%"}} />
                </Grid>
                <Grid size={6} sx={{display:"flex" , flexDirection:"column" , alignItems:"center" , justifyContent:"space-around"}}>
                  <Box component="img" src={image2} alt="لوگو" sx={{width:"80%" , height:"60%"}} />
                  <Box component="img" src={text2} alt="لوگو" sx={{width:"20%" }} />
                </Grid>
            </Grid>
        </Grid>
    </>
  )
}

export default Header