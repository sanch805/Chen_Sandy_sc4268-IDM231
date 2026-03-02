/**
 * @description
 * Given a month and day, determine the corresponding Channel.
 * @param {number} month - month of the year (1-12)
 * @param {number} day - day of the month (1-31)
 * @returns {string} the corresponding Channel sign
 */

const channels = [
    {
        image: 'media/wii_cd.jpg',
        alt: 'cd image',
        description: 'Insert the CD of your favorite game!',
        sound: 'insert-cd.mp3',
        month: 1,
    },
    {
        image: 'media/wii_mii.jpg',
        alt: 'mii image',
        description: 'Customize and play with your Miis!',
        sound: 'mii.mp3',
        month: 2,
    },
    {
        image: 'media/wii_photo.jpg',
        alt: 'wii photo channel',
        description: 'Save and look back at all your Wii memories here!',
        sound: 'photo.mp3',
        month: 3,
    },
    {
        image: 'media/wii_news.png',
        alt: 'wii news channel',
        description: 'Bringing you the latest news!',
        sound: 'news.mp3',
        month: 4,
    },
    {
        image: 'media/wii_forecast.jpg',
        alt: 'wii forecast channel',
        description: 'Will it be rainy or sunny today? Check back for hourly reports!',
        sound: 'forecast.mp3',
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
        description: 'Just Dance! ٩(ˊᗜˋ )و',
        sound: 'justdance.mp3',
        month: 7,
    },
    {
        image: 'media/wii_sport.jpg',
        alt: 'wii sports game',
        description: 'Time to get active! ᕕ( ᐛ )ᕗ',
        sound: 'sports.mp3',
        month: 8,
    },
    {
        image: 'media/wii-animalcrossing.jpg',
        alt: 'wii animal crossing game',
        description: 'Relax and spend time with your villagers ଘ(੭ˊᵕˋ)੭* ੈ✩‧˚',
        sound: 'animalcrossing.mp3',
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
        sound: 'potc.mp3',
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
const birthday_form = document.querySelector(`form`)
let el_grid
let el_description

function update_description(){
    if (el_description) {
    el.description.innerText = `You've selected ${alt}. ${description}`
    }
}

function play_sound(sound){
    all_channels.forEach(sound => {
        sound.audio.pause()
        sound.audio.currentTime = 0
    })

    sound.currentTime = 0;
    sound.play();
}

function update_ui(channel){
    update_description(channel.description);
    play_sound(channel.audio);
}

function create_grid(){
    el_grid = document.createElement('div')
    el_grid.id = 'grid'
    document.body.appendChild(el_grid)
}

function create_description_elements(){
    el_description = document.createElement('p')
    el_description.id = 'description'
    el_description.innerHTML = '&nbsp'
    document.body.appendChild(el_description)
}

function create_button(sign){
    const el_button = document.createElement('button');
    el_button.id = `btn-${sign.image}`
    el_button.style.height = `200px`;
    el_button.style.width = `200px`;
    el_button.style.backgroundColor = `var(--color-${sign-color}-500)`
    el_button.addEventListener('click', () => { update_ui(sign)})

    el_grid.appendChild(el_button)

}

function create_buttons(){
    signs.forEach(sign => {
        create_button(sign);

        const sign_audio = new Audio(`sounds/${sign.sound}.mp3`)
        sign.audio = sign_audio

        all_signs.push(sign)
        //.push will add all signs to an array
    })
}

function get_birthday_sign(birthday){
    const date = {
        year: birthday[0],
        month: birthday[1],
        day: birthday[2],
    }

    const month =  Number(date.month)
    const day = Number(date.day)
    let astrological_sign

    function getZodiac(month, day) {
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return 'Capricorn';
      } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return 'Sagittarius';
      } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
        return 'Scorpio';
      } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
        return 'Libra';
      } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return 'Virgo';
      } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return 'Leo';
      } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
        return 'Cancer';
      } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
        return 'Gemini';
      } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return 'Taurus';
      } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return 'Aries';
      } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return 'Pisces';
      } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return 'Aquarius';
      } else return null;
    }
      return astrological_sign
}


function handle_form(event){
    event.preventDefault()

    const birthday_sign = get_birthday_sign(
        birthday_form.elements.birthday.value.split('-')
    )

    let sign
    for (let i = 0; i < signs.length; i++) {
        if (signs[i].color === birthday_sign) {
            sign = signs[i]
            break
        }
    }

   //  const sign = signs.find(sign => sign.color === birthday_sign)

    update_ui(sign)
}

function initialize(){
    create_grid();
    create_buttons();
    create_description_elements();

    if (birthday_form) {
        birthday_form.addEventListener('submit', handle_form)
    }
}

document.addEventListener('DomContentLoaded', initialize)