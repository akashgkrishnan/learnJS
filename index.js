console.log(document);
console.log(document.firstElementChild)
console.log(document.firstElementChild.firstElementChild)

document.querySelector('h1').innerHTML = 'js';
let h1 = document.querySelector('h1');
h1.innerHTML = 'lol';
h1.style.color = 'Red';


let n = document.getElementsByTagName('h1')[0];
n.style.backgroundColor = 'green';



document.querySelector('h1').classList.add('invisible');

console.log(document.querySelector('h1').textContent);

document.querySelector('h1').innerHTML = "<em> Halla </em>"


console.log(document.querySelector('a').getAttribute("href"));


document.querySelector('a').setAttribute('href', 'bing.com');
console.log(document.querySelector('a').getAttribute("href"));
