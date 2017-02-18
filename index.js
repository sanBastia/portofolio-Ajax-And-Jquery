function magic () {
  let boxes = Math.floor((Math.random() * 8) + 0)
  let rnd = Math.floor((Math.random() * 5) + 0)
  let color = ['col s4 red darken-2', 'col s4 purple darken-4', 'col s4 blue lighten-3', 'col s4 lime darken-4', 'col s4 brown lighten-3', 'col s4 deep-orange darken-1']
  let value = document.getElementsByClassName('col')

  value[boxes].className = color[rnd]
}
