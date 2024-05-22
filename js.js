
let arr = ["❤️❤️ Wish You A Very Happy Birthday Divya ❤️❤️",
    "When I saw you at the door for the first time, I felt like you are the person I've been looking for.",
    "Even though we argue a lot, and I admit most of the time it's my fault, but having you in my life is what truly matters to me.",
    "Even if we disagree, I want you to know that I love you no matter what.",
    "Important Thing wanted to let you know that are Finger Infinite wala",
    "On your birthday, I want you to know how much you mean to me. You're not just my fiancée, but my best friend and partner in everything. Here's to another year of love, laughter, and endless adventures together. Happy Birthday!",
    "To the woman who stole my heart and continues to enchant me every day, Happy Birthday! Your beauty, grace, and kindness inspire me endlessly. I'm so grateful to have you in my life.",
    "Thankyou for Choosing me as Your life Patner.... I Still remember the day when we all are waiting for your fathers call for Acceptance Our Proposel",
    "Since the day of baithak to the last breath of my life i am yours.....FOREVER",
    "I Love you So So So So So So So So So So So So So So So So So Much Finger",
    "Wishing You Once Again Happy Birthday Wife."
]
let ele = document.getElementById("textAdd")
let i = 0
function previous() {
    i--
    if (arr[i] !== undefined) {
        let num = Math.floor(Math.random() * 9) + 1;
        document.getElementsByClassName('body')[0].style.backgroundImage = `url(./asset/${num}.jpg)`;
        ele.className = 'move-up'
        ele.innerText = arr[i]
        setTimeout(() => {
            ele.className = ''
        }, 1000);
    } else {
        i++
    }
}

function next() {
    i++
    if (arr[i] !== undefined) {
        let num = Math.floor(Math.random() * 9) + 1;
        document.getElementsByClassName('body')[0].style.backgroundImage = `url(./asset/${num}.jpg)`;
        ele.className = 'move-down'
        ele.innerText = arr[i]
        setTimeout(() => {
            ele.className = ''
        }, 1000);
    } else {
        i--
        document.getElementById('textAdd').style.display = "none"
        document.getElementsByTagName('button')[0].style.display = "none"
        document.getElementsByTagName('button')[1].style.display = "none"
        document.getElementsByClassName('body')[0].style.backgroundImage = ''
        document.getElementsByClassName('body')[0].style.backgroundcolor = 'black'
        document.getElementById('birthday').style.display = "block" 
        document.getElementById('birth').style.display = "block" 
        // helper functions
        const PI2 = Math.PI * 2
        const random = (min, max) => Math.random() * (max - min + 1) + min | 0
        const timestamp = _ => new Date().getTime()

        // container
        class Birthday {
            constructor() {
                this.resize()

                // create a lovely place to store the firework
                this.fireworks = []
                this.counter = 0

            }

            resize() {
                this.width = canvas.width = window.innerWidth
                let center = this.width / 2 | 0
                this.spawnA = center - center / 4 | 0
                this.spawnB = center + center / 4 | 0

                this.height = canvas.height = window.innerHeight
                this.spawnC = this.height * .1
                this.spawnD = this.height * .5

            }

            onClick(evt) {
                let x = evt.clientX || evt.touches && evt.touches[0].pageX
                let y = evt.clientY || evt.touches && evt.touches[0].pageY

                let count = random(3, 5)
                for (let i = 0; i < count; i++) this.fireworks.push(new Firework(
                    random(this.spawnA, this.spawnB),
                    this.height,
                    x,
                    y,
                    random(0, 260),
                    random(30, 110)))

                this.counter = -1

            }

            update(delta) {
                ctx.globalCompositeOperation = 'hard-light'
                ctx.fillStyle = `rgba(20,20,20,${7 * delta})`
                ctx.fillRect(0, 0, this.width, this.height)

                ctx.globalCompositeOperation = 'lighter'
                for (let firework of this.fireworks) firework.update(delta)

                // if enough time passed... create new new firework
                this.counter += delta * 3 // each second
                if (this.counter >= 1) {
                    this.fireworks.push(new Firework(
                        random(this.spawnA, this.spawnB),
                        this.height,
                        random(0, this.width),
                        random(this.spawnC, this.spawnD),
                        random(0, 360),
                        random(30, 110)))
                    this.counter = 0
                }

                // remove the dead fireworks
                if (this.fireworks.length > 1000) this.fireworks = this.fireworks.filter(firework => !firework.dead)

            }
        }

        class Firework {
            constructor(x, y, targetX, targetY, shade, offsprings) {
                this.dead = false
                this.offsprings = offsprings

                this.x = x
                this.y = y
                this.targetX = targetX
                this.targetY = targetY

                this.shade = shade
                this.history = []
            }
            update(delta) {
                if (this.dead) return

                let xDiff = this.targetX - this.x
                let yDiff = this.targetY - this.y
                if (Math.abs(xDiff) > 3 || Math.abs(yDiff) > 3) { // is still moving
                    this.x += xDiff * 2 * delta
                    this.y += yDiff * 2 * delta

                    this.history.push({
                        x: this.x,
                        y: this.y
                    })

                    if (this.history.length > 20) this.history.shift()

                } else {
                    if (this.offsprings && !this.madeChilds) {

                        let babies = this.offsprings / 2
                        for (let i = 0; i < babies; i++) {
                            let targetX = this.x + this.offsprings * Math.cos(PI2 * i / babies) | 0
                            let targetY = this.y + this.offsprings * Math.sin(PI2 * i / babies) | 0

                            birthday.fireworks.push(new Firework(this.x, this.y, targetX, targetY, this.shade, 0))

                        }

                    }
                    this.madeChilds = true
                    this.history.shift()
                }

                if (this.history.length === 0) this.dead = true
                else if (this.offsprings) {
                    for (let i = 0; this.history.length > i; i++) {
                        let point = this.history[i]
                        ctx.beginPath()
                        ctx.fillStyle = 'hsl(' + this.shade + ',100%,' + i + '%)'
                        ctx.arc(point.x, point.y, 1, 0, PI2, false)
                        ctx.fill()
                    }
                } else {
                    ctx.beginPath()
                    ctx.fillStyle = 'hsl(' + this.shade + ',100%,50%)'
                    ctx.arc(this.x, this.y, 1, 0, PI2, false)
                    ctx.fill()
                }

            }
        }

        let canvas = document.getElementById('birthday')
        let ctx = canvas.getContext('2d')

        let then = timestamp()

        let birthday = new Birthday
        window.onresize = () => birthday.resize()
        document.onclick = evt => birthday.onClick(evt)
        document.ontouchstart = evt => birthday.onClick(evt)

            ; (function loop() {
                requestAnimationFrame(loop)

                let now = timestamp()
                let delta = now - then

                then = now
                birthday.update(delta / 1000)


            })()
    }
}

(() => {
    // let num = Math.floor(Math.random() * 9) + 1;
    document.getElementsByClassName('body')[0].style.backgroundImage = `url(./asset/${8}.jpg)`;
    ele.innerText = arr[i]
})()