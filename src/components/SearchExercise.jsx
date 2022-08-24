import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { featchData, exerciseOption } from "../utils/featchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

export default function SearchExercise({ setExercises, bodypart, setBodypart }){

    const [search, setSearch] = useState('');
    
    const [bodyparts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExerciseData = async () => {
            const bodyPartData = await featchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOption);

            setBodyParts(['all', ...bodyPartData]);
        }

        fetchExerciseData()
    }, [])


    const handleSearch = async () => {
        if(search){
            const exerciseData = await featchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOption);

            const searchedExercise = exerciseData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
            );

            setSearch('');
            setExercises(searchedExercise);
        };

        
    };

    return(
        <Stack alignItems="center" mt="37px" justifyContent="center" p="28px">
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' }, textAlign: 'center' }} mb={4}>
                Awsome Exercise You <br />
                Should Know
            </Typography>

            <Box position="relative" mb="72px">
                <TextField 
                    type="text"
                    value={search}
                    onChange={(e) => {setSearch(e.target.value.toLowerCase())}}
                    placeholder="Search Exercise"
                    sx={{
                        input: {
                            border: 'none',
                            fontWeight: '700',
                            borderRadius: '4px'
                        },
                        width: { lg: '1000px', xs: '350px' }
                    }}
                />
                <Button 
                    position="absolute" 
                    variant="conteined" 
                    sx={{ 
                            background: '#ff2625', 
                            right: '0', 
                            height: '100%', 
                            color: 'white', 
                            '&:hover': {background: '#ce1413'} 
                        }}
                    onClick={handleSearch}
                    >
                    Search
                </Button>
            </Box>

            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontalScrollBar 
                    data={bodyparts} 
                    bodypart={bodypart}
                    setBodypart={setBodypart}
                />
            </Box>

        </Stack>
    )
}