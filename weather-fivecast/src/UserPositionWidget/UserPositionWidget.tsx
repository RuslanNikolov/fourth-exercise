import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import './UserPositionWidget.scss';

interface IPositionState {
    latitude: number;
    longtitude: number;
}

const UserPositionWidget = () => {
    const [position, setPosition] = useState<IPositionState>({
        latitude: 0,
        longtitude: 0
    });

    // fetch the posiiton once
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
            setPosition({
                latitude: position.coords.latitude,
                longtitude: position.coords.longitude
            })
        })
    }, []) 

    return (
        <Box className="position-box">
            <Box className="positon-detail-column">
                <Typography>Your Latitude:</Typography>
                <Typography>{position.latitude}</Typography>
            </Box>

            <Box className="positon-detail-column">
                <Typography>Your Longtitude:</Typography>
                <Typography>{position.longtitude}</Typography>
            </Box>

            <Box className="positon-detail-column">
                <Typography>Your Attitude:</Typography>
                <Typography>&#10003;</Typography>
            </Box>
        </Box>
    )
}

export default UserPositionWidget;