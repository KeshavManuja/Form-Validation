import React from 'react';
import { Typography, Paper, Grid } from '@material-ui/core';
import { useEffect } from 'react';
import axios from 'axios';

const Home = ({ user }) => {

    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5000')
    },[])
  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">User Details</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>
            <strong>Name:</strong> {user.name}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>
            <strong>Email:</strong> {user.email}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>
            <strong>Country:</strong> {user.country}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>
            <strong>State:</strong> {user.state}
          </Typography>
        </Grid>
        {/* Add more fields as needed */}
      </Grid>
    </Paper>
  );
};

export default Home;