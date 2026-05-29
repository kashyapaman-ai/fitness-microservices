import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider
} from '@mui/material';

import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';

import { getActivityDetail } from '../services/api';

const ActivityDetail = () => {

  const { id } = useParams();

  const [activity, setActivity] = useState(null);

  const [recommendation, setRecommendation] = useState(null);

  useEffect(() => {

    const fetchActivityDetail = async () => {

      try {

        const response = await getActivityDetail(id);

        console.log(response.data);

        setActivity(response.data);

        setRecommendation(response.data);

      } catch (error) {

        console.error(error);

      }
    };

    fetchActivityDetail();

  }, [id]);

  if (!activity) {

    return (
      <Typography>
        Loading...
      </Typography>
    );
  }

  return (

    <Box
      sx={{
        maxWidth: 800,
        mx: 'auto',
        p: 2
      }}
    >

      <Card sx={{ mb: 2 }}>

        <CardContent>

          <Typography
            variant="h5"
            gutterBottom
          >
            Activity Details
          </Typography>

          <Typography>
            Type: {activity.type}
          </Typography>

          <Typography>
            Duration: {activity.duration} minutes
          </Typography>

          <Typography>
            Calories Burned: {activity.caloriesBurned}
          </Typography>

          <Typography>
            Date: {new Date(activity.createdAt).toLocaleString()}
          </Typography>

        </CardContent>

      </Card>

      {recommendation && (

        <Card>

          <CardContent>

            <Typography
              variant="h5"
              gutterBottom
            >
              AI Recommendation
            </Typography>

            <Typography
              variant="h6"
              sx={{ mb: 1 }}
            >
              Analysis
            </Typography>

            <Typography sx={{ mb: 2 }}>
              {recommendation.recommendation}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography
              variant="h6"
              sx={{ mb: 1 }}
            >
              Improvements
            </Typography>

            {recommendation.improvements?.map((improvement, index) => (

              <Typography
                key={index}
                sx={{ mb: 1 }}
              >
                • {improvement}
              </Typography>

            ))}

            <Divider sx={{ my: 2 }} />

            <Typography
              variant="h6"
              sx={{ mb: 1 }}
            >
              Suggestions
            </Typography>

            {recommendation.suggestions?.map((suggestion, index) => (

              <Typography
                key={index}
                sx={{ mb: 1 }}
              >
                • {suggestion}
              </Typography>

            ))}

            <Divider sx={{ my: 2 }} />

            <Typography
              variant="h6"
              sx={{ mb: 1 }}
            >
              Safety Tips
            </Typography>

            {recommendation.safety?.map((tip, index) => (

              <Typography
                key={index}
                sx={{ mb: 1 }}
              >
                • {tip}
              </Typography>

            ))}

          </CardContent>

        </Card>

      )}

    </Box>
  );
};

export default ActivityDetail;