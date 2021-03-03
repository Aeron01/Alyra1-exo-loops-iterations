/* En vous inspirant de l'un des exemple du cours d'aujourd'hui sur les boucles, écrire un programme
qui n'affiche que les multiples de 3 et 7 entre 1 et 1000. L'opérateur % peut vous aider à trouver
si un nombre est multiple d'un autre. */


for (let i = 1; i <= 1000; ++i) {
  if (i % 3 === 0 && i % 7 === 0) {
    continue
  }
  console.log(i)
}


// Autre solution plus longue
console.log(`\n\n\n`)

for (let i2 = 1; i2 <= 1000; ++i2) {
  if (i2 % 3) {
    continue
  }
  console.log(`Multiple de 3 : ${i2}`)
}
console.log(`\n`)

for (let i3 = 1; i3 <= 1000; ++i3) {
  if (i3 % 7) {
    continue
  }
  console.log(`Multiple de 7 : ${i3}`)
}