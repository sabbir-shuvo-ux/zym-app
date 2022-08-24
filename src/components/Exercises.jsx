import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Typography, Stack } from "@mui/material";

import {featchData, exerciseOption} from "../utils/featchData"
import ExerciseCard from "./ExerciseCard";

export default function Exercises({setExercises, bodypart, exercises}){

    const [currentPage, setCurrentPage] = useState(1);
    const exercisePerPage = 9;

    const lastIndexOfExercise = exercisePerPage * currentPage;
    const firstIndexOFExercise = lastIndexOfExercise - exercisePerPage;
    const showExercises = exercises.slice(firstIndexOFExercise, lastIndexOfExercise);
    
    const paginate = (e, value) => {
        setCurrentPage(value);

        window.scrollTo({top: 1600, behavior: 'smooth'})
    };

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];

            if(bodypart === 'all'){
                exercisesData = await featchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOption);
            }else{
                exercisesData = await featchData(`https://exercisedb.p.rapidapi.com/exercises/bodypart/${bodypart}`, exerciseOption);
            }

            setExercises(exercisesData)
        }

        fetchExercisesData()
    },[bodypart])

    return(
        <Box 
            id="exercise"
            mt="50px"
            p="20px"
            sx={{
                mt: {lg: '110px'}
            }}
        >
            <Typography variant="h3" mb="46px">
                Showing Results
            </Typography>

            <Stack 
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
                sx={{
                    gap: {lg: '110px', xs: '50px'}
                }}
            >
               {showExercises.map((exercise, index) => (
                <ExerciseCard key={index} exercise={exercise} />
               ))}
            </Stack>

            <Stack mt="100px" alignItems="center">
                {exercises.length > 9 && (
                   <Pagination 
                        count={Math.ceil(exercises.length / exercisePerPage)} 
                        variant="outlined" 
                        shape="rounded" 
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                        defaultPage={1}
                    />
                )}
            </Stack>
        </Box>
    )
}