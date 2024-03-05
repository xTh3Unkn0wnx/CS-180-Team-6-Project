import { useEffect, useState } from 'react';
import { Grid, Box, Button, Stack, TextField, Typography, InputAdornment } from '@mui/material';
import { FaSearch } from "react-icons/fa";

import { exerciseOptions, fetchData } from '../utils/fetchData';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(['all', ...bodyPartsData]);
        };

        fetchExercisesData();
    }, []);

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=900', exerciseOptions);

            console.log(exercisesData);

            const searchedExercises = exercisesData.filter(
                (item) => item.name.toLowerCase().includes(search)
                    || item.target.toLowerCase().includes(search)
                    || item.equipment.toLowerCase().includes(search)
                    || item.bodyPart.toLowerCase().includes(search),
            );

            window.scrollTo({ top: 580, left: 100, behavior: 'smooth' });

            setSearch('');
            setExercises(searchedExercises);
        }
    };

    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="10px">
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
                What do you want to <br /> workout today?
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    height="79px"
                    sx={{ input: { fontSize: '20px', fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '670px', xs: '130px' }, background: 'linear-gradient(35deg, #494949, #313131)', borderRadius: '10px' }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder=" Search Exercise"
                    type="text"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <FaSearch color= "#fff"/>
                            </InputAdornment>
                        ),
                        sx: {
                            borderRadius: '7px',
                            background: 'linear-gradient(35deg, #494949, #313131)',
                            color: '#fff',
                        }
                    }}
                />
                <Button className="search-btn" sx={{ bgcolor: '#fff', color: '#000', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '62px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' }, border: '1px solid #000'}} onClick={handleSearch}>
                    Search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '70%', p: '10px' }}>
                <Grid container spacing={2}>
                    {bodyParts.map((part, index) => (
                        <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                            <Button
                                onClick={() => setBodyPart(part)}
                                variant="contained"
                                sx={{
                                    textTransform: 'capitalize',
                                    width: '100%', 
                                    height: '50px', 
                                    background: bodyPart === part ? 'linear-gradient(to right, #f27121, #e94057)' : 'linear-gradient(35deg, #494949, #313131)',
                                    color: bodyPart === part ? '#fff' : '#fff',
                                    '&:hover': {
                                        background: 'linear-gradient(to right, #f27121, #e94057)',
                                        color:'#000',
                                        transform: 'scale(1.1)',
                                    },
                                }}
                            >
                                {part}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Stack>
    );
};

export default SearchExercises;