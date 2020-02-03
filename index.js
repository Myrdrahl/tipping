function calculateService () {
  let service = document.getElementById('service')
  let selected = service.options[service.selectedIndex].value
  console.log(selected)
  return selected
}

function getBill () {
  let billing = document.getElementById('bill')
  bill = billing.value
  return bill
}
function sharing () {
  let sharing = document.getElementById('sharing')
  share = sharing.value
  return share
}

let submit = document.getElementById('submit')
submit.addEventListener('click', function () {
  let service = calculateService()
  let bill = getBill()
  let share = sharing()
  console.log('Your share is: ' + ((bill / share) * service))
  let page = document.getElementById('full')
  page.innerText = ''
  page.innerText = 'Your share of the bill is: ' + ((bill / share) * service)
})
