import csv
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="",
  database="proyectobd",
  charset='utf8mb4',
  collation='utf8mb4_unicode_ci'
)

nombre_archivo = "datos7.csv"
with open(nombre_archivo, "r", encoding="utf-8") as archivo:
    lector = csv.reader(archivo, delimiter="\t")
    # Omitir el encabezado
    next(lector, None)

    for fila in lector:
        # Tenemos la lista. En la 0 tenemos el nombre, en la 1 la calificación y en la 2 el precio
        imagen = fila[1]
        imagen2 = fila[2]
        titulo = fila[0]
        descripcion = fila[3]
        grupoMuscular = fila[4]
        tipoEntrenamiento = fila[5]
        nivel = fila[6]
        print(f"-{titulo}-{imagen}-{imagen2}-{descripcion}-{grupoMuscular}")
        mycursor = mydb.cursor()

        sql = "INSERT INTO `ejercicios`(`titulo`, `imagen`, `imagen2`, `descripcion`, `grupoMuscular`, `tipoEntrenamiento`, `tipoNivel`) VALUES (%s,%s,%s,%s,%s,%s,%s)"

        val = (titulo, imagen, imagen2, descripcion, grupoMuscular, tipoEntrenamiento, nivel)

        mycursor.execute(sql, val)
        mydb.commit()
        print(mycursor.rowcount, "registro insertado")
