from fastapi import APIRouter
from models.task import Task
from db.db_connection import connect
from datetime import datetime

import json

router = APIRouter()

@router.get("/")
async def root():
    return {"status":"working"}


conn = connect()

@router.post("/create")
async def add_task(task:Task):
    try:
        cursor = conn.cursor()
        current_date = datetime.now().isoformat()
        query = """
        INSERT INTO task (description,date,status) VALUES(%s,%s,%s)
        """
        cursor.execute(query,(task.desc,current_date,task.status))

        conn.commit()

        cursor.close()


        return {
            "task":f"{task.desc}",
            "status":f"{task.status}",
            "status" :"added"
        }
    except Exception as e:
        return {"error":str(e)}

@router.post("/update/{task_id}")
async def update_task(task_id: int):
    try:
        cursor = conn.cursor()
        current_date = datetime.now().isoformat()
        query = """
        UPDATE task
        SET date = %s, status = true
        WHERE id = %s
        """
        cursor.execute(query, (current_date, task_id))
        conn.commit()
        cursor.close()

        return {
            "status": "updated"
        }
    except Exception as e:
        return {"error": str(e)}

@router.delete("/delete/{task_id}")
async def delete_task(task_id: int):
    try:
        cursor = conn.cursor()
        query = """
        DELETE FROM task
        WHERE id = %s
        """
        cursor.execute(query, (task_id,))
        conn.commit()
        cursor.close()

        return {
            "status": "deleted"
        }
    except Exception as e:
        return {"error": str(e)}


@router.get("/tasks")
async def get_tasks():
    cursor = conn.cursor()

    query = """
    SELECT * from task
    """
    cursor.execute(query)

    results = cursor.fetchall()

    cursor.close()
    
    #format the result as a array of jsons

    tasks = []
    for row in results:
        task = {
            "id": row[0],
            "description": row[1],
            "date": row[2],
            "status": row[3]
        }
        tasks.append(task)


    return tasks