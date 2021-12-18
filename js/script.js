const left = document.querySelectorAll('.anim_left');

observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim_left 2s forwards ease-out`;
        } else {
            entry.target.style.animation = `none`;
        }

    })

})

left.forEach(image => {
    observer.observe(image)

})


const right = document.querySelectorAll('.anim_right');

observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim_right 2s forwards ease-out`;
        } else {
            entry.target.style.animation = `none`;
        }

    })

})

right.forEach(image => {
    observer.observe(image)

})


const straight = document.querySelectorAll('.anim_straight');

observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim_straight 3s forwards ease-out`;
        } else {
            entry.target.style.animation = `none`;
        }

    })

})

straight.forEach(image => {
    observer.observe(image)

})