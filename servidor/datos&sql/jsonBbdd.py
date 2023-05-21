import json
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="",
  database="proyectobd",
  charset='utf8mb4',
  collation='utf8mb4_unicode_ci'
)

nombre_archivo = "ejercicios.json"
with open(nombre_archivo, "r", encoding="utf-8") as archivo:
    datos = json.load(archivo)

for objetivo, dias in datos.items():
    for dia, ejercicios in dias.items():
        for ejercicio in ejercicios:
            nombre_ejercicio = ejercicio['exercise']
            reps = ejercicio['reps']
            sets = ejercicio['sets']

            sql = "INSERT INTO `RUTINAS`(`objetivo`,`dia_semana`, `ejercicio`, `repeticiones`, `sets`) VALUES (%s,%s,%s,%s,%s)"
            val = (objetivo, dia, nombre_ejercicio, reps, sets)

            mycursor = mydb.cursor()
            mycursor.execute(sql, val)
            mydb.commit()

            print(mycursor.rowcount, "registro insertado")

mycursor.close()
mydb.close()
