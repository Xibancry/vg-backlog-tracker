# Video Game Checkpoint Tracker

VGCT is a simple *work in progress* videogame backlog and collection tracker. Allowing users to manually keep track of things like: copies owned, playtime, achievement progress and ratings.

This app acts as a personal learning project on web development.

## Building for Linux
VGCT runs on Docker containers set up using docker-compose. Make sure to have [Docker engine](https://docs.docker.com/engine/install/) installed. Then, enter the folder the project is hosted in and run the following:
1. `docker compose up --build`

The project should be running on [your localhost](http://localhost/).

If you are using WSL, make sure you have your distro listed on Window's hosts file or use a browser from the WSL itself to access the page.