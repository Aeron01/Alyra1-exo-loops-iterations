// Ecrivez un programme qui affiche la somme de tous les nombres présents dans ce tableau(qui contient des tableaux)

let tab = [
  [1, 2, 3],
  [4, -5, 7],
  [-3, -6],
  [10, -13],
]

for (let i = 0; i < tab.length; ++i) {
  console.log(`Sommes tableau ${i + 1}:`)
  console.log(`${tab[i].reduce((a, b) => a + b, 0)}\n`)
}
