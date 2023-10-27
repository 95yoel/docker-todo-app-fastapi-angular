import psycopg2


def connect():
    conn = psycopg2.connect(
        #host ="localhost",
        host="db",
        database ="todo-list",
        user ="postgres",
        password="yoel"
    )
    return conn