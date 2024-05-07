const grid = document.querySelector('.grid')
let difficulty = 9

for (let i = 0; i < difficulty; i++) {
  const div = document.createElement('div')
  grid.append(div)
  div.setAttribute('id', i)
  div.setAttribute('class', 'square')
}
