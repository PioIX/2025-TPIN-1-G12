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
	Contra varchar(255)
);

Insert into Categorias (Id_Categoria, Nombre)
Values
('His', 'Historia'),
('Gam', 'VideoJuegos'),
('SyP', 'Series y Pelis'),
('Mus', 'Musica'),
('Pop', 'Cultura Pop'),
('Cie', 'Ciencia'),
('Ani', 'Anime')
;

Insert into Preguntas (Id_Categoria, Pregunta)
Values
;

Insert into Opciones (Id_Pregunta, Opcion, Correcta)
Values
;

Insert into Users (Username, Mail, Contra)
Values
('GPallavicini', 'gpallavicini@pioix.edu.ar', 'Pepito20'),
('Bola Chong', 'pchong@pioix.edu.ar', 'Towa69'),
('SeGiFer', 'sgilfernandez@pioix.edu.ar', 'Peron2027'),
('MorVega', 'mvega@pioix.edu.ar', 'Kilowatt31'),
('a', 'facil@acceso.com.ar', '1')
;