const lista = ['pane', 'latte', 'uova', 'pasta', 'formaggio', 'sugo']

let ul = document.querySelector('ul');

let i = 0;
while(i < lista.length){
    ul.innerHTML +=  `<li> ${lista[i]} </li>`;

    i++
}