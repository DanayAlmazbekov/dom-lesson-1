// ! DOM - Document Object Model

// селекторы get...

// let btn = document.getElementById('btn')
// console.log(typeof btn);

// let blocks = document.getElementsByClassName('blocks');
// console.log(blocks);

// let blocks = document.getElementsByTagName('div')
// console.log(blocks);

// let inp = document.getElementsByName('phone')
// console.log(inp);

// селекторы querySelectors

// let btn = document.querySelector('#btn');
// let blocks = document.querySelectorAll('.blocks');
// let blocks2 = document.querySelectorAll('div');
// let inp = document.querySelectorAll('[name="phone"]');
// console.log(btn);
// console.log(blocks);
// console.log(blocks2);
// console.log(inp);

// let container = document.getElementById('container');
// console.log(container);
// container.innerText = 'Hello DOM!' // передается текст
// container.innerHTML = '<h1>Zdarova Zaebal!</h1>' // передается верстка
// container.style.color = 'red'
// container.style.backgroundColor = 'aqua'
// container.style.fontSize = '35px'
// console.log(document.body);
// document.body.style.backgroundColor = 'black'

// let container = document.getElementById('container');
// for (let i = 1; i <=10; i++){
//     let block = document.createElement('div')
//     block.style.width = '100px'
//     block.style.height = '100px'
//     block.style.backgroundColor = 'purple'
//     block.style.margin = '10px'
//     container.append(block)
// }
// container.style.display = 'flex'
// container.style.flexWrap = 'wrap'
// console.log(container.firstChild, container.lastChild);
// console.log(container.lastChild.previousSibling);
// console.log(container.firstChild.nextElementSibling);
// console.log(getComputedStyle(container).color );

// let blocks1 = document.querySelectorAll(".blocks") // NodeList - ststic - один раз обращается к элементам и больше не следит за ним
// let blocks2 = document.getElementsByClassName("blocks") // HTMLCollection - dynamic - постоянно следит за элементами и видит изменения
// blocks1[0].remove()
// console.log(blocks1);
// console.log(blocks2);

let inp = document.getElementById('inp');
// console.log(inp);
inp.setAttribute('placeholder', 'search...')
inp.classList.add('new-class')
inp.classList.add('new-class-2')
inp.classList.remove('new-class')
inp.classList.toggle('new-class-3')
console.log(inp);










