// SOUNDS

const playButtonsSound = new Audio('./assets/sounds/play-buttons.mp3')
const startGameButtonSound = new Audio('./assets/sounds/start-game-button.mp3')
const messageSound = new Audio('./assets/sounds/message.mp3')
const typingSound = new Audio('./assets/sounds/typing2.mp3')
const stepsSound = new Audio('./assets/sounds/footsteps.mp3')
const minusHeart = new Audio('./assets/sounds/minusHeart.mp3')
const healedIconSound = new Audio('./assets/sounds/healedIcon.mp3')
const ghostSound = new Audio('./assets/sounds/ghostSound.mp3')
const ambulanceSound = new Audio('./assets/sounds/ambulance.mp3')
const menuMusic = new Audio('./assets/sounds/menu-music.mp3')
const thinkingMusic = new Audio('./assets/sounds/thinking-music.mp3')
const explosionSound = new Audio('./assets/sounds/explosion.mp3')
const machinegunSound = new Audio('./assets/sounds/machinegun.mp3')
const endGameMusic = new Audio('./assets/sounds/EndGame.mp3')

const gameStartScreen = document.querySelector('.game-start')
const gameStartHeading = document.querySelector('.game-start-heading')
const gameStartP = document.querySelector('.game-start-p')
const gamePlayingScreen = document.querySelector('.game-begin')

const gameResultsContainer = document.querySelector('.game-results-container')
const gameResultsP = document.querySelector('.game-result-p')


const tableAsset = document.getElementById('table')
const interactiveContainer = document.querySelector('.interactive-container')
const heartsContainer = document.querySelector('.hearts-container')

const heart = document.querySelector('.heart')
const hearts = document.querySelectorAll('.heart')

const healedIcons = document.querySelectorAll('.healed-icon')
const skullIcons = document.querySelectorAll('.not-healed-icon')

const heroVisit = document.querySelector('.hero-visit')
const heroCured = document.querySelector('.hero-cured')
const heroNotCured = document.querySelector('.hero-not-cured')

const successGif = document.querySelector('.succes-bg')
const failGif = document.querySelector('.fail-bg')

const messageContainer = document.querySelector('.message-container')

const textHeroOne = 'Я ничего не хочу. Меня ничего не радует. Мне стыдно, что я не могу взять себя в руки и не хватает сил даже помыть посуду или убраться в комнате...'
const textHeroTwo = 'За мной тайно следит правительство, они что-то замышляют, нам надо захватить парламент! Вы понимаете меня, доктор?'
const textHeroThree = 'У меня постоянно панические атаки, ничего не помогает, я не могу спать, боюсь за здоровье и кучу всего!'
const textHeroForth = 'ААА!!! На меня напали инопланетяне, я должен дать отпор! Ммне нужно купить оружие, но сказали прийти к вам за справкой сначала! ВЫПИШИТЕ?!?!?'
const textHeroFifth = 'Что-то меня не радует больше ничего, эмоции совсем не испытываю, мой психолог сказал, чтобы вы мне что-то выписали'
const messageBlock = document.getElementById('message-p')


const heroVisit2 = document.querySelector('.hero-2-visit')
const heroNotCured2 = document.querySelector('.hero-not-cured-2')
const heroCured2 = document.querySelector('.hero-2-cured')

const heroVisit3 = document.querySelector('.hero-3-visit')
const heroCured3 = document.querySelector('.hero-3-cured')
const heroNotCured3 = document.querySelector('.hero-3-not-cured')

const heroVisit4 = document.querySelector('.hero-4-visit')
const heroCured4 = document.querySelector('.hero-4-cured')
const heroNotCured4 = document.querySelector('.hero-4-not-cured')
const explosionGif = document.querySelector('.explosion')

const heroVisit5 = document.querySelector('.hero-5-visit')
const heroNotCured5 = document.querySelector('.hero-5-not-cured')
const heroCured5 = document.querySelector('.hero-5-cured')

const gameEndsContainer = document.querySelector('.game-ends')
const gameEndsButton = document.querySelector('.game-ends-button')


const notHealedContainer = document.querySelector('.icons-not-healed-container')
const healedContainer = document.querySelector('.icons-healed-container')
let curedPatients = 0
let notCuredPatients = 0


menuMusic.play()

const startGameButton = document.getElementById('start-game-button')

