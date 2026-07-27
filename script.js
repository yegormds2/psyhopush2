// SOUNDS

const playButtonsSound = new Audio('./assets/sounds/play-buttons.mp3')
const startGameButtonSound = new Audio('./assets/sounds/start-game-button.mp3')
const messageSound = new Audio('./assets/sounds/message.mp3')
const typingSound = new Audio('./assets/sounds/typing2.mp3')
const stepsSound = new Audio('./assets/sounds/footsteps.mp3')



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

const messageContainer = document.querySelector('.message-container')



if ((getComputedStyle(gamePlayingScreen)).display === 'none') {
    gameStartScreen.style.display = 'flex'
}

const startGameButton = document.getElementById('start-game-button')


const textHeroOne = 'Я ничего не хочу. Меня ничего не радует. Мне стыдно, что я не могу взять себя в руки и не хватает сил даже помыть посуду или убраться в комнате...'
const messageBlock = document.getElementById('message-p')

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

function firstScenario() {
    heroVisit.style.display = 'block'
    setTimeout(() => {
        messageContainer.style.display = 'block'
    }, 500)
    typing(textHeroOne)
    setTimeout(() => {
        typingSound.play()
    }, 1000)

}

function startGameButtonActive() {
    startGameButtonSound.play()
    setTimeout(() => {
        stepsSound.play()
        gameStartScreen.style.display = 'none'
        gamePlayingScreen.style.display = 'flex'
        heroVisit.classList.add('show-up')
    }, 0)
    firstScenario()
}

startGameButton.addEventListener('click', startGameButtonActive)

tableAsset.style.display = 'block';
interactiveContainer.style.display = 'flex';
heartsContainer.style.display = 'flex';

function displayHearts() {
    hearts.forEach((heart, index) => {
        setTimeout(() => {
            heart.style.display = 'block';
        }, 150 * (index + 1));
    });
}

function removeHealedIcons() {
    healedIcons.forEach((healIcon, index) => {
        setTimeout(() => {
            healIcon.style.display = 'none';
        }, 150 * (index + 1));
    });
}

function removeSkullIcons() {
    skullIcons.forEach((skull, index) => {
        setTimeout(() => {
            skull.style.display = 'none';
        }, 150 * (index + 1));
    });
}
displayHearts()
removeSkullIcons()
removeHealedIcons()


const antidepressantsButton = document.getElementById('antidepressant-button')
const psyhotherapyButton = document.getElementById('psyhotherapy-button')
const galoperidolButton = document.getElementById('galoperidol-button')

let currentPatient = textHeroOne;


antidepressantsButton.addEventListener('click', () => {
    typingSound.pause()
    messageContainer.style.display = 'none';
    heroVisit.style.display = 'none';
    heroCured.style.display = 'block';
    heroNotCured.style.display = 'none'
    const successSound = new Audio('./assets/sounds/success.mp3')
    successSound.play()
})

galoperidolButton.addEventListener('click', () => {
    typingSound.pause()
    messageContainer.style.display = 'none';
    heroNotCured.style.display = 'block'
    heroVisit.style.display = 'none';
    heroCured.style.display = 'none';
    const failSound = new Audio('./assets/sounds/fail.mp3')
    failSound.play()
})

psyhotherapyButton.addEventListener('click', () => {
    typingSound.pause()
    messageContainer.style.display = 'none';
    heroVisit.style.display = 'none';
    heroCured.style.display = 'block';
    heroNotCured.style.display = 'none'
    const successSound = new Audio('./assets/sounds/success.mp3')
    successSound.play()

})













































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
