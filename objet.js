let monPersonnage = {
    nom: "Diouf",
    prenom: "Abdou Karim",
    age: 35,
    couleurPreferee: "noir",
    hobbies: "Jouer au foot"
}

monPersonnage.vehiculePreferee = "BMW X5"

console.log(monPersonnage.nom, monPersonnage.prenom)


let ticketDeCinema = {
    nomFilm: "WAKANDA",
    prix: "5000 Fcfa",
    numeroSalle: 3
}

let message = "Bonjour Abdou Karim votre film " + ticketDeCinema.nomFilm + " est en salle " + ticketDeCinema.numeroSalle

console.log(message)