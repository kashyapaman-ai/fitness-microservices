import {
  Box,
  Button,
  Typography,
  Paper
} from "@mui/material";

import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

import { useContext, useEffect, useState } from "react";

import { AuthContext } from "react-oauth2-code-pkce";

import { useDispatch } from "react-redux";

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from "react-router";

import { setCredentials } from "./store/authSlice";

import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";
import ActivityDetail from "./components/ActivityDetail";

const ActivitiesPage = () => {

  const [refresh, setRefresh] = useState(false);

  const { logOut } = useContext(AuthContext);

  const handleActivityAdded = () => {
    setRefresh(!refresh);
  };

  return (

    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, #141e30, #243b55)",
        p: 3
      }}
    >

      <Paper
        elevation={6}
        sx={{
          p: 3,
          borderRadius: 4,
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
          color: "white",
          mb: 3
        }}
      >

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2
          }}
        >

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1
            }}
          >

            <FitnessCenterIcon
              sx={{
                fontSize: 35
              }}
            />

            <Typography
              variant="h4"
              fontWeight="bold"
            >
              Fitness Tracker
            </Typography>

          </Box>

          <Button
            variant="contained"
            color="error"
            onClick={() => logOut()}
            sx={{
              borderRadius: 3,
              px: 3,
              py: 1,
              fontWeight: "bold"
            }}
          >
            LOGOUT
          </Button>

        </Box>

        <Typography
          variant="body1"
          sx={{
            opacity: 0.8
          }}
        >
          Track your workouts and get AI-powered
          fitness recommendations instantly 🚀
        </Typography>

      </Paper>

      <Paper
        elevation={5}
        sx={{
          p: 3,
          borderRadius: 4,
          mb: 3
        }}
      >

        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ mb: 2 }}
        >
          Add New Activity
        </Typography>

        <ActivityForm
          onActivityAdded={handleActivityAdded}
        />

      </Paper>

      <Paper
        elevation={5}
        sx={{
          p: 3,
          borderRadius: 4
        }}
      >

        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ mb: 2 }}
        >
          Your Activities
        </Typography>

        <ActivityList refresh={refresh} />

      </Paper>

    </Box>
  );
};

function App() {

  const {
    token,
    tokenData,
    logIn
  } = useContext(AuthContext);

  const dispatch = useDispatch();

  useEffect(() => {

    if (token) {

      dispatch(
        setCredentials({
          token,
          user: tokenData
        })
      );
    }

  }, [token, tokenData, dispatch]);

  return (

    <Router>

      {!token ? (

        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
              "linear-gradient(to right, #141e30, #243b55)"
          }}
        >

          <Paper
            elevation={8}
            sx={{
              p: 5,
              borderRadius: 5,
              textAlign: "center",
              width: 400
            }}
          >

            <FitnessCenterIcon
              sx={{
                fontSize: 70,
                color: "#1976d2",
                mb: 2
              }}
            />

            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ mb: 2 }}
            >
              Fitness Tracker
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: "gray"
              }}
            >
              AI Powered Workout Analysis &
              Recommendations
            </Typography>

            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={() => logIn()}
              sx={{
                py: 1.5,
                borderRadius: 3,
                fontWeight: "bold"
              }}
            >
              LOGIN WITH KEYCLOAK
            </Button>

          </Paper>

        </Box>

      ) : (

        <Routes>

          <Route
            path="/activities"
            element={<ActivitiesPage />}
          />

          <Route
            path="/activities/:id"
            element={<ActivityDetail />}
          />

          <Route
            path="/"
            element={
              <Navigate
                to="/activities"
                replace
              />
            }
          />

        </Routes>
      )}

    </Router>
  );
}

export default App;