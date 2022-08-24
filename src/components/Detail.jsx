import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import BodypartImg from "../assets/icons/body-part.png";
import EquipmentImg from "../assets/icons/equipment.png";
import TargetImg from "../assets/icons/target.png";

const Detail = ({exerciseDetail}) => {

    const {bodyPart, equipment, gifUrl, name, target} = exerciseDetail;

    const extraDetail = [
            {
                icon: BodypartImg,
                name: bodyPart,
            },
            {
                icon: EquipmentImg,
                name: equipment,
            },
            {
                icon: TargetImg,
                name: target,
            },
        ]

    return(
        <Stack gap="60px" sx={{
            flexDirection: {lg: 'row'},
            p: '20px',
            alignItems: 'center',
        }}>
            <img 
                src={gifUrl} 
                alt={name} 
                loading="lazy" 
                className="detail-image" 
            />

            <Stack sx={{
                gap: {lg: '35px', xs: '20px'}
            }}>
                <Typography variant="h3" textTransform="capitalize">
                    {name} 
                </Typography>
                <Typography variant="h6">
                    Exercises keep you strong. <strong>{name}</strong> is one of the best Exercises to terget your <strong>{target}</strong>. It will help you improve your mood and energy.
                </Typography>
                {extraDetail.map((item, idx) => (
                    <Stack key={idx} direction="row" alignItems="center" gap="24px">
                        <Button sx={{ borderRadius: '50%', height: '100px', width: '100px', background: '#fff2db' }}>
                            <img src={item.icon} alt={name} />
                        </Button>
                        <Typography variant="h5" textTransform="capitalize">
                                {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}

export default Detail;