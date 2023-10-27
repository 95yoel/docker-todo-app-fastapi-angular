from pydantic import BaseModel


class Task(BaseModel):
    desc : str
    status:bool