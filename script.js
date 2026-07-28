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


const gameStartScreen = document.querySelector('.game-start')
const gamePlayingScreen = document.querySelector('.game-begin')


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
const messageBlock = document.getElementById('message-p')


const heroVisit2 = document.querySelector('.hero-2-visit')
const heroNotCured2 = document.querySelector('.hero-not-cured-2')
const heroCured2 = document.querySelector('.hero-2-cured')

const gameEndsContainer = document.querySelector('.game-ends')
const gameEndsButton = document.querySelector('.game-ends-button')


if ((getComputedStyle(gamePlayingScreen)).display === 'none') {
    gameStartScreen.style.display = 'flex'
}

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
        // galoperidolButton.removeEventListener('click', galoperidolButtonClick)
        // psyhotherapyButton.removeEventListener('click', psyhotherapyButtonClick)
        // gif animation was here
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
            gameEnds()
        }, 4000)
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
        galoperidolButton.removeEventListener('click', galoperidolButtonClick)
        // psyhotherapyButton.removeEventListener('click', psyhotherapyButtonClick)
        // gif animation was here
        setTimeout(() => {
            heroCured2.classList.remove('hero-2-cured')
            heroCured2.classList.add('hero-2-cured-moved')
        }, 1000)
        setTimeout(() => {
            gameEnds()
        }, 4000)
    }
    function psyhotherapyButtonClick() {
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
        galoperidolButton.removeEventListener('click', galoperidolButtonClick)
        psyhotherapyButton.removeEventListener('click', psyhotherapyButtonClick)
        // gif animation was here
        setTimeout(() => {
            heroCured2.classList.remove('hero-2-cured')
            heroCured2.classList.add('hero-2-cured-moved')
        }, 1000)
        setTimeout(() => {
            gameEnds()
        }, 4000)
    }
    antidepressantsButton.addEventListener('click', antidepressantsButtonClick)
    galoperidolButton.addEventListener('click', galoperidolButtonClick)
    psyhotherapyButton.addEventListener('click', psyhotherapyButtonClick)
}

function startGameButtonActive() {
    startGameButtonSound.play()
    setTimeout(() => {
        gameStartScreen.style.display = 'none'
        gamePlayingScreen.style.display = 'flex'
    }, 0)
    firstScenario()
}

function gameEnds() {
    gamePlayingScreen.style.display = 'none'
    startGameButton.style.display = 'none'
    gameStartScreen.style.display = 'flex'
    gameEndsContainer.style.display = 'block'
    gameEndsButton.addEventListener('click', () => {
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
