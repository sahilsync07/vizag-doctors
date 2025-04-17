#!/bin/bash

# Start frontend
(cd frontend && npm run dev) &

# Start backend
(cd backend && npm run dev) &

# Wait for both to exit (optional)
wait

# End of script

# This script starts both the frontend and backend servers in development mode.
# The frontend is started using npm in the frontend directory,
# and the backend is started using npm in the backend directory.
# The `&` at the end of each command runs them in the background,
# allowing both servers to run simultaneously.
# The `wait` command at the end is optional and will wait for both processes to finish.
# Make sure to give execute permission to this script before running it:
# chmod +x dev.sh
# You can run the script using:
# ./dev.sh
# Note: Ensure that you have the necessary dependencies installed for both frontend and backend.
# You can install them by running:
# cd frontend && npm install
# cd backend && npm install
