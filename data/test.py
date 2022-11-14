import mariadb
import sys
import eel
import datetime
# Connect to MariaDB Platform
try:
    conn = mariadb.connect(
        user="root",
        password="1234",
        host="localhost",
        port=3306,
        database="etis"

    )
except mariadb.Error as e:
    print(f"Error connecting to MariaDB Platform: {e}")
    sys.exit(1)

# Get Cursor
cur = conn.cursor()
def convertTime(ts):
    f = '%Y-%m-%d %H:%M:%S'
    return  ts.strftime(f)
@eel.expose
def getData():
    cur.execute("select * from tiket")
    data = cur.fetchall()
    data[0] = list(data[0])
    data[1] = list(data[1])
    data[0][1] = convertTime(data[0][1])
    data[1][1] = convertTime(data[1][1])
    return data