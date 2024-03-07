import { Link } from 'react-router-dom';
import { Grid, Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
    <Link className="exercise-card" to={`/search-exercise/exercise/${exercise.id}`} >
        <Grid container spacing={2}>
        {/*<img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />*/}
        <Grid item xs={7.5}>
        <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize" >
            {exercise.name}
        </Typography>
        </Grid>
        <Grid item xs={4.5}>
        <Stack direction="column" sx={{ marginLeft: 'auto' }}>
            <Button sx={{ ml: '21px',mt:'25px', width: '100px',color: '#fff', background: '#f27121', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{ ml: '21px', mt:'10px',width: '100px',color: '#fff', background: '#e94057', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                {exercise.target}
            </Button>
        </Stack>
        </Grid>
        </Grid>
    </Link>
);

export default ExerciseCard;