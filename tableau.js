const maCollectionDeFilms = ["Titanic", "Jurassic Park", "Le Seigneur des Anneaux", "Wakanda"]

const monFilmPrefere = "Wakanda"
const monPremierFilm = "Jurassic Park"

const maCollectiondeFilms = [monPremierFilm, monFilmPrefere]

let premierFilmDuTableau = maCollectionDeFilms[0]
console.log(premierFilmDuTableau)

const nombreDeFilms = maCollectionDeFilms.length
console.log(nombreDeFilms)

maCollectionDeFilms.push("Retour vers le futur")
console.log(maCollectionDeFilms)

maCollectionDeFilms.pop()
console.log(maCollectionDeFilms)