import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const ExerciseVideos = ({ exerciseVideo, name }) => {
    console.log(exerciseVideo)

    const width = '300px';
    const resWidth = 'auto';

    return(
        <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p="20px">
            <Typography variant="h3" mb="33px">
                Watch <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
            </Typography>
            
            <Stack alignItems="center" flexWrap="wrap" sx={{
                flexDirection: { lg: 'row' },
                gap: { lg: '110px', xs: '0px' }
            }}>
                {exerciseVideo?.slice(0, 6).map((item, idx) => (
                    <a key={idx}
                        className="exercise-video"
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={item.video.thumbnails[0].url} alt={item.video.title} width={width} />
                        <Box width={width}>
                            <Typography variant="h5" style={{ 
                                    color: 'rgb(0, 0, 0)',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    width: '300px',
                                    whiteSpace: 'nowrap',
                             }}> {item.video.title} </Typography>
                            <Typography variant="h6"  style={{ color: '#000' }}> {item.video.channelName} </Typography>
                        </Box>
                    </a>
                ))}
            </Stack>
        </Box>
    )
}

export default ExerciseVideos;