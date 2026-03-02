console.log('Hello World')

function calculateArea(width, height){
    const my_area = width * height
    return width * height;
}

    let my_area = calculateArea(5, 10)
    console.log(my_area);

    let area = calculateArea(8, 12)
    console.log(area);

    let total_area = calculateArea(3, 7)
    console.log(total_area);


    console.log(calculateArea(5, 11))


//function greetPerson(name){
//  console.log(`Hello, ${name}! Welcome!`)
//}

const greetPerson = name => {
    console.log(`Hello, ${name}! Welcome!`);
}

greetPerson('Jane')
greetPerson('Harry')
greetPerson('John')

const table = {
  type: 'billiards',
  solids: 8,
  stripes: 7,
  games: ['8-Ball', '9-Ball', 'Straight']
};

console.log(table.games[1]);


const one = 1;

function won(one) {
  const two = one;
  console.log('two', two)
  return two;
}

const three = one;
const four = won();

console.log(four);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

const my_sign = [
  {
    sign_name: 'Virgo',
    price: 2000,
  },
  {
    sign_name: 'Leo',
    price: 3500,
  },
  {
    sign_name: 'Libra',
    price: 8000,
  }
]

let current_sign = 'Virgo';

function get_sign_details(selected_sign){
  my_sign.forEach((sign) => {
    if(sign.sign_name === selected_sign)
      console.group('Get Sign Details');
    console.log(sign.sign_name);
    console.log(sign.price);
    //console.log(sign)
  });
}

get_sign_details(current_sign);

console.log(my_sign)
console.table(my_sign)

function init() {
  console.log('the page has loaded!')
}

window.addEventListener('load', init)

function create_input(){
  const input_element = document.createElement('input')

  console.log(input_element);

  input_element.type = 'text'
  input_element.id = 'my_input'
  input_element.addEventListener('focus', () => {
    console.log('Focused on input')
  })

  document.body.appendChild(input_element);
}

create_input()

const my_form = document.querySelector('form')

function handle_submit(event) {
  event.preventDefault()
  console.group('Form submission')
  console.log(my_form)
  console.log(my_form.elements)
  console.log(my_form.elements['username'])
  console.log(my_form.elements['username'].value)
  console.groupEnd()
}

if (my_form){
  console.log('Form exists');
}

function handle_resize(){
  console.log('Window resize handler')
  console.log('window widow:${}')
}

const form = document.querySelector('form');
const error_list = document.querySelector('.errors');

function handle_submit(event) {
  event.preventDefault()
  console.group('Form submitted')
  console.log(form)
  console.log(form.elements)
  console.log(form.elements['name'].value)
  console.log(form.elements['birthday'].value)
  console.groupEnd()

  const errors = []

  if (form.elements['name'].value.length < 2) {
    errors.push('Name must be at least three characters.')
    form.elements['name'].focus()
  }

  if (errors.length > 0){
    errors.forEach(error => {
      const li = document.createElement('li')
      const text = document.createTextNode(error)

      li.appendChild(text)

      if (error.list){
        error_list.appendChild(li)
        error.list = false
      }
    })

  return false } else {
    if (error_list){
      error_list.hidden = true
      error_list .innerHTML = ''
    }
  }

}

function log_birthday(birthday){
  const date = {
    year: birthday[0],
    month: birthday[1],
    day: birthday [2],
  }
}

const date_object = log_birthday
console.log('date_object', [])