function typing(text) {
    let result = ''
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            result += text[i]
            messageBlock.textContent = result
        }, i * 35)
    }
}

heroVisit.addEventListener('click', () => {
    const mehSound = new Audio('./assets/sounds/meh.mp3')
    mehSound.play()
    heroVisit.classList.remove('show-up')
    heroVisit.classList.add('shake')
    setTimeout(() => {
        heroVisit.classList.remove('shake');
    }, 400);
})


function successGigAnimation() {
    successGif.style.display = 'block'
    setTimeout(() => {
        successGif.style.display = 'none';
    }, 2000)
}
function failGifAnimation() {
    failGif.style.display = 'block'
    setTimeout(() => {
        failGif.style.display = 'none'
    }, 3000)
}

function firstScenario() {
    gameStartHeading.style.display = 'none'
    gameStartP.style.display = 'none'
    thinkingMusic.sound = 0.6
    setTimeout(() => {
        thinkingMusic.play()
    }, 800)

    stepsSound.play()
    heroVisit.style.display = 'block'
    heroVisit.classList.add('show-up')
    setTimeout(() => {
        messageContainer.style.display = 'block'
    }, 500)
    typing(textHeroOne)
    setTimeout(() => {
        typingSound.play()
    }, 1000)


    function antidepressantsButtonClick() {
        endGameMusic.pause()
        typingSound.pause()
        messageContainer.style.display = 'none';
        heroVisit.style.display = 'none';
        heroCured.style.display = 'block';
        heroNotCured.style.display = 'none'
        const successSound = new Audio('./assets/sounds/success.mp3')
        successSound.play()
        antidepressantsButton.removeEventListener('click', antidepressantsButtonClick)
        galoperidolButton.removeEventListener('click', galoperidolButtonClick)
        psyhotherapyButton.removeEventListener('click', psyhotherapyButtonClick)
        successGigAnimation()
        thinkingMusic.pause()
        setTimeout(() => {
            healedIconSound.play()
            healedIcons[0].style.display = 'block';

        }, 1000)
        setTimeout(() => {
            heroCured.classList.remove('hero-cured')
            heroCured.classList.add('heroCured-moved')
        }, 1000)
        setTimeout(() => {
            secondScenario()
        }, 2000)

    }
    function galoperidolButtonClick() {
        typingSound.pause()
        messageContainer.style.display = 'none';
        heroNotCured.style.display = 'block'
        heroVisit.style.display = 'none';
        heroCured.style.display = 'none';
        const failSound = new Audio('./assets/sounds/fail.mp3')
        failSound.play()
        galoperidolButton.removeEventListener('click', galoperidolButtonClick)
        antidepressantsButton.removeEventListener('click', antidepressantsButtonClick)
        psyhotherapyButton.removeEventListener('click', psyhotherapyButtonClick)
        thinkingMusic.pause()
        setTimeout(() => {
            failGifAnimation()
            ghostSound.play()
        }, 500)
        setTimeout(() => {
            minusHeart.play()
            heartsContainer.lastElementChild?.remove();
            skullIcons[0].style.display = 'block';
        }, 1000)
        setTimeout(() => {
            heroNotCured.classList.remove('hero-not-cured')
            heroNotCured.classList.add('hero-not-cured-move')
        }, 1000)
        setTimeout(() => {
            secondScenario()
        }, 2000)
    }

    function psyhotherapyButtonClick() {
        typingSound.pause()
        messageContainer.style.display = 'none';
        heroVisit.style.display = 'none';
        heroCured.style.display = 'block';
        heroNotCured.style.display = 'none'
        const successSound = new Audio('./assets/sounds/success.mp3')
        successSound.play()
        psyhotherapyButton.removeEventListener('click', psyhotherapyButtonClick)
        galoperidolButton.removeEventListener('click', galoperidolButtonClick)
        antidepressantsButton.removeEventListener('click', antidepressantsButtonClick)
        thinkingMusic.pause()
        successGigAnimation()
        setTimeout(() => {
            healedIconSound.play()
            healedIcons[0].style.display = 'block';
        }, 1000)
        setTimeout(() => {
            heroCured.classList.remove('hero-cured')
            heroCured.classList.add('heroCured-moved')
        }, 1000)
        setTimeout(() => {
            secondScenario()
        }, 2000)

    }
    antidepressantsButton.addEventListener('click', antidepressantsButtonClick)
    galoperidolButton.addEventListener('click', galoperidolButtonClick)
    psyhotherapyButton.addEventListener('click', psyhotherapyButtonClick)

}

