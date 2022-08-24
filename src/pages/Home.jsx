import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import SearchExercise from "../components/SearchExercise";
import Exercises from "../components/Exercises";
import { Box } from "@mui/material";


export default function Home(){

    const [bodypart, setBodypart] = useState('all')
    const [exercises, setExercises] = useState([]);

    return(
        <Box>
            <HeroBanner />
            <SearchExercise 
                setExercises={setExercises} 
                bodypart={bodypart}
                setBodypart={setBodypart}
            />
            <Exercises 
                setExercises={setExercises} 
                bodypart={bodypart}
                exercises={exercises}
            />
        </Box>
    )
}