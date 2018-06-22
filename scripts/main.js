/*let monTitre = document.querySelector('h1');
monTitre.textContent = 'Hello World!';*/

alert('mange tes morts Manu');

/*document.querySelector('html').onclick = function() {
  alert('Aïe, arretez de cliquer !!!')
}*/

var monImage = document.querySelector('img');
monImage.onclick = function() {
  var monSrc = monImage.getAttribute('src');
  if(monSrc === 'images/potichats1.jpg') {
    monImage.setAttribute ('src','images/potichats3.jpg');
  } else {
    monImage.setAttribute ('src','images/potichats1.jpg');
  }
}

var monBouton = document.querySelector('button');
var monTitre = document.querySelector('h1');
function definirNomUtilisateur() {
  var monNom = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom',monNom);
  monTitre.textContent = 'Mozilla est cool, ' + monNom;
}
if(!localStorage.getItem('nom')) {
  definirNomUtilisateur();
} else {
  let nomEnregistré = localStorage.getItem('nom');
  monTitre.textContent = 'Mozilla est cool, ' + nomEnregistré;
}
monBouton.onclick = function() {
  definirNomUtilisateur();
}
