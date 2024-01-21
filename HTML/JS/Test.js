console.log("je suis le christ cosmique")
let nom = "Maxime"
console.log(nom)


let red = document.getElementById('red')
console.log(red)
red.innerHTML += "pastel"
console.log(red)

let tittle = document.querySelector('#main-title')
tittle.addEventListener('click', function() {
    console.log("j'ai cliqué sur le titre")
})

let tittle2 = document.querySelector('#main-little')
tittle.addEventListener('click', function(){
    this.classList.add('red')
    console.log('classe ajoutée')
})