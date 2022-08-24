import React from "react";
import { Stack } from "@mui/material";
import logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <Stack direction="row"
            justifyContent="space-around"
            sx={{ 
                    gap: {sm: '122px', xs: '40px'}, 
                    mt: { sm: '32px', xs: '20px'}, 
                    justifyContent: 'none' 
                }} 
                px="20px"
        >
            <Link to="/">
                <img src={logo} alt="logo-img" style={{ 
                        width: '48px', 
                        height: '48px', 
                        margin: '0 20px' 
                    }} />
            </Link>

            <Stack 
                direction="row"
                gap="40px"
                fontSize="24px"
                alignItems="flex-end"
            >
               <Link style={{ 
                textDecoration: "none", 
                color: "#3A1212", 
                borderBottom: "2px solid #FF2625"
                }} 
                to="/">Home</Link>
               <a style={{ textDecoration: "none", color: "#3A1212"}} href="#exerciseDetail">Exercises</a>
            </Stack>
        </Stack>
    )
}

export default Navbar;