function secondScenario() {
    thinkingMusic.sound = 0.6
    setTimeout(() => {
        thinkingMusic.play()
    }, 800)


    stepsSound.play()
    heroVisit2.style.display = 'block'
    heroVisit2.classList.add('show-up')
    setTimeout(() => {
        messageContainer.style.display = 'block'
    }, 500)
    typing(textHeroTwo)
    setTimeout(() => {
        typingSound.play()
    }, 1000)

    function antidepressantsButtonClick() {
        typingSound.pause()
        messageContainer.style.display = 'none';
        heroVisit2.style.display = 'none';
        heroCured2.style.display = 'none';
        heroNotCured2.style.display = 'block'
        const failSound = new Audio('./assets/sounds/fail.mp3')
        failSound.play()
        antidepressantsButton.removeEventListener('click', antidepressantsButtonClick)
        galoperidolButton.removeEventListener('click', galoperidolButtonClick)
        psyhotherapyButton.removeEventListener('click', psyhotherapyButtonClick)
        thinkingMusic.pause()
        heroNotCured2.classList.add('shake')
        setTimeout(() => {
            heroNotCured2.classList.remove('shake');
        }, 400);
        setTimeout(() => {
            minusHeart.play()
            heartsContainer.lastElementChild?.remove();
            skullIcons[1].style.display = 'block';
        }, 800)
        setTimeout(() => {
            ambulanceSound.play()
        }, 1000)
        setTimeout(() => {
            heroNotCured2.classList.remove('hero-not-cured-2')
            heroNotCured2.classList.add('hero-not-cured-2-moved')
        }, 1000)
        setTimeout(() => {
            thirdScenario()
        }, 2000)
    }
    function galoperidolButtonClick() {
        typingSound.pause()
        messageContainer.style.display = 'none';
        heroVisit2.style.display = 'none';
        heroCured2.style.display = 'block';
        heroNotCured2.style.display = 'none'
        const successSound = new Audio('./assets/sounds/success.mp3')
        successSound.play()
        successGigAnimation()
        setTimeout(() => {
            healedIconSound.play()
            healedIcons[1].style.display = 'block';
        }, 1000)
        antidepressantsButton.removeEventListener('click', antidepressantsButtonClick)
        psyhotherapyButton.removeEventListener('click', psyhotherapyButtonClick)
        galoperidolButton.removeEventListener('click', galoperidolButtonClick)
        thinkingMusic.pause()
        setTimeout(() => {
            heroCured2.classList.remove('hero-2-cured')
            heroCured2.classList.add('hero-2-cured-moved')
        }, 1000)
        setTimeout(() => {
            thirdScenario()
        }, 2000)
    }
    function psyhotherapyButtonClick() {
        typingSound.pause()
        messageContainer.style.display = 'none';
        heroVisit2.style.display = 'none';
        heroCured2.style.display = 'block';
        heroNotCured2.style.display = 'none'
        thinkingMusic.pause()
        const successSound = new Audio('./assets/sounds/success.mp3')
        successSound.play()
        successGigAnimation()
        setTimeout(() => {
            healedIconSound.play()
            healedIcons[1].style.display = 'block';
        }, 1000)
        antidepressantsButton.removeEventListener('click', antidepressantsButtonClick)
        galoperidolButton.removeEventListener('click', galoperidolButtonClick)
        psyhotherapyButton.removeEventListener('click', psyhotherapyButtonClick)
        setTimeout(() => {
            heroCured2.classList.remove('hero-2-cured')
            heroCured2.classList.add('hero-2-cured-moved')
        }, 1000)
        setTimeout(() => {
            thirdScenario()
        }, 2000)
    }
    antidepressantsButton.addEventListener('click', antidepressantsButtonClick)
    galoperidolButton.addEventListener('click', galoperidolButtonClick)
    psyhotherapyButton.addEventListener('click', psyhotherapyButtonClick)
}

