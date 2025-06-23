Create Table Categorias(
	Id_Categoria varchar(255) PRIMARY KEY,
	Nombre varchar(255)
);

Create Table Preguntas(
	Id_Pregunta int NOT NULL AUTO INCREMENT;
	Id_Categoria varchar(255),
	Pregunta varchar(255),
   	PRIMARY KEY(Id_Pregunta), 
	FOREIGN KEY(Id_Categoria) REFERENCES Categorias(Id_Categoria)
);

Create Table Opciones(
	Id_Opcion int NOT NULL AUTO INCREMENT;
	Id_Pregunta int
	Opcion varchar(255),
	Correcta boolean,
	PRIMARY KEY(Id_Opcion), 
	FOREIGN KEY(Id_Pregunta) REFERENCES Preguntas(Id_Pregunta)
);

Create Table Users(
	ID int NOT NULL AUTO INCREMENT,
	Username varchar(255),
	Mail varchar(255),
	Password varchar(255)
);