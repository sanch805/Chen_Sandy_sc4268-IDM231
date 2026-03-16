/**
 * @description
 * Given a birth month, determine the corresponding Wii Channel.
 * @param {number} month - month of the year (1-12)
 * @returns {object} the corresponding Wii channel
 */

const channels = [
    {
        image: 'media/wii_cd.jpg',
        alt: 'the disk channel',
        description: 'Havent decided yet? Insert the CD of your favorite game!',
        sound: 'insert-cd.mp3',
        month: 1,
    },
    {
        image: 'media/wii_mii.jpg',
        alt: 'the mii channel',
        description: 'You like customizing! Come and play with your Miis!',
        sound: 'mii.mp3',
        month: 2,
    },
    {
        image: 'media/wii_photo.jpg',
        alt: 'the photo channel',
        description: 'Save and look back at all your Wii memories here!',
        sound: 'photo-channel.mp3',
        month: 3,
    },
    {
        image: 'media/wii_news.png',
        alt: 'the news channel',
        description: 'Youre always up to date and catch up on the latest news!',
        sound: 'news.mp3',
        month: 4,
    },
    {
        image: 'media/wii_forecast.jpg',
        alt: 'wii forecast channel',
        description: 'Check back for hourly weather reports!',
        sound: 'weather.mp3',
        month: 5,
    },
    {
        image: 'media/wii_netflix.png',
        alt: 'wii netflix channel',
        description: 'Ready to Netflix and chill?',
        sound: 'netflix.mp3',
        month: 6,
    },
    {
        image: 'media/wii_justdance.jpeg',
        alt: 'wii justdance game',
        description: 'Just Dance!',
        sound: 'justdance.mp3',
        month: 7,
    },
    {
        image: 'media/wii_sport.jpg',
        alt: 'wii sports game',
        description: 'Time to get active!',
        sound: 'sports.mp3',
        month: 8,
    },
    {
        image: 'media/wii-animalcrossing.jpg',
        alt: 'wii animal crossing game',
        description: 'Relax and spend time with your villagers!',
        sound: 'animal-crossing.mp3',
        month: 9,
    },
    {
        image: 'media/wii_supersmash.jpg',
        alt: 'wii supersmash game',
        description: 'Grab your next competitor and brawl it out!',
        sound: 'supersmash.mp3',
        month: 10,
    },
    {
        image: 'media/wii_potc.jpg',
        alt: 'wii potc game',
        description: '*lego breaking noises*',
        sound: 'pirates.mp3',
        month: 11,
    },
    {
        image: 'media/wii_shop.jpg',
        alt: 'wii shop channel',
        description: 'Shop new apps and games!',
        sound: 'shop.mp3',
        month: 12,
    },
];

// putting it into global scope and not just in function
const all_channels = []
const birthday_form = document.querySelector('form')
let el_grid
let el_description

function update_description(channel) {
    if (el_description) {
        el_description.innerText = `You've selected ${channel.alt}. ${channel.description}`
    }
}

function play_sound(channel) {
    all_channels.forEach(c => {
        c.audio.pause()
        c.audio.currentTime = 0
    })

    channel.audio.currentTime = 0
    channel.audio.play()
}

function update_ui(channel) {
    document.querySelectorAll('.navigation li').forEach(li => li.classList.remove('active'))

    const index = channels.indexOf(channel) + 1
    const activeLi = document.querySelector(`#nav-list li:nth-child(${index})`)
    if (activeLi) activeLi.classList.add('active')

    update_description(channel)
    play_sound(channel)
}

function get_birthday_channel(birthday) {
    const date = {
        year: birthday[0],
        month: birthday[1],
        day: birthday[2],
    }

    const month = Number(date.month)

    return channels.find(c => c.month === month)
}

function create_nav() {
    el_nav = document.createElement('ul')
    el_nav.className = 'navigation'
    el_nav.id = 'nav-list'
    document.querySelector('main').appendChild(el_nav)
}

function create_description_elements() {
    el_description = document.createElement('p')
    el_description.id = 'description'
    el_description.innerHTML = '&nbsp;'
    document.querySelector('.clock-container').before(el_description)
}

function create_channel_item(channel) {
    const index = channels.indexOf(channel) + 1
    const id = `container-${index}`

    const li = document.createElement('li')
    li.innerHTML = `
        <a href="#${id}">
            <img src="${channel.image}" alt="${channel.alt}" />
        </a>
    `
    li.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault()
        update_ui(channel)
    })
    el_nav.appendChild(li)

    const modal = document.createElement('div')
    modal.id = id
    modal.className = 'content'
    modal.innerHTML = `
        <div class="container">
            <p>${channel.description}</p>
            <a href="#" class="back">Back</a>
        </div>
    `
    document.body.appendChild(modal)
}

function create_channels() {
    channels.forEach(channel => {
        create_channel_item(channel)

        const channel_audio = new Audio(`sounds/${channel.sound}`)
        channel.audio = channel_audio

        all_channels.push(channel)
    })
}

function handle_form(event) {
    event.preventDefault()

    const channel = get_birthday_channel(
        birthday_form.elements.birthday.value.split('-')
    )

    if (channel) {
        update_ui(channel)
    }
}

function initialize() {
    create_nav()
    create_channels()
    create_description_elements()

    if (birthday_form) {
        birthday_form.addEventListener('submit', handle_form)
    }

    const fade = document.getElementById('fade')
    const light = document.getElementById('light')

    document.getElementById('ask-btn').addEventListener ('click', (e) => {
        e.preventDefault()
        fade.style.display = 'flex'
        light.style.display = 'block'
    })

    document.getElementById('close-btn').   addEventListener('click', (e) => {
        e.preventDefault()
        fade.style.display = 'none'
        light.style.display = 'none'
    })
}

document.addEventListener('DOMContentLoaded', initialize)