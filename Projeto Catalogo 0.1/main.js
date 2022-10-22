//--------------- MENU ----------------------------

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu)

//----------------- HORARIO DE FUNCIIONAMENTO ----------------
const data = new Date();
const diaSemana = data.getDay();
const horaDia = data.getHours();
let diaSemanaTexto;

//Domingo
if (diaSemana === 0 && horaDia >= 9 && horaDia <= 24) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''
    const p =document.createElement('p');
    p.classList.add('paragrafo-resultado-on')
    p.innerHTML = 'Loja Aberta • 10:00 às 22:00';
    resultado.appendChild(p);
} 

//Segunda
else if (diaSemana === 1 && horaDia >= 9 && horaDia <= 24) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''
    const p =document.createElement('p');
    p.classList.add('paragrafo-resultado-off')
    p.innerHTML = 'Loja Fechada';
    resultado.appendChild(p);
}

//Terça
else if (diaSemana === 2 && horaDia >= 6 && horaDia <=13) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''
    const p =document.createElement('p');
    p.classList.add('paragrafo-resultado-on')
    p.innerHTML = 'Loja Aberta • 10:00 às 22:00';
    resultado.appendChild(p);
}

//Quarta
else if (diaSemana === 3 && horaDia >= 6 && horaDia <= 24) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado-on')
    p.innerHTML ='Loja Aberta • 10:00 às 22:00';
    resultado.appendChild(p);
}

//Quinta
else if (diaSemana === 4 && horaDia >= 9 && horaDia <= 2) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado-on')
    p.innerHTML = 'Loja Aberta • 10:00 às 22:00'
    resultado.appendChild(p);
}

//Sexta
else if (diaSemana === 5 && horaDia >= 9 && horaDia <= 24) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado-on')
    p.innerHTML = 'Loja Aberta • 10:00 às 22:00'
    resultado.appendChild(p);
}

//Sabado
else if (diaSemana === 6 && horaDia >= 9 && horaDia <= 24) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado-on')
    p.innerHTML = 'Loja Aberta • 10:00 às 22:00'
    resultado.appendChild(p);
} 

//  Falso
else {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML
    const p = document.createElement('p')
    p.classList.add('paragrafo-resultado-off')
    p.innerHTML = 'Loja Fechada'
    resultado.appendChild(p)
}


