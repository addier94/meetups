const moment = require('moment');
const mongoose = require('mongoose');

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();
const user3Id = mongoose.Types.ObjectId();

const meetup1Id = mongoose.Types.ObjectId();
const meetup2Id = mongoose.Types.ObjectId();
const meetup3Id = mongoose.Types.ObjectId();
const meetup4Id = mongoose.Types.ObjectId();
const meetup5Id = mongoose.Types.ObjectId();
const meetup6Id = mongoose.Types.ObjectId();
const meetup7Id = mongoose.Types.ObjectId();
const meetup8Id = mongoose.Types.ObjectId();
const meetup9Id = mongoose.Types.ObjectId();
const meetup10Id = mongoose.Types.ObjectId();
const meetup11Id = mongoose.Types.ObjectId();
const meetup12Id = mongoose.Types.ObjectId();

const thread1Id = mongoose.Types.ObjectId();
const thread2Id = mongoose.Types.ObjectId();
const thread3Id = mongoose.Types.ObjectId();

const post1Id = mongoose.Types.ObjectId();
const post2Id = mongoose.Types.ObjectId();
const post3Id = mongoose.Types.ObjectId();
const post4Id = mongoose.Types.ObjectId();
const post5Id = mongoose.Types.ObjectId();

const category1Id = mongoose.Types.ObjectId();
const category2Id = mongoose.Types.ObjectId();
const category3Id = mongoose.Types.ObjectId();
const category4Id = mongoose.Types.ObjectId();
const category5Id = mongoose.Types.ObjectId();

