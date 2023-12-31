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
3. See the app working :

    To access the application user interface , open your web browser and navigate to :
    ```bash
    http://localhost:4200
    ```
    This will take you to the frontend of the app , where you can add , delete and update tasks status.

    To access the backend , navigate to :
    ```bash
    http://localhost:8000
    
    ```
    This takes you to the FastApi APi , in this casi , you will only see a simple message indicating api status.

## Stop app

1. To stop the add you can run this command : 

    ```bash
    # This command stops Docker
    docker-compose down

    ```