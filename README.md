# docker-todo-app-fastapi-angular

A simple to-do list application created to learn Docker. This project combines Angular for the frontend, FastAPI for the backend, and PostgreSQL for data storage.

## Requeriments 

You should have installed in your desktop this : 

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Install 

1. Clone this repository :

    ```bash
    git clone https://github.com/95yoel/docker-todo-app-fastapi-angular
    ```

2. Run the following commands :

    ```bash

    # Remove existing containers and associated volumes
    docker-compose down -v
    # Start and build the application for the first time
    docker-compose up --build
    ```

## Stop app