import { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises.tsx';
import SearchExercises from '../components/SearchExercises.tsx';

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');

    return (
        <Box>
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
        </Box>
    );
};

export default Home;