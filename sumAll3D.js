let tab = [
  [
    [1, 7, 3],
    [11, 17, 7],
    [-3, -5],
    [5, 13],
  ],
  [
    [2, 4, 6, 8, 10],
    [1, 3, 5],
  ],
  [[0]],
  [[0], [1], [2], [1]],
]


for (let i = 0; i < tab.length; ++i) {
  console.log(`tableau ${i + 1}:`)
  for (let j = 0; j < tab[i].length; ++j) {
    console.log(`Sommes sous tableau ${j + 1}:`)
    console.log(`${tab[i][j].reduce((a, b) => a + b, 0)}\n`)
  }
}
