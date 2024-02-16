function updateCountdown() {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const endOfYearDate = new Date(currentYear, 11, 31, 23, 59, 59)
    const timeRemaining = endOfYearDate - currentDate
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)
    document.getElementById('days').innerHTML = days + ' days'
    document.getElementById('hours').innerHTML = hours + ' hours'
    document.getElementById('minutes').innerHTML = minutes + ' minutes'
    document.getElementById('seconds').innerHTML = seconds + ' seconds'
    setTimeout(updateCountdown, 1000)
}

updateCountdown()
const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg']

function getRandomImage() {
    const index = Math.floor(Math.random() * images.length)
    return images[index]
}

document.addEventListener('DOMContentLoaded', function () {
    const randomImage = getRandomImage();
    document.body.style.backgroundImage = 'url("' + randomImage + '")'
})