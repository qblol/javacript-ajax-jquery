function randomId() {
  return Math.ceil(Math.random()*9)
}
function getColor() {
  $.ajax({
    url: 'http://localhost:3000/api/colors',
    type: 'GET',
    success: function(result) {
      $(`#${randomId()}`).attr('class', `card ${result}`)
    }
  })
}
