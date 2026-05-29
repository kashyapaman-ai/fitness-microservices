import Grid from '@mui/material/Grid';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box
} from '@mui/material';

import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router';

import DeleteIcon from '@mui/icons-material/Delete';

import { getActivities, deleteActivity } from '../services/api';

const activityImages = {
  WALKING:
    "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1200&auto=format&fit=crop",

  RUNNING:
    "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1200&auto=format&fit=crop",

  CYCLING:
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop"
};

const ActivityList = ({ refresh }) => {

  const [activities, setActivities] = useState([]);

  const navigate = useNavigate();

  const fetchActivities = async () => {

    try {

      const response = await getActivities();

      setActivities(response.data);

    } catch (error) {

      console.error(error);

    }
  };

  const handleDelete = async (id) => {

    try {

      await deleteActivity(id);

      fetchActivities();

    } catch (error) {

      console.error(error);

    }
  };

  useEffect(() => {

    fetchActivities();

  }, [refresh]);

  return (

    <Grid container spacing={3}>

      {activities.map((activity) => (

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={activity.id}
        >

          <Card
            sx={{
              borderRadius: "25px",
              overflow: "hidden",
              background: "#111827",
              color: "white",
              boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
              transition: "0.3s",
              '&:hover': {
                transform: "translateY(-8px)"
              }
            }}
          >

            <Box
              onClick={() => navigate(`/activities/${activity.id}`)}
              sx={{ cursor: "pointer" }}
            >

              <img
                src={
                  activityImages[activity.type] ||
                  activityImages.WALKING
                }
                alt={activity.type}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover"
                }}
              />

              <CardContent>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    mb: 1
                  }}
                >
                  {activity.type}
                </Typography>

                <Typography sx={{ opacity: 0.8 }}>
                  ⏱ {activity.duration} mins
                </Typography>

                <Typography sx={{ opacity: 0.8 }}>
                  🔥 {activity.caloriesBurned} calories
                </Typography>

              </CardContent>

            </Box>

            <Box
              sx={{
                p: 2,
                pt: 0
              }}
            >

              <Button
                fullWidth
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => handleDelete(activity.id)}
                sx={{
                  borderRadius: "12px",
                  fontWeight: "bold"
                }}
              >
                Delete
              </Button>

            </Box>

          </Card>

        </Grid>
      ))}

    </Grid>
  );
};

export default ActivityList;