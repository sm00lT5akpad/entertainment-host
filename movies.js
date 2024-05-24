const movies = [
    {
        name: " The Shawshank Redemption",
        picture: "img/1.jpg",
        description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
        videoPath: "mov/1.mp4",
        trailer: "https://www.youtube.com/watch?v=5nQdDJw0Gco&pp=ygWLAU92ZXIgdGhlIGNvdXJzZSBvZiBzZXZlcmFsIHllYXJzLCB0d28gY29udmljdHMgZm9ybSBhIGZyaWVuZHNoaXAsIHNlZWtpbmcgY29uc29sYXRpb24gYW5kLCBldmVudHVhbGx5LCByZWRlbXB0aW9uIHRocm91Z2ggYmFzaWMgY29tcGFzc2lvbi4%3D",
        releaseDate: "1994",
        genre: "drama",
        country: "USA"
    },
    {
        name: "The Godfather",
        picture: "img/2.jpg",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        videoPath: "mov/2.mp4",
        trailer: "https://www.youtube.com/watch?v=UaVTIH8mujA&pp=ygUNVGhlIEdvZGZhdGhlcg%3D%3D",
        releaseDate: "1972",
        genre: "crime,Drama",
        country: "USA"
    },
    {
        name: "The Dark Knight",
        picture: "img/3.jpeg",
        description: " When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        videoPath: "mov/3.mp4",
        trailer: "https://www.youtube.com/watch?v=jane6C4rIwc&pp=ygUPdGhlIGRhcmsga25pZ2h0",
        releaseDate: " ",
        genre: "Action,Drama",
        country: "USA"
    },
    {
        name: "12 Angry Men",
        picture: "img/4.jpg",
        description: " ",
        videoPath: "mov/ .mp4",
        trailer: "",
        releaseDate: " ",
        genre: "",
        country: " "
    },
    {
        name: "The Maze Runner ",
        picture: "img/5.jpg",
        description: " ",
        videoPath: "mov/ .mp4",
        trailer: "",
        releaseDate: " ",
        genre: "",
        country: " "
    },
    {
        name: "Pulp Fiction",
        picture: "img/6.jpg",
        description: " ",
        videoPath: "mov/ .mp4",
        trailer: "",
        releaseDate: " ",
        genre: "",
        country: " "
    },
    {
        name: " The Shawshank Redemption",
        picture: "img/1.jpg",
        description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
        videoPath: "mov/1.mp4",
        trailer: "https://www.youtube.com/watch?v=5nQdDJw0Gco&pp=ygWLAU92ZXIgdGhlIGNvdXJzZSBvZiBzZXZlcmFsIHllYXJzLCB0d28gY29udmljdHMgZm9ybSBhIGZyaWVuZHNoaXAsIHNlZWtpbmcgY29uc29sYXRpb24gYW5kLCBldmVudHVhbGx5LCByZWRlbXB0aW9uIHRocm91Z2ggYmFzaWMgY29tcGFzc2lvbi4%3D",
        releaseDate: "1994",
        genre: "drama",
        country: "USA"
    },
    {
        name: "The Godfather",
        picture: "img/2.jpg",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        videoPath: "mov/2.mp4",
        trailer: "https://www.youtube.com/watch?v=UaVTIH8mujA&pp=ygUNVGhlIEdvZGZhdGhlcg%3D%3D",
        releaseDate: "1972",
        genre: "crime,Drama",
        country: "USA"
    },
    {
        name: "The Dark Knight",
        picture: "img/3.jpeg",
        description: " When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        videoPath: "mov/3.mp4",
        trailer: "https://www.youtube.com/watch?v=jane6C4rIwc&pp=ygUPdGhlIGRhcmsga25pZ2h0",
        releaseDate: " ",
        genre: "Action,Drama",
        country: "USA"
    },
    {
        name: "12 Angry Men",
        picture: "img/4.jpg",
        description: " ",
        videoPath: "mov/ .mp4",
        trailer: "",
        releaseDate: " ",
        genre: "",
        country: " "
    },
    {
        name: "The Maze Runner ",
        picture: "img/5.jpg",
        description: " ",
        videoPath: "mov/ .mp4",
        trailer: "",
        releaseDate: " ",
        genre: "",
        country: " "
    },
    {
        name: "Pulp Fiction",
        picture: "img/6.jpg",
        description: " ",
        videoPath: "mov/ .mp4",
        trailer: "",
        releaseDate: " ",
        genre: "",
        country: " "
    },
    {
        name: " The Shawshank Redemption",
        picture: "img/1.jpg",
        description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
        videoPath: "mov/1.mp4",
        trailer: "https://www.youtube.com/watch?v=5nQdDJw0Gco&pp=ygWLAU92ZXIgdGhlIGNvdXJzZSBvZiBzZXZlcmFsIHllYXJzLCB0d28gY29udmljdHMgZm9ybSBhIGZyaWVuZHNoaXAsIHNlZWtpbmcgY29uc29sYXRpb24gYW5kLCBldmVudHVhbGx5LCByZWRlbXB0aW9uIHRocm91Z2ggYmFzaWMgY29tcGFzc2lvbi4%3D",
        releaseDate: "1994",
        genre: "drama",
        country: "USA"
    },
    {
        name: "The Godfather",
        picture: "img/2.jpg",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        videoPath: "mov/2.mp4",
        trailer: "https://www.youtube.com/watch?v=UaVTIH8mujA&pp=ygUNVGhlIEdvZGZhdGhlcg%3D%3D",
        releaseDate: "1972",
        genre: "crime,Drama",
        country: "USA"
    },
    {
        name: "The Dark Knight",
        picture: "img/3.jpeg",
        description: " When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        videoPath: "mov/3.mp4",
        trailer: "https://www.youtube.com/watch?v=jane6C4rIwc&pp=ygUPdGhlIGRhcmsga25pZ2h0",
        releaseDate: " ",
        genre: "Action,Drama",
        country: "USA"
    },
    {
        name: "12 Angry Men",
        picture: "img/4.jpg",
        description: " ",
        videoPath: "mov/ .mp4",
        trailer: "",
        releaseDate: " ",
        genre: "",
        country: " "
    },
    {
        name: "The Maze Runner ",
        picture: "img/5.jpg",
        description: " ",
        videoPath: "mov/ .mp4",
        trailer: "",
        releaseDate: " ",
        genre: "",
        country: " "
    },
    {
        name: "Pulp Fiction",
        picture: "img/6.jpg",
        description: " ",
        videoPath: "mov/ .mp4",
        trailer: "",
        releaseDate: " ",
        genre: "",
        country: " "
    },
    // ... other movie objects
];

export default movies;
