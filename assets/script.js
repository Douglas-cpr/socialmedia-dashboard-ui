
const pageComponents = [
    todayOverview = document.querySelectorAll('.overview-today'),
    socialCard = document.querySelectorAll('.social-card'),
    header = document.querySelectorAll('header'),
    body = document.querySelectorAll('body')
]

const btnDark = document.querySelector('.button-field button');
const btnField = document.querySelector('.button-field');

btnDark.addEventListener('click', () => {
    btnField.classList.toggle('on');

    pageComponents.forEach(el => {
        darkMode(el);
        console.log('entrou')
    });
})

function darkMode(component) {
    component.forEach(el => {
        el.classList.toggle('dark');
    });
}