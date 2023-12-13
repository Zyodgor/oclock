const hour = document.querySelector('.h')
min = document.querySelector('.m')
sec = document.querySelector('.s')
hoursNumber = document.querySelector('.hours')
minutesNumber = document.querySelector('.minutes')


function clock() {
    let time = new Date()
    let second = time.getSeconds() * 6
    let minute = time.getMinutes() * 6
    let hours = time.getHours() * 30

    hoursNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minutesNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()

    sec.animate([{
            transform: `rotate(${second}deg)`
        },
        {
            transform: `rotate(${second + 6}deg)`
        }
    ], {
        fill: 'forwards',
        duration: 1000,
        easing: 'linear'
    })

    hour.style = `transform: rotate(${(hours) + (minute / 12)}deg)`
    min.style = `transform: rotate(${(minute) + (second / 60)}deg)`

    setTimeout(() => clock(), 1000)
}
clock()


// const tabsLink = document.querySelectorAll('.tabsItem'),
//       tabsContent = document.querySelectorAll('.tabsContentItem')

// for (let i = 0; i < tabsLink.length; i++) {
//      tabsLink[i].addEventListener('click', function (e) {
//         e.preventDefault()
//         for (let k = 0; k < tabsLink.length; k++) {
//             tabsLink[k].classList.remove('active')
//             tabsContent[k].classList.remove('active')
//         }
//         this.classList.add('active')
//         tabsContent[i].classList.add('active')
//      })   

// }
const tabsLink = document.querySelectorAll('.tabsItem'),
    tabsContent = document.querySelectorAll('.tabsContentItem')

for (let i = 0; i < tabsLink.length; i++) {
    tabsLink[i].addEventListener('click', function (e) {
        e.preventDefault()
        for (let k = 0; k < tabsLink.length; k++) {
            tabsLink[k].classList.remove('active')
            tabsContent[k].classList.remove('active')
        }
        tab(this, tabsContent[i])
    })

}

function tab(el, arr) {
    el.classList.add('active')
    arr.classList.add('active')
}


const watchBtn = document.querySelector('.stopwatch__btn'),
    stopwatch__seconds = document.querySelector('.stopwatch__seconds'),
    stopwatch__minutes = document.querySelector('.stopwatch__minutes'),
    stopwatch__hours = document.querySelector('.stopwatch__hours')

watchBtn.addEventListener('click', function () {

    if (this.innerHTML == 'start') {
        this.innerHTML = 'stop'
        let i = 0
        setTimeout(() => stopWatch(this, i), 10)

    } else if (this.innerHTML == 'stop') {
        this.innerHTML = 'clear'
    } else {
        stopwatch__seconds.innerHTML = 0
        stopwatch__minutes.innerHTML = 0
        stopwatch__hours.innerHTML = 0

        this.innerHTML = 'start'
    }
})

function stopWatch(el, i) {
    if (el.innerHTML == 'stop') {
        if (i == 59) {
            i = 0
            stopwatch__seconds.innerHTML = i
            if (stopwatch__minutes.innerHTML == 59) {
                stopwatch__minutes.innerHTML = 0
                stopwatch__hours.innerHTML++
            } else {
                stopwatch__minutes.innerHTML++
            }
        } else {
            i++
            stopwatch__seconds.innerHTML = i
        }
        setTimeout(() => stopWatch(el, i), 1000)
    }

}