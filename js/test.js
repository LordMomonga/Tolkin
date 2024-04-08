let tableau =[
    {
          question:'que voyez vous dans cette image qui vous....?',
          proposition:['un homme assis', 'un homme debout', 'un homme lisant', 'un gar perdu'],
          reponse: 'un homme assis',
          image:""
        
    },
    {
      question:'que  dans cette image qui vous....?',
      proposition:['un  assis', 'un homme debout', 'un homme lisant', 'un gar perdu'],
      reponse: 'un  assis',
      image:""
    
},
{
  question:'que voulez vous gagner a travers ce text ...?',
  proposition:['un bete assis', 'un belle debout', 'une chevre lisant', 'un gar perdu'],
  reponse: 'un bete assis',
  image:""

},
{
  question:'comment voulez vous faire pour reussir votre vis ....?',
  proposition:[' lire un livre', 'avoir une education scolaire', 'faire une petite formation', 'devenir un extra terrestre'],
  reponse: 'lire un livre ',
  image:""

},
{
  question:'qui etait le personnage preferé dans Shingeki no kyojin ....?',
  proposition:[' Eren Yeger', 'Livai ', 'Sangoku', 'Naruto uzumaki'],
  reponse: 'Eren Yeger ',
  image:""

},
{
  question:'comment faire pour avoir la cote avec les femmes .?',
  proposition:[' ce lave chaque jour', 'avoir les dos ', 'met du parfum', 'etre beau et intelligent '],
  reponse: ' avoir les dos ',
  image:""

},


]
let number = 0;
let numero = document.querySelector(".num")
let poser = document.querySelector(".pose")
let time = 35;
let listQuestion = document.querySelector('.rep').children[0].children[1];
let restant = 35 ;
let repondu ;
let choice = document.querySelector('.choix')
let listItems = document.querySelectorAll('li');
let currentIndex = 0;
const input = document.createElement('input')
input.type = 'radio';
console.log(choice.children[0].childNodes[2].innerHTML)
function centerhange(){
  
}
function highlightCurrentItem() {
  // Désactiver le border du précédent élément
  listItems[0].classList.remove("defiler")
  if(currentIndex - 1 > 0 ){
    listItems[currentIndex - 1].classList.remove('defiler');
  }
  //ici il sagit de l'affichage des questions et des reponses 
  poser.innerHTML= `${tableau[number].question}`;
  numero.innerHTML = `${number + 1})`
  for (let i = 0; i < tableau[0].proposition.length; i++) {
    choice.children[i].childNodes[2].innerHTML = `${tableau[number].proposition[i]}`   
     
  }
  
  listQuestion.innerHTML = `Restante: <b>${restant}</b>`
  // Activer le border du nouvel élément
  listItems[currentIndex].classList.add('defiler');

  // Mettre à jour l'index actuel
  currentIndex = (currentIndex + 1) ;
  restant --
  if(number < 10) {number ++} ;
 
}    


let intervalId = setInterval(highlightCurrentItem, 1000);