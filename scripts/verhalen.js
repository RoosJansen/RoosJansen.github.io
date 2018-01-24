
var heartButton = document.querySelector('.hartleeg');


console.log(heartButton);

//actie !
heartButton.addEventListener("click", function () {
    console.log("klikkie");
    heartButton.classList.remove("hartleeg");
    heartButton.classList.add("hartvol");
    document.getElementById("demo").innerHTML = "Toegevoegd aan Favorieten!";
}
);

var likeButton = document.querySelector('article footer button:first-of-type');


console.log(likeButton);

//actie !
likeButton.addEventListener("click", function () {
    console.log("klikkie");
    likeButton.classList.remove("duimleeg");
    likeButton.classList.add("duimvol");
    document.getElementById("demo").innerHTML = "Toegevoegd aan Likes!";
}
);




/*
//Change color of heart
var heartButtons = document.querySelectorAll('article footer button:nth-of-type(2)'[1]); 

console.log(heartButtons);

for (var i = 0; i < heartButtons.length; i++) {
    heartButtons[i].addEventListener('click', function () {
if(this.classList.contains('color-active')){
counter--;
}

else{
counter++;
}
document.getElementById("counter").innerHTML = counter; 
this.classList.toggle('color-active');
});
}


// Liken

var like = document.querySelector('.like');

function likePopUp() {
    var likeUp = document.querySelector(".likeUp");
    like.classList.toggle("likeActive");
    likeUp.classList.toggle("likeUpAnimation");
    if (countLike.innerText.trim() === "141") {
        countLike.innerHTML = countLike.innerHTML.replace(countLike.innerText.trim(), 142);
    } else {
        countLike.innerHTML = countLike.innerHTML.replace(countLike.innerText.trim(), 141);
    }
}


// Downloaden

//Source https://stackoverflow.com/questions/33365144/html-button-onclick-start-javascript-progressbar
//Changes made for this project
function downloading(al) {
var bar = document.getElementById('progressBar');
var status = document.getElementById('status');
  status.innerHTML = al + "%";
  bar.value = al;
  al++;
var sim = setTimeout("downloading(" + al + ")", 1);
  if (al == 100) {
    status.innerHTML = "100%";
    bar.value = 100;
    clearTimeout(sim);
var finalMessage = document.getElementById('finalMessage');
    finalMessage.innerHTML = "Downloaden is voltooid";
  }
var change = document.getElementById("download");
  if (change.innerHTML == "Download") {
   change.innerHTML = "Open PDF";
   }
}

*/