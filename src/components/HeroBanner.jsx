import { Box, Button, Typography } from "@mui/material";
import React from "react";

import bannerImg from "../assets/images/banner.png"

export default function HeroBanner(){
    return(
        <Box sx={{
            mt: { lg: '212px', xs: '70px' },
            ml: { sm: '50px' }
        }} position="relative" p="20px">
            <Typography color="#FF2625" fontSize="26px" mb={2}>
                Fitness Club
            </Typography>

            <Typography fontWeight={700} 
            sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb={3}>
                Sweat, Smile, <br /> and Repeat
            </Typography>

            <Typography fontSize="22px" mb={3} lineHeight="35px">
                Cehck out the most effective exercises
            </Typography>

            <Button variant="contained" style={{ background: '#ff2625' }} href="#exercise">Explore Exercise</Button>

            <Typography fontWeight={600} sx={{ 
                opacity: '0.1', 
                display: { lg:'block', sm: 'block', xs: 'none' }
            }}
            fontSize="200px"
            color="#ff2625"
            >
                Exercise
            </Typography>

            <img src={bannerImg} className="hero-banner-img" alt="banner-img" />
        </Box>
    )
}