import { TextField, Button, Typography } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Picture from './uplouding';

const steps = ['The first step', 'The second step- load img'];

export default function Signup() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [id, setId] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [buildingNumber, setBuildingNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [cellNumber, setCellNumber] = useState('');

    const [err, setErr] = useState(null);
    const [picture, setPicture] = useState('');


    const registToApi = async (e) => {
        try {
            await axios.post("http://localhost:3600/api/member/", { memberId: id, name: firstName + lastName, city: city, street: street, buildingNumber: buildingNumber, phoneNumber: phoneNumber, cellNumber: cellNumber, DateOfBirth: dob, imgPath: picture })
            setErr("created");
        } catch (err) {
            setErr(err.response.data?.message);
        }
    }

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep === steps.length - 1) {
            registToApi()
        }
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ width: '100%', backgroundColor: 'white', color: 'red', marginTop: '7%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1, color: 'red' }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, color: 'red' }}>
                        <Box sx={{ flex: '1 1 auto', color: 'red' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {activeStep === 0 &&
                        <>
                            <br />
                            <TextField
                                label="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                variant="outlined"
                                fullWidth
                                required
                            /><br /><br />
                            <TextField style={{ color: 'red' }}
                                label="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                variant="outlined"
                                fullWidth
                                required
                            /><br /><br />
                            <TextField style={{ color: 'red' }}
                                label="Id"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                variant="outlined"
                                fullWidth
                                required
                            /><br /><br />
                            <TextField style={{ color: 'red' }}
                                label="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                variant="outlined"
                                fullWidth
                                required
                            /><br /><br />
                            <TextField style={{ color: 'red' }}
                                label="street"
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                                variant="outlined"
                                fullWidth
                                required
                            /><br /><br />
                            <TextField style={{ color: 'red' }}
                                label="building"
                                type='number'
                                value={buildingNumber}
                                onChange={(e) => setBuildingNumber(e.target.value)}
                                variant="outlined"
                                fullWidth
                                required
                            /><br /><br />
                            <TextField
                                label="Date of Birth"
                                type="date"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                variant="outlined"
                                fullWidth
                                required
                            /><br /><br />

                            <TextField
                                label="Phone Number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                variant="outlined"
                                fullWidth
                            /><br /><br />
                            <TextField
                                label="cell Number"
                                value={cellNumber}
                                onChange={(e) => setCellNumber(e.target.value)}
                                variant="outlined"
                                fullWidth
                            /><br /><br />
                        </>}
                    {activeStep === 1 && <>
                        <br />
                        <Picture picture={picture} setPicture={setPicture} />
                    </>}
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, color: 'red' }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto', color: 'red' }} />
                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
            {err && err}
        </Box>
    );
}
