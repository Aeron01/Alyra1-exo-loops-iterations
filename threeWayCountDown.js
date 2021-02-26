// Ecrire avec 3 boucles différentes, un décompte de 101 à 1 en décomptant de 2 en 2


console.log(`1er méthode :`)
for (let n = 101; n > 0; n -= 2) {
  console.log(n)
}


console.log(`\n\n`)
console.log(`2ème méthode :`)

for (let n2 = 101; n2 > 0; --n2) {
  if (n2 % 2)
    console.log(n2)
}

console.log(`\n\n`)
console.log(`3ème méthode :`)

let n3 = []
let inc = 101

while (inc > 0) {
  console.log(inc)
  n3.push(inc)
  inc -= 2
}

console.log(`\n\n`)
console.log(`Autre méthode :`) // mais la je triche un peut sinon cela ne marche pas.

let n4 = 103

while (n4 > 0) {
  --n4
  if (n4 % 2 === 0) {
    continue
  }
  console.log(n4)
}