module.exports = {
  "meetups": [
     {
      "_id": meetup1Id,
      "location": "Cochabamba, BO",
      "processedLocation": "Sacaba",
      "title": "La nueva versión de angular9",
      "image": "https://images.unsplash.com/photo-1432297984334-707d34c4163a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      "description": "En este reunión vamos a tocar puntos a considerar de la nueva versión de angular9, para posteriormente migrar de vue",
      "shortInfo": "Migración de vue a angular",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(2, 'days').toISOString(),
      "timeFrom": "14:00",
      "timeTo": "18:00",
      "joinedPeopleCount": 1,
      "status": "active",
      "category": category1Id,
      "joinedPeople": [user2Id],
      "meetupCreator": user1Id
    },
    {
      "_id": meetup2Id,
      "location": "Cochabamba, BO",
      "processedLocation": "Heroinas",
      "title": "TDD en backend y frontend",
      "image": "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      "description": "Actualmente tenemos un proyecto que esta creciendo y seria bueno implementar testing en backend y frontend",
      "shortInfo": "Implementar TDD",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(22, 'days').toISOString(),
      "timeFrom": "08:00",
      "timeTo": "10:00",
      "joinedPeopleCount": 1,
      "status": "active",
      "category": category2Id,
      "joinedPeople": [user1Id, user3Id],
      "meetupCreator": user2Id
    },
    {
      "_id": meetup3Id,
      "location": "Cochabamba, BO",
      "processedLocation": "Av. las americas",
      "title": "Node para tiempo real",
      "image": "https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      "description": "Se ha probado que node puede soportar una cantidad considerable de peticiones simultaneos, y con una buena performance para apliaciones en tiempo real por lo cual tenemos un candidato para el proyecto que tenemos previsto",
      "shortInfo": "Node para el proyecto previsto",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(32, 'days').toISOString(),
      "timeFrom": "08:00",
      "timeTo": "10:00",
      "joinedPeopleCount": 1,
      "status": "active",
      "category": category5Id,
      "joinedPeople": [user1Id, user3Id],
      "meetupCreator": user2Id
    },
    {
      "_id": meetup4Id,
      "location": "Cochabamba",
      "processedLocation": "AV. Santa Cruz",
      "title": "El proyecto para la universidad Franz Tamayo",
      "image": "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      "description": "Hay un contrato para desarrollar un sistema, es necesario entender y sugerir para desarrollar un proyecto adecuado",
      "shortInfo": "Sistema para Franz Tamayo",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(42, 'days').toISOString(),
      "timeFrom": "08:00",
      "timeTo": "10:00",
      "joinedPeopleCount": 1,
      "status": "active",
      "category": category1Id,
      "joinedPeople": [user1Id, user3Id],
      "meetupCreator": user2Id
    },
    {
      "_id": meetup5Id,
      "location": "Cochabamba, BO",
      "processedLocation": "Prado",
      "title": "Reunión en la oficina de marketing",
      "image": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      "description": "Esta reunión es para los backend developers sin embargo pueden asister los del frontend",
      "shortInfo": "Reunión para los backend developers.",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(52, 'days').toISOString(),
      "timeFrom": "08:00",
      "timeTo": "10:00",
      "joinedPeopleCount": 1,
      "status": "active",
      "category": category2Id,
      "joinedPeople": [user1Id, user3Id],
      "meetupCreator": user2Id
    },
    {
      "_id": meetup6Id,
      "location": "Cochabamba, BO",
      "processedLocation": "Prado",
      "title": "data science",
      "image": "https://images.unsplash.com/photo-1464655646192-3cb2ace7a67e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      "description": "El proyecto desarrollado en 2017 tiene muchos datos por lo que requiere implementar machine learning",
      "shortInfo": "Implementar Machine Learning al proyecto desarrollado en 2017",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(62, 'days').toISOString(),
      "timeFrom": "08:00",
      "timeTo": "10:00",
      "joinedPeopleCount": 1,
      "status": "active",
      "category": category3Id,
      "joinedPeople": [user1Id, user3Id],
      "meetupCreator": user2Id
    },
    {
      "_id": meetup7Id,
      "location": "Cochabamba, BO",
      "processedLocation": "No definido",
      "title": "Partido amistoso",
      "image": "https://images.unsplash.com/photo-1515463765583-f26bc3db3e83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80",
      "description": "Hay un desafio de jalasoft especificaron ser del area backend",
      "shortInfo": "Desafio para jugar futbol en jalasoft",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(72, 'days').toISOString(),
      "timeFrom": "08:00",
      "timeTo": "10:00",
      "joinedPeopleCount": 2,
      "status": "active",
      "category": category3Id,
      "joinedPeople": [],
      "meetupCreator": user2Id
    },
    {
      "_id": meetup8Id,
      "location": "Cochabamba, BO",
      "processedLocation": "Prado",
      "title": "Reunion para los de marketing",
      "image": "https://images.unsplash.com/photo-1544084963-80e72062505b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      "description": "Esta reunión es completamente obligatorio para los de marketing sin embargo queda abierto para los miembros",
      "shortInfo": "Reunión obligatorio para los de marketing",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(82, 'days').toISOString(),
      "timeFrom": "08:00",
      "timeTo": "10:00",
      "joinedPeopleCount": 2,
      "status": "active",
      "category": category3Id,
      "joinedPeople": [],
      "meetupCreator": user2Id
    },
    {
      "_id": meetup9Id,
      "location": "Santa Cruz, BO",
      "processedLocation": "Av. San martin",
      "title": "NGconfig",
      "image": "https://images.unsplash.com/photo-1534339195754-f27a1b33240d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      "description": "En este evento dara charla uno de nuestro equipo frontend",
      "shortInfo": "Ngconfig en santa cruz Bolivia",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(92, 'days').toISOString(),
      "timeFrom": "08:00",
      "timeTo": "10:00",
      "joinedPeopleCount": 2,
      "status": "active",
      "category": category3Id,
      "joinedPeople": [],
      "meetupCreator": user2Id
    },
    {
      "_id": meetup10Id,
      "location": "Mexico, MX",
      "processedLocation": "AV. veles",
      "title": "NGconfig",
      "image": "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "description": "NGconfig en la ciudad de mexico para los que les interesa se les pagara todo el viaje y hotel",
      "shortInfo": "Este evento no es obligatorio sin embargo es requerido para los frontend developers",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(102, 'days').toISOString(),
      "timeFrom": "01:00",
      "timeTo": "04:00",
      "joinedPeopleCount": 2,
      "status": "active",
      "category": category3Id,
      "joinedPeople": [],
      "meetupCreator": user2Id
    },
    {
      "_id": meetup11Id,
      "location": "Miami, USA",
      "processedLocation": "Av beach qry",
      "title": "Someting in the city",
      "image": "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1345&q=80",
      "description": "Conferencia de go en la fuimos envitados",
      "shortInfo": "Conferencia de GO",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(112, 'days').toISOString(),
      "timeFrom": "08:00",
      "timeTo": "10:00",
      "joinedPeopleCount": 2,
      "status": "active",
      "category": category3Id,
      "joinedPeople": [],
      "meetupCreator": user2Id
    },
    {
      "_id": meetup12Id,
      "location": "Cochabamba, BO",
      "processedLocation": "Av las americas",
      "title": "Futbol",
      "image": "https://images.unsplash.com/photo-1515274439695-f4e5911fbbdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1247&q=80",
      "description": "Por favor confirmen quienes van a jugar habra premio por el Manager",
      "shortInfo": "Partido abierto para los que quieran",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(132, 'days').toISOString(),
      "timeFrom": "08:00",
      "timeTo": "10:00",
      "joinedPeopleCount": 2,
      "status": "active",
      "category": category3Id,
      "joinedPeople": [],
      "meetupCreator": user2Id
    }
  ],
  "users": [
    {
      "_id": user1Id,
      "avatar": "https://scontent.flpb1-1.fna.fbcdn.net/v/t1.15752-9/86661854_2747320725345859_3908301818521714688_n.jpg?_nc_cat=106&_nc_ohc=-6GU5krSgLAAX98f-yn&_nc_ht=scontent.flpb1-1.fna&oh=a79db4f277614075444972c3736a49c2&oe=5ECA5FF7",
      "email": "alfredo@gmail.com",
      "name": "Alfredo Fernandez",
      "info": "Full Stack Developer",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "username": "afalfredo",
      "password": "aftesttest",
      joinedMeetups: [meetup2Id, meetup3Id, meetup4Id, meetup5Id, meetup6Id]
    },
    {
      "_id": user2Id,
      "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      "email": "peter@gmail.com",
      "name": "Peter Green jala",
      "info": "Backend Developer",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "username": "pgpeter",
      "password": "pgtesttest",
      joinedMeetups: [meetup1Id]
    },
    {
      "_id": user3Id,
      "avatar": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      "email": "kevin@gmail.com",
      "name": "Kevin Rock",
      "info": "Administrador de servidores",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "username": "krkevin",
      "password": "krtesttest",
      joinedMeetups: [meetup2Id, meetup3Id, meetup4Id, meetup5Id, meetup6Id]
    },
    {
      "_id": user3Id,
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      "email": "rober@gmail.com",
      "name": "Rober Carlin Reyes",
      "info": "Frontend Developer",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "username": "rcrober",
      "password": "rtesttest",
      joinedMeetups: [meetup2Id, meetup3Id, meetup4Id, meetup5Id, meetup6Id]
    },
    {
      "_id": user2Id,
      "avatar": "https://images.unsplash.com/photo-1558980664-10e7170b5df9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
      "email": "bernardo@gmail.com",
      "name": "Bernardo yumo",
      "info": "Machine learning and computer science",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "username": "bybernardo",
      "password": "bytesttest",
      joinedMeetups: [meetup1Id]
    },
  ],
  "threads": [
    {
      "_id": thread1Id,
      "title": "Las discuciones se enfoca en el tema correspondiente?",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "meetup": meetup1Id,
      "user": user1Id,
      "posts": [post1Id, post2Id]
    },
    {
      "_id": thread2Id,
      "title": "Esto será Genial",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "meetup": meetup2Id,
      "user": user2Id,
      "posts": [post3Id, post4Id]
    },
    {
      "_id": thread3Id,
      "title": "Tan pronto?",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "meetup": meetup2Id,
      "user": user2Id,
      "posts": [post5Id]
    }
  ],
  "posts": [
    {
      "_id": post1Id,
      "text": "Necesariamente deberia ser hací",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "thread": thread1Id,
      "user": user1Id
    },
    {
      "_id": post2Id,
      "text": "Efectivamente",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "thread": thread1Id,
      "user": user1Id
    },
    {
      "_id": post3Id,
      "text": "Sí esperaba esto",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "thread": thread2Id,
      "user": user2Id,
    },
    {
      "_id": post4Id,
      "text": "Para esto tengo propuestas que puede mejorar al proyecto",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "thread": thread2Id,
      "user": user2Id,
    },
    {
      "_id": post5Id,
      "text": "Esto es genial",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "thread": thread3Id,
      "user": user2Id,
    }
  ],
  "categories": [
    {
      "_id": category1Id,
      "name": "deporte",
      "image": "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },{
      "_id": category2Id,
      "name": "cine",
      "image": "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0MjB9&auto=format&fit=crop&w=1351&q=80",
    },
    {
      "_id": category3Id,
      "name": "musica",
      "image": "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"
    },
    {
      "_id": category4Id,
      "name": "dansa",
      "image": "https://images.unsplash.com/photo-1509670811615-bb8b07cb3caf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80"
    },
    {
      "_id": category5Id,
      "name": "fiesta",
      "image": "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    },
    {
      "_id": mongoose.Types.ObjectId(),
      "name": "literatura",
      "image": "https://images.unsplash.com/photo-1490633874781-1c63cc424610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    },
    {
      "_id": mongoose.Types.ObjectId(),
      "name": "comida",
      "image": "https://images.unsplash.com/photo-1536510233921-8e5043fce771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1542&q=80"
    },
    {
      "_id": mongoose.Types.ObjectId(),
      "name": "juegos",
      "image": "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    }
  ]
};