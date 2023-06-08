import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import axios from 'axios';
// import dotnev from 'dotenv';
// dotnev.config()
const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: 500,
    height: 500,
    margin: '0 auto',
    // alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  selectInput: {
    minWidth: 200, 
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const countries = ['USA', 'Canada', 'UK', 'Australia', 'India', 'Thailand'];
const states = ['California', 'Ontario', 'London', 'Sydney'];
const genders = ['Male', 'Female', 'Other'];

export const FormPage = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    const payload = {
      firstName ,
      lastName,
      email,
      country,
      state,
      city,
      gender,
      dob,
      age
    }
    console.log(payload);
    axios.post(`http://localhost:5000/submit`, payload)
    .then((res) => {
    }).catch((err) => {
    });

    // console.log('Form submitted!');
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        variant="outlined"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <TextField
        label="Last Name"
        variant="outlined"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <FormControl variant="outlined" required>
        <InputLabel>Country</InputLabel>
        <Select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          label="Country"
        >
          {countries.map((country) => (
            <MenuItem key={country} value={country}>
              {country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined" required>
        <InputLabel>State</InputLabel>
        <Select
          value={state}
          onChange={(e) => setState(e.target.value)}
          label="State"
        >
          {states.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="City"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <FormControl variant="outlined" required>
        <InputLabel>Gender</InputLabel>
        <Select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          label="Gender"
        >
          {genders.map((gender) => (
            <MenuItem key={gender} value={gender}>
              {gender}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Date of Birth"
        variant="outlined"
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        required
      />
      <TextField
        label="Age"
        variant="outlined"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

