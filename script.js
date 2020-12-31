const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
const time = document.querySelector('.time')
const date = document.querySelector('.date')
const dark = document.querySelector('.toggle')
const html = document.querySelector('html')

getTime()

function getTime() {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const currentMonth = monthNames[new Date().getMonth()]
  const monthDay = new Date().getDate()
  const currentDay = days[new Date().getDay()]
  let currentHour = new Date().getHours() == 0 ? 12 : new Date().getHours()
  const currentMinute = new Date().getMinutes()
  const currentSecond = new Date().getSeconds()
  const ampm = currentHour > 12 ? 'PM' : 'AM'

  hour.style.transition = `${currentHour === 0 ? 'none' : ''}`
  minute.style.transition = `${currentMinute === 0 ? 'none' : ''}`
  second.style.transition = `${currentSecond === 0 ? 'none' : ''}`

  currentHour = currentHour % 12
  time.innerText =
    currentMinute < 10
      ? `${currentHour}:0${currentMinute} ${ampm}`
      : `${currentHour}:${currentMinute} ${ampm}`
  date.innerHTML = `${currentDay}, ${currentMonth} <span class="circle">${monthDay}</span>`

  second.style.transform = `translate(-50%,-100%) rotate(${
    6 * currentSecond
  }deg)`
  minute.style.transform = `translate(-50%,-100%) rotate(${
    6 * currentMinute
  }deg)`
  hour.style.transform = `translate(-50%,-100%) rotate(${30 * currentHour}deg)`

  setTimeout(getTime, 500)
}

dark.addEventListener('click', () => {
  html.classList.toggle('dark')
})
