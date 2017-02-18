function changeColor() {
  $(`#${randomId()}`).toggleClass("blue")
}
function randomId() {
  return Math.ceil(Math.random()*9)
}
