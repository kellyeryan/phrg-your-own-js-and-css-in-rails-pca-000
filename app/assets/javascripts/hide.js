function hideWhenClicked(event) {
  console.log(event)
  const target = $(event.target)
  target.hide()
}

$("#hide_this").click(hideWhenClicked)