function thirdScenario() {

    thinkingMusic.sound = 0.6
    setTimeout(() => {
        thinkingMusic.play()
    }, 800)


    stepsSound.play()
    heroVisit3.style.display = 'block'
    heroVisit3.classList.add('show-up')
    setTimeout(() => {
        messageContainer.style.display = 'block'
    }, 500)
    typing(textHeroThree)
    setTimeout(() => {
        typingSound.play()
    }, 1000)
    function antidepressantsButtonClick() {
        typingSound.pause()
        messageContainer.style.display = 'none';
        heroVisit3.style.display = 'none';
        heroCured3.style.display = 'block';
        heroNotCured3.style.display = 'none'
        thinkingMusic.pause()
        const successSound = new Audio('./assets/sounds/success.mp3')
        successSound.play()
        successGigAnimation()
        setTimeout(() => {
            healedIconSound.play()
            healedIcons[2].style.display = 'block';
        }, 1000)
        setTimeout(() => {
            heroCured3.classList.remove('hero-3-cured')
            heroCured3.classList.add('hero-3-Cured-moved')
        }, 1000)
        setTimeout(() => {
            forthScenario()
        }, 2000)

        antidepressantsButton.removeEventListener('click', antidepressantsButtonClick)
        galoperidolButton.removeEventListener('click', galoperidolButtonClick)
        psyhotherapyButton.removeEventListener('click', psyhotherapyButtonClick)

    }
    function galoperidolButtonClick() {
        typingSound.pause()
        messageContainer.style.display = 'none';
        heroVisit3.style.display = 'none';
        heroCured3.style.display = 'none';
        heroNotCured3.style.display = 'block'
        thinkingMusic.pause()
        const failSound = new Audio('./assets/sounds/fail.mp3')
        failSound.play()
        setTimeout(() => {
            failGifAnimation()
            ghostSound.play()
        }, 500)
        setTimeout(() => {
            minusHeart.play()
            heartsContainer.lastElementChild?.remove();
            skullIcons[2].style.display = 'block';
        }, 1000)
        setTimeout(() => {
            heroNotCured3.classList.remove('hero-3-not-cured')
            heroNotCured3.classList.add('hero-3-not-cured-move')
        }, 1000)
        setTimeout(() => {
            forthScenario()
        }, 2000)
        antidepressantsButton.removeEventListener('click', antidepressantsButtonClick)
        galoperidolButton.removeEventListener('click', galoperidolButtonClick)
        psyhotherapyButton.removeEventListener('click', psyhotherapyButtonClick)

    }
    function psyhotherapyButtonClick() {
        typingSound.pause()
        messageContainer.style.display = 'none';
        heroVisit3.style.display = 'none';
        heroCured3.style.display = 'block';
        heroNotCured3.style.display = 'none'
        thinkingMusic.pause()
        const successSound = new Audio('./assets/sounds/success.mp3')
        successSound.play()
        successGigAnimation()
        setTimeout(() => {
            healedIconSound.play()
            healedIcons[2].style.display = 'block';
        }, 1000)
        setTimeout(() => {
            heroCured3.classList.remove('hero-3-cured')
            heroCured3.classList.add('hero-3-Cured-moved')
        }, 1000)
        setTimeout(() => {
            forthScenario()
        }, 2000)
        antidepressantsButton.removeEventListener('click', antidepressantsButtonClick)
        galoperidolButton.removeEventListener('click', galoperidolButtonClick)
        psyhotherapyButton.removeEventListener('click', psyhotherapyButtonClick)

    }

    antidepressantsButton.addEventListener('click', antidepressantsButtonClick)
    galoperidolButton.addEventListener('click', galoperidolButtonClick)
    psyhotherapyButton.addEventListener('click', psyhotherapyButtonClick)
}

