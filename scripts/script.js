// BRON: https://codepen.io/KoopReynders/

// FAVORIET

var heartButton = document.querySelector('.hartleeg');


console.log(heartButton);

//actie !
heartButton.addEventListener("click", function () {
    console.log("klikkie");
    heartButton.classList.toggle("hartvol");
    document.getElementById("toegevoegd").innerHTML = "Toegevoegd aan Favorieten!";
}
);

//LIKE

var likeButton = document.querySelector('.duimleeg');


console.log(likeButton);

//actie !
likeButton.addEventListener("click", function () {
    console.log("klikkie");
    likeButton.classList.toggle("duimvol");
    document.getElementById("toegevoegd").innerHTML = "Toegevoegd aan Likes!";
}
);

//DOWNLOAD

var downloadButton = document.querySelector('.downloadleeg');


console.log(downloadButton);

//actie !
downloadButton.addEventListener("click", function () {
    console.log("klikkie");
    downloadButton.classList.toggle("downloadvol");
    document.getElementById("toegevoegd").innerHTML = "Verhaal gedownload op dit device!";
}
);