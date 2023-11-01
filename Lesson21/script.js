const entireHtml = document.documentElement.outerHTML;
console.log('entireHtml', entireHtml);

const bodyHtml = document.body.innerHTML;
console.log('bodyHtml', bodyHtml);

console.log(document);


const paragraph = document.createElement('p');
paragraph.textContent = 'Hello World!';

const containerDivElement = document.getElementById('container');
containerDivElement.appendChild(paragraph);


const changeBgButton = document.getElementById('change-bg-button');

const heading = 'heading';
const h1 = document.getElementById(heading);


const inputElements = document.getElementsByName('email');
console.log(inputElements);

for (let i = 0; i < inputElements.length; i++) {
  inputElements[i].defaultValue = 'gulcin@hotmail.com';
}

const arr = ['sdas', 'dsds', 'saadasda'];
arr.length;
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i].length);
}

changeBgButton.addEventListener('click', function () {
  h1.classList.toggle('background-color');
});


const imageData = [
  {
    imageTitle: 'Picture of a dog',
    url: 'https://dadsad.sadas.ds'
  },
  {
    imageTitle: 'Picture of a dog',
    url: 'https://dadsad.sadas.ds'
  },
  {
    imageTitle: 'Picture of a dog',
    url: 'https://dadsad.sadas.ds'
  },
  {
    imageTitle: 'Picture of a dog',
    url: 'https://dadsad.sadas.ds'
  },
];



const addList = document.getElementById("adding-list");
const liElement = document.createElement("li");
liElement.textContent = "Item 4";

addList.appendChild(liElement);


const liItemElements = document.getElementsByTagName('li');
console.log(liItemElements);

for (let i = 0; i < liItemElements.length; i++) {
  liItemElements[i].classList.add('checked');
}

