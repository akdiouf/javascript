alert('Succès')

let placesDejaVendues = 150
placesDejaVendues = placesDejaVendues + 10
alert(placesDejaVendues)

placesDejaVendues += 10
console.log(placesDejaVendues)

let monTitre = "Le titre de mon article"
console.log(monTitre)
let monContenu = 'Le contenu de mon article'
console.log(monContenu)

let premierePartie = "Mon nom est Bond"
let deuxiemePartie = ", James Bond."
let punchline = premierePartie + deuxiemePartie
// punchline vaut “Mon nom est Bond, James Bond.”

punchline = "Mon nom est Bond"
punchline += ", James Bond."
// punchline vaut “Mon nom est Bond, James Bond.”

placesDejaVendues = "150"
placesDejaVendues += "10"
console.log(placesDejaVendues)

placesDejaVendues = Number("150")
placesDejaVendues += Number("10")
console.log(placesDejaVendues)


let livres = 500
livres += 50
livres -= 10
livres +=5
let affichageTotalLivres = "Notre bibliothèque possède "
affichageTotalLivres += livres
affichageTotalLivres += " livres. "
console.log(affichageTotalLivres)

