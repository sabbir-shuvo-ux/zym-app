import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png"



export default function BodyPart({ item, bodypart, setBodypart }){
    return(
        <Stack
            type="button"
            alignItems="center"
            justifyContent="cnter"
            className="bodyPart-card"
            sx={{
                borderTop: bodypart === item ? '3px solid #ff2625' : '3px solid transparent',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                cursor: 'pointer',
                paddingTop: '15px',
                gap: '10px',
            }}
            onClick={() => {
                setBodypart(item);
                window.scrollTo({ top: '1600', left: '100', behavior: 'smooth' })
            }}
            
        >
            <img style={{ width: '40px', height: '40px' }} src={Icon} alt="dumble" />
            <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>{item}</Typography>
        </Stack>
    )
}