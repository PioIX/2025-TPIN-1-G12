Create Table Categorias(
	Id_Categoria varchar(255) PRIMARY KEY,
	Nombre varchar(255)
);

Create Table Preguntas(
	Id_Preguntas int NOT NULL AUTO INCREMENT;
	Id_Categoria varchar(255),
	Pregunta varchar(255),
	Opcion1 varchar(255),
	Opcion2 varchar(255),
	Opcion3 varchar(255),
	Opcion4 varchar(255),
	Correcta int
   	PRIMARY KEY(Id_Preguntas), 
	FOREIGN KEY(Id_Categoria) REFERENCES Categorias(Id_Categoria)
);

Create Table Users(
	ID int NOT NULL AUTO INCREMENT,
	Username varchar(255),
	Mail varchar(255),
	Password varchar(255)
);