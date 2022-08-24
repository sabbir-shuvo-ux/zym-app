import React, {useEffect, useState} from "react";
import ExerciseVideos from "../components/ExerciseVideos";
import Detail from "../components/Detail";
import SimilarExercise from "../components/SimilarExercise";

import { featchData, exerciseOption, youtubeVideoOption } from "../utils/featchData";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

export default function ExerciseDetail(){

    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideo, setExerciseVideo] = useState([]);
    

    const {id} = useParams();

    useEffect(() => {
        const fetchExerciseData = async () => {
            const exerciseDUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearch = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await featchData(`${exerciseDUrl}/exercises/exercise/${id}`, exerciseOption);
            setExerciseDetail(exerciseDetailData);

            const youtubeVideoData = await featchData(`${youtubeSearch}/search?query=${exerciseDetailData.name}`, youtubeVideoOption);

            setExerciseVideo(youtubeVideoData.contents);
        }

        fetchExerciseData()

    }, [id])

    return(
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos name={exerciseDetail.name} exerciseVideo={exerciseVideo} />
            <SimilarExercise />
        </Box>
    )
}