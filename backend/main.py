from fastapi import FastAPI
from db.cors_config import add_cors_middleware
from routes.routes import router

app = FastAPI()

add_cors_middleware(app)

app.include_router(router)




if __name__ == "__main__":
    import uvicorn 
    uvicorn.run(app,host="0.0.0.0",port=8000)
    