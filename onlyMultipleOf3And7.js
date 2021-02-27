/* En vous inspirant de l'un des exemple du cours d'aujourd'hui sur les boucles, écrire un programme
qui n'affiche que les multiples de 3 et 7 entre 1 et 1000. L'opérateur % peut vous aider à trouver
si un nombre est multiple d'un autre. */


for (let i = 1; i <= 1000; ++i) {
  if (i % 3 && i % 7) {
    continue
  }
  console.log(i)
}