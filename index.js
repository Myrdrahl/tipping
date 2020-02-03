function calculateService () {
  let service = document.getElementById('service')
  let selected = service.options[service.selectedIndex].value
  console.log(selected)
  return selected
}

function getBill () {
  let bill = document.getElementById('bill').value
  return bill
}
function sharing () {
  let share = document.getElementById('sharing').value
  return share
}

let submit = document.getElementById('submit')
submit.addEventListener('click', function () {
  let service = calculateService()
  let bill = getBill()
  let share = sharing()
  let page2 = document.getElementById('notFull')
  if (bill > 0 && share > 0) {
    let page = document.getElementById('full')
    page2.innerText = ''
    page.innerText = 'Your share of the bill is: ' + ((bill / share) * service)
  } else {
    page2.innerText = 'You must enter valid numbers!'
  }
})
