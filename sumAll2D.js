// Ecrivez un programme qui affiche la somme de tous les nombres présents dans ce tableau(qui contient des tableaux)

let tab = [
  [1, 2, 3],
  [4, -5, 7],
  [-3, -6],
  [10, -13],
]

/* ma solution (qui est fausse)
for (let i = 0; i < tab.length; ++i) {
  console.log(`Sommes tableau ${i + 1}:`)
  console.log(`${tab[i].reduce((a, b) => a + b, 0)}\n`)
}*/

//  correction
let sum = 0
for (let i = 0; i < tab.length; ++i) {
  for (let j = 0; j < tab[i].length; ++j) {
    sum += tab[i][j]
  }

}

console.log(`sum = ${sum}`)