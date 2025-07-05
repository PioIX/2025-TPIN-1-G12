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
('CIE', '¿Cuál es el planeta más grande del sistema solar?'),
('CIE', '¿Qué celula transporta oxígeno en la sangre?'),
('CIE', '¿Que órgano produce insulina?'),
('CIE', '¿Cuántas vértebras posee el ser humano adulto promedio?'),
('CIE', '¿Cuál de estos animales es un mamífero?'),
('CIE', '¿Cuál es el estado más común de la materia en el universo?'),
('CIE', '¿Qué parte del cuerpo controla todo el sistema nervioso?'),
('CIE', '¿Cuál es la unidad de medida de la energía?'),
('CIE', '¿Qué fuerza nos mantiene en el suelo?'),
('CIE', '¿Cuál es la fórmula del agua?'),
('CIE', '¿Quien propuso la teoria de la relatividad?'),
('CIE', '¿Quienes desarrollaron la teoria de la evolucion?'),
('CIE', '¿Que particula subatomica tinene carga negativa?'),
('CIE', '¿Cual es el hueso mas largo del cuerpo humano?'),
('CIE', '¿Cual es el proceso por el cual las plantas producen su alimento?'),
('HIS', '¿En que año comenzo la Segunda Guerra Mundial?'),
('HIS', '¿Que civilizacion construyo Machu Picchu?'),
('HIS', '¿Que evento se conmemora el 14 de julio en Francia?'),
('HIS', '¿Que provoco la Revolucion Francesa?'),
('HIS', '¿Que paises firmaron el Tratado de Versalles?'),
('HIS', '¿Que paises formaban el Eje en la Segunda Guerra Mundial?'),
('HIS', '¿En que año llego Cristobal Colon a America?'),
('HIS', '¿De que pais era Adolf Hitler?'),
('HIS', '¿Quien es Kim Jong-Un?'),
('HIS', '¿Quien fue el libertador de Argentina, Chile, Peru?'),
('HIS', '¿Que hecho dio inicio a la Revolucion Francesa?'),
('HIS', '¿Quien escribio el "Contrato Social"?'),
('HIS', '¿Quien fue el primer presidente de los Estados Unidos?'),
('HIS', '¿Que revolucion llevo a Lenin al poder?'),
('HIS', 'Segun la leyenda, ¿Quienes fundaron la ciudad de Roma?'),
('SYP', '¿Quien interpreta a Deadpool?'),
('SYP', '¿Quien es el protagonista de la serie "El Principe del Rap"?'),
('SYP', '¿Como se llama el robot gigante de "Grandes Heroes"?'),
('SYP', '¿En cual de estas series animadas el protagonista es un actor en Hollywood?'),
('SYP', '¿Cual fue la primera pelicula en ser animada completamente por computadora?'),
('SYP', '¿De que color es el gorro de papa pitufo?'),
('SYP', '¿Que pelicula gano el oscar a Mejor Pelicula Animada en 2003?'),
('SYP', '¿Que pelicula dirigida por Stanley Kubrick fue prohibida en Reino Unida por casi 30 años?'),
('SYP', '¿Quien interpreta al Joker en "The Dark Knight"?'),
('SYP', '¿Cual de estas peliculas esta ambientada en la Segunda Guerra Mundial?'),
('SYP', '¿Quien interpreta a Sherlock Holmes en la serie "Sherlock"?'),
('SYP', '¿Que pelicula animada hace una fuerte critica al capitalismo?'),
('SYP', '¿Quien es el director de Hogwarts?'),
('SYP', '¿Cual es el nombre del mundo donde ocurre la pelicula "Avatar"?'),
('SYP', '¿En que pais se produjo el primer largometraje animado?'),
('MUS', '¿Cual es el verdadero nombre de David Bowie?'),
('MUS', '¿En que pais se origino el tango?'),
('MUS', '¿Que cantante lanzo el album "Lemonade"?'),
('MUS', '¿Que banda popularizo el genero Grunge en los 90?'),
('MUS', '¿A que banda pertenece el album "Never mind the Bollocks"?'),
('MUS', '¿Quien fue el primer bajista de The Clash?'),
('MUS', '¿Que banda punk incluia en sus letras temas de ciencia ficcion y horror?'),
('MUS', '¿Que banda fue formada por Simon Cowell en "The X Factor"?'),
('MUS', '¿Que banda pop sueca gano Eurovision en 1974?'),
('MUS', '¿Cual de estas cantantes lanzo su carrera en Disney Channel antes de hacerse artista pop?'),
('MUS', '¿Que album lanzo Billie Eilish en 2021?'),
('MUS', '¿Quien es la aerisra con mas premios Grammy ganados en la historia?'),
('MUS', '¿A que tema pertenece la lirica "My loneliness is killing me"?'),
('MUS', '¿Que cantante logro exito mundia lcon el album "Let Go" en 2002?'),
('MUS', '¿Quien tiene una cancion en conjunto con Wyclef Jean?'),
('POP', '¿Cuál es la película con mayor recaudación de todos los tiempos?'),
('POP', '¿Quién interpretó al personaje de Tony Stark en el Universo Cinematográfico de Marvel?'),
('POP', '¿En qué año se estrenó la serie de televisión "Game of Thrones" en HBO?'),
('POP', '¿Quienes cometieron la masacre de Columbine?'),
('POP', '¿Qué artista lanzó el álbum "The Marshall Mathers LP" en 2000?'),
('POP', '¿Qué popular sitio de redes sociales fue lanzado en 2004 por Mark Zuckerberg?'),
('POP', '¿Cuál es el planeta más pequeño de nuestro sistema solar?'),
('POP', '¿En qué país se usó la primera bomba atómica?'),
('POP', '¿A qué desafortunado grupo pertenecen Amy Winehouse, Jimi Hendrix y Janis Joplin?'),
('POP', '¿Quién es la persona más joven en ganar un premio Grammy al Álbum del Año?'),
('POP', '¿Quién pintó a la Mona Lisa?'),
('POP', '¿Quién inventó la bombilla?'),
('POP', '¿Cual es la capital de Austria?'),
('POP', '¿Cuál es el órgano más grande del cuerpo humano?'),
('POP', '¿Cuántas veces ha estado el hombre en la Luna?'),
('GAM', '¿Que compañia desarrollo la consola Playstation?'),
('GAM', '¿A que compañia pertenece la saga Halo?'),
('GAM', '¿Cual de estos personajes aparece en todos los Super Smash Bros hasta la fecha?'),
('GAM', '¿En que año se lanzo la primera entrega de Dark Souls?'),
('GAM', '¿Que famoso diseñador de videojuegos creo Metal Gear Solid?'),
('GAM', '¿Que franquicia tiene como antagonista principal a Sephiroth?'),
('GAM', '¿Cual de estos videojuegos contiene personajes de Disney?'),
('GAM', '¿Que franquicia se centra en asesinos a lo largo de distintas epocas historicas?'),
('GAM', '¿Cuál es el videojuego más vendido de todos los tiempos?'),
('GAM', '¿Cuál fue el primer juego 3D de la historia?'),
('GAM', '¿Qué compañía inventó la primera consola de videojuegos?'),
('GAM', '¿Cual es la comida favorita de Sonic?'),
('GAM', '¿Cual de estos NO es un estilo de pelea de Kazuma Kiryu en Yakuza Kiwami?'),
('GAM', '¿Como se llama el protagonista de Hotline Miami?'),
('GAM', '¿Cual de estos videojuegos es un mundo abierto con dinosaurios?'),
('ANI', '¿Cual es la cancion debut de la banda Roselia?'),
('ANI', '¿Cual fue el nombre temporal de la banda Togenashi Togeari?'),
('ANI', '¿En que año se estreno el primer anime de Dragon Ball?'),
('ANI', '¿Como se llama el barco pirata de Luffy?'),
('ANI', '¿Cual es el nombre de las cartas que aparecen en Sakura Cardcaptor?'),
('ANI', '¿Por que Homura repite multiples veces la linea temporal?'),
('ANI', '¿Cual es el nombre del primer ending del anime K-ON?'),
('ANI', '¿Cual es el objetivo principal de Edward en Fullmetal Alchemist?'),
('ANI', '¿Cual es el nombre del demonio que posee a Inuyasha?'),
('ANI', '¿Cuantas veces falló Naruto en el examen de graduación de la Academia?'),
('ANI', '¿Cual es la cancion que salvo a la franquicia Love Live?'),
('ANI', '¿Cual es el objetivo de Kaguya y Shirogane en el anime Kaguya-sama Love is War?'),
('ANI', '¿Quien usa el seudonimo de Oblivionis durante los conciertos en Ave Mujica?'),
('ANI', '¿Que maldicion tiene Ranma Saotome?'),
('ANI', '¿Cuantas loops temporales se deduce que hizo Daiba Nana?')
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
