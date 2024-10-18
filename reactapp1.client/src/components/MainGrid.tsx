import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid  from '@mui/material/Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', { backgroundColor: '#1A2027',}),
}));


export default function MainGrid() {
    return (
            <Grid container spacing={2}sx={{ flexGrow: 1 }}>
                <Grid size={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid size={8}>
                    <Item>xs=8</Item>
                </Grid>
            </Grid>
  );
}
