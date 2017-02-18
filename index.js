function magic () {
  $.ajax({
    url: 'http://localhost:3000/color',
    type: 'GET'
  }).done(function (data) {
    let boxes = Math.floor((Math.random() * 8) + 0)

    let value = document.getElementsByClassName('col')

    value[boxes].className = data.result
  }).fail(function (err) {
    console.log(err)
  })
}
