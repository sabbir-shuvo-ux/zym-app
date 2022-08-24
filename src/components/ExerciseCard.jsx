import React from "react";
import {Stack, Typography, Button} from "@mui/material"
import { Link } from "react-router-dom";

const ExerciseCard = ({exercise}) => {
    return(
        <Link to={`/exercise/${exercise.id}`} className="exercise-card">
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
            <Stack direction="row" justifyContent="space-around">

                <Button sx={{ ml: '21px', color: '#fff', background: '#d04e4e', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize', '&:hover': {background: '#d04e4e'} }}> {exercise.bodyPart} </Button>

                <Button sx={{ ml: '21px', color: '#fff', background: '#bf8c31', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize', '&:hover': {background: '#d04e4e'} }}> {exercise.target} </Button>
            </Stack>
            <Typography ml="21px" pb="10px" textTransform="capitalize" mt="11px" fontSize="22px" color="#000" fontWeight="bold">
                    {exercise.name}
                </Typography>
        </Link>
    )
}

export default ExerciseCard;