function forthScenario() {
    thinkingMusic.sound = 0.6
    setTimeout(() => {
        thinkingMusic.play()
    }, 800)


    stepsSound.play()
    heroVisit4.style.display = 'block'
    heroVisit4.classList.add('show-up')
    setTimeout(() => {
        messageContainer.style.display = 'block'
    }, 500)
    typing(textHeroForth)
    setTimeout(() => {
        typingSound.play()
    }, 1000)
    function antidepressantsButtonClick() {
        explosionGif.style.display = 'block'
        setTimeout(() => {
            explosionGif.style.display = 'none'
        }, 1600)
        explosionSound.play()
        machinegunSound.play()
        typingSound.pause()
        messageContainer.style.display = 'none';
        heroVisit4.style.display = 'none';
        heroCured4.style.display = 'none';
        heroNotCured4.style.display = 'block'
        thinkingMusic.pause()
        const failSound = new Audio('./assets/sounds/fail.mp3')
        failSound.play()
        heroNotCured4.classList.add('shake')
        antidepressantsButton.removeEventListener('click', antidepressantsButtonClick)
        galoperidolButton.removeEventListener('click', galoperidolButtonClick)
        psyhotherapyButton.removeEventListener('click', psyhotherapyButtonClick)
        setTimeout(() => {
            heroNotCured4.classList.remove('shake');
        }, 400);
        setTimeout(() => {
            minusHeart.play()
            heartsContainer.lastElementChild?.remove();
            skullIcons[3].style.display = 'block';
        }, 1000)
        setTimeout(() => {
            heroNotCured4.classList.remove('hero-4-not-cured')
            heroNotCured4.classList.add('hero-4-not-cured-move')
        }, 1000)
        setTimeout(() => {
            fifthScenarion()
        }, 2000)

    }
    function galoperidolButtonClick() {
        typingSound.pause()
        messageContainer.style.display = 'none';
        heroVisit4.style.display = 'none';
        heroCured4.style.display = 'block';
        heroNotCured4.style.display = 'none'
        const successSound = new Audio('./assets/sounds/success.mp3')
        successSound.play()
        successGigAnimation()
        antidepressantsButton.removeEventListener('click', antidepressantsButtonClick)
        galoperidolButton.removeEventListener('click', galoperidolButtonClick)
        psyhotherapyButton.removeEventListener('click', psyhotherapyButtonClick)
        setTimeout(() => {
            healedIconSound.play()
            healedIcons[3].style.display = 'block';
        }, 1000)
        thinkingMusic.pause()
        setTimeout(() => {
            heroCured4.classList.remove('hero-4-cured')
            heroCured4.classList.add('hero-4-cured-moved')
        }, 1000)
        setTimeout(() => {
            fifthScenarion()
        }, 2000)
    }
    function psyhotherapyButtonClick() {
        explosionGif.style.display = 'block'
        setTimeout(() => {
            explosionGif.style.display = 'none'
        }, 800)
        explosionSound.play()
        machinegunSound.play()
        typingSound.pause()
        messageContainer.style.display = 'none';
        heroVisit4.style.display = 'none';
        heroCured4.style.display = 'none';
        heroNotCured4.style.display = 'block'
        thinkingMusic.pause()
        const failSound = new Audio('./assets/sounds/fail.mp3')
        failSound.play()
        heroNotCured4.classList.add('shake')
        antidepressantsButton.removeEventListener('click', antidepressantsButtonClick)
        galoperidolButton.removeEventListener('click', galoperidolButtonClick)
        psyhotherapyButton.removeEventListener('click', psyhotherapyButtonClick)
        setTimeout(() => {
            heroNotCured4.classList.remove('shake');
        }, 400);
        setTimeout(() => {
            minusHeart.play()
            heartsContainer.lastElementChild?.remove();
            skullIcons[3].style.display = 'block';
        }, 1000)
        setTimeout(() => {
            heroNotCured4.classList.remove('hero-4-not-cured')
            heroNotCured4.classList.add('hero-4-not-cured-move')
        }, 1000)
        setTimeout(() => {
            fifthScenarion()
        }, 2000)
    }
    psyhotherapyButton.addEventListener('click', psyhotherapyButtonClick)
    galoperidolButton.addEventListener('click', galoperidolButtonClick)
    antidepressantsButton.addEventListener('click', antidepressantsButtonClick)
}

