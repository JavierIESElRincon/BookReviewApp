## Book Review App

Este es un proyecto simple que permite subir, listar, actualizar, eliminar libros y reviews desde una aplicación. El proyecto utiliza Ionic para la interfaz de usuario, Express como backend, Sequelize como ORM y MySQL como base de datos.

## Características

Agregar Libros: Los usuarios pueden subir libros a la base de datos con información como título, autor, género y fecha de publicación.

Ver Libros: Los libros agregados se pueden listar en la interfaz de usuario.

Actualizar Libros: Se puede editar la información de un libro existente.

Eliminar Libros: Los libros pueden ser eliminados de la base de datos.

## Tecnologías utilizadas

Frontend: Ionic Framework (HTML, CSS, JavaScript, Angular)
Backend: Express.js - Framework de Node.js
Base de Datos: MySQL
ORM: Sequelize - Mapeo de objetos-relacional (ORM) para Node.js
REST API: El backend está basado en una API REST que interactúa con la base de datos MySQL a través de Sequelize.

## Requisitos

Para ejecutar este proyecto, necesitarás tener instalados:

    Node.js (v14 o superior)
    Ionic CLI (v6 o superior)
    MySQL (v8 o superior)
    Git (opcional, para clonar el proyecto)

## Instalación

1- Clona este repositorio

    git clone https://github.com/JavierIESElRincon/BookReviewApp.git

2- Ve al directorio del proyecto:

    cd BookReviewApp

## Backend (Express + Sequelize)

1- Dirígete al directorio backend:

    cd backend

2- Instala las dependencias:

    npm install

3- Crea una base de datos MySQL llamada db_book_review:

    CREATE DATABASE db_book_review;

4- Configura la conexión a la base de datos en el archivo config/db.config.js:

module.exports = {
    HOST: "localhost",
    USER: "tu_usuario",
    PASSWORD: "tu_contraseña",
    DB: "db_book_review",
    dialect: "mysql"
};

5- Inicia el servidor backend:

    node index.js

    El servidor estará corriendo en http://localhost:8080.

## Frontend (Ionic)

1- Dirígete al directorio frontend:

    cd BookReviewApp/frontend/src/app/services

2- Inicia la aplicación en modo desarrollo:

    ionic serve

    La aplicación Ionic estará disponible en http://localhost:8100.

## API Endpoints

https://www.postman.com/javillitra/bookreviewapp/collection/h2015x9/bookreview?action=share&creator=38968858

Crear un Libro

    URL: http://localhost:8080/api/books

    Método: POST

    Cuerpo (Body):

    {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "genre": "Southern Gothic, Bildungsroman",
    "publication_date": "July 11, 1960"
    }

    {
    "title": "1984",
    "author": "George Orwell",
    "genre": "Dystopian, Political Fiction",
    "publication_date": "June 8, 1949"
    }

    {
    "title": "One Hundred Years of Solitude",
    "author": "Gabriel García Márquez",
    "genre": "Magical Realism",
    "publication_date": "1967"
    }

    {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "genre": "Tragedy, Historical Fiction",
    "publication_date": "April 10, 1925"
    }

    {
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "genre": "Romance, Satire",
    "publication_date": "January 28, 1813"
    }

Crear una Review

    URL: http://localhost:8080/api/reviews

    Método: POST

    Cuerpo (Body):

    {
    "username": "Paak"
    "rating": 3
    "description": "Un clásico esencial: Una exploración conmovedora de la moralidad, la empatía y el racismo. Lee combina una narrativa accesible con temas profundos y universales."
    "bookId": 1
    }

    {
    "username": "Scaar"
    "rating": 4
    "description": "La atmósfera opresiva y las ideas subyacentes la convierten en un pilar de la literatura política."
    "bookId": 2
    }

    {
    "username": "Lunetk"
    "rating": 5
    "description": "La saga de los Buendía encapsula el realismo mágico en su máxima expresión. Cada página está impregnada de belleza y misterio."
    "bookId": 3
    }

    {
    "username": "Klur"
    "rating": 3
    "description": "Este libro encapsula los excesos de una era y el anhelo humano por lo inalcanzable."
    "bookId": 4
    }

    {
    "username": "Srocha"
    "rating": 4
    "description": "Jane Austen combina romance con aguda sátira social, creando personajes inolvidables como Elizabeth Bennet y Mr. Darcy."
    "bookId": 5
    }

Obtener todos los Libros

    URL: http://localhost:8080/api/books
    Método: GET

Obtener todas las reviews

    URL: http://localhost:8080/api/reviews
    Método: GET

Obtener un Libro por ID

    URL: http://localhost:8080/api/books/:id
    Método: GET

Eliminar un Libro

    URL: http://localhost:8080/api/books/:id
    Método: DELETE
