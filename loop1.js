// Avec une boucle while afficher les éléments du tableau suivant, ligne par ligne:

let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let i = 0
while (i <= 9) {
  console.log(tab[i])
  i++
}

// ou cette solution

console.log(`\t`)
let tab2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let i2 = 0
while (i2 < tab2.length) {
  console.log(tab[i2])
  i2++
}