function fifthScenarion() {
    thinkingMusic.sound = 0.6
    setTimeout(() => {
        thinkingMusic.play()
    }, 800)


    stepsSound.play()
    heroVisit5.style.display = 'block'
    heroVisit5.classList.add('show-up')
    setTimeout(() => {
        messageContainer.style.display = 'block'
    }, 500)
    typing(textHeroFifth)
    setTimeout(() => {
        typingSound.play()
    }, 1000)
    function antidepressantsButtonClick() {
        typingSound.pause()
        messageContainer.style.display = 'none';
        heroVisit5.style.display = 'none';
        heroCured5.style.display = 'block';
        heroNotCured5.style.display = 'none'
        thinkingMusic.pause()
        const successSound = new Audio('./assets/sounds/success.mp3')
        successSound.play()
        successGigAnimation()
        setTimeout(() => {
            healedIconSound.play()
            healedIcons[4].style.display = 'block';
        }, 1000)
        setTimeout(() => {
            heroCured5.classList.remove('hero-5-cured')
            heroCured5.classList.add('hero-5-Cured-moved')
        }, 1000)
        setTimeout(() => {
            gameEnds()
        }, 4000)
    }
    function galoperidolButtonClick() {
        typingSound.pause()
        messageContainer.style.display = 'none';
        heroVisit5.style.display = 'none';
        heroCured5.style.display = 'none';
        heroNotCured5.style.display = 'block'
        thinkingMusic.pause()
        const failSound = new Audio('./assets/sounds/fail.mp3')
        failSound.play()
        setTimeout(() => {
            failGifAnimation()
            ghostSound.play()
        }, 500)
        setTimeout(() => {
            minusHeart.play()
            heartsContainer.lastElementChild?.remove();
            skullIcons[4].style.display = 'block';
        }, 1000)
        setTimeout(() => {
            heroNotCured5.classList.remove('hero-5-not-cured')
            heroNotCured5.classList.add('hero-5-not-cured-move')
        }, 1000)
        setTimeout(() => {
            gameEnds()
        }, 4000)
    }
    function psyhotherapyButtonClick() {
        typingSound.pause()
        messageContainer.style.display = 'none';
        heroVisit5.style.display = 'none';
        heroCured5.style.display = 'block';
        heroNotCured5.style.display = 'none'
        thinkingMusic.pause()
        const successSound = new Audio('./assets/sounds/success.mp3')
        successSound.play()
        successGigAnimation()
        setTimeout(() => {
            healedIconSound.play()
            healedIcons[4].style.display = 'block';
        }, 1000)
        setTimeout(() => {
            heroCured5.classList.remove('hero-5-cured')
            heroCured5.classList.add('hero-5-Cured-moved')
        }, 1000)
        setTimeout(() => {
            gameEnds()
        }, 4000)
    }
    psyhotherapyButton.addEventListener('click', psyhotherapyButtonClick)
    galoperidolButton.addEventListener('click', galoperidolButtonClick)
    antidepressantsButton.addEventListener('click', antidepressantsButtonClick)
}

function startGameButtonActive() {
    menuMusic.pause()
    startGameButtonSound.play()
    setTimeout(() => {
        gameStartScreen.style.display = 'none'
        gamePlayingScreen.style.display = 'flex'
    }, 0)
    firstScenario()
}



function gameEnds() {
    endGameMusic.play()
    Object.values(notHealedContainer.children).filter(img => img.style.display == 'block' ? notCuredPatients += 1 : console.log(''))
    Object.values(healedContainer.children).filter(img => img.style.display == 'block' ? curedPatients += 1 : console.log(''))
    console.log(curedPatients, notCuredPatients)
    let grades = curedPatients * 100 / 5
    let resultText = `Ты вылечил ${curedPatients} пациентов, не фартануло ${notCuredPatients} пациентам, ты прошел игру на ${grades}%!`
    gamePlayingScreen.style.display = 'none'
    startGameButton.style.display = 'none'
    gameStartScreen.style.backgroundImage = 'url("./assets/background-ending.gif")';
    gameStartScreen.style.display = 'flex'
    gameEndsContainer.style.display = 'block'
    gameResultsContainer.style.display = 'block'
    gameResultsP.textContent = resultText
    gameEndsButton.addEventListener('click', () => {
        playButtonsSound.play();
        location.reload();
    })
}

startGameButton.addEventListener('click', startGameButtonActive)

tableAsset.style.display = 'block';
interactiveContainer.style.display = 'flex';
heartsContainer.style.display = 'flex';

const antidepressantsButton = document.getElementById('antidepressant-button')
const psyhotherapyButton = document.getElementById('psyhotherapy-button')
const galoperidolButton = document.getElementById('galoperidol-button')

let currentPatient = textHeroOne;


const playAgainButton = document.getElementById('play-again')

function playAgainButtonActive() {
    startGameButtonSound.play()
    setTimeout(() => {
        location.reload();
        gameStartScreen.style.display = 'flex'
        gamePlayingScreen.style.display = 'none'
    }, 500)
}

playAgainButton.addEventListener('click', playAgainButtonActive)
