import { useState } from 'react';
import { Box } from '@mui/material';

import "../components/exerciseDetail.css"
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';

const ExerciseSearch = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');

    return (
        <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto" className="exerciseSearch">
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
        </Box>
    );
};

export default ExerciseSearch;