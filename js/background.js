const images = ["곰돌이.jpg", "구름.JPG", "새벽녘.jpg", "연분홍.png", "유럽2.jpg", "진분홍.png", "차.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement("img");

const bgImage = document.querySelector("img");

bgImage.src = `img/${chosenImage}`;

//document.querySelector("div").appendChild(bgImage);
//document.img.appendChild(bgImage);


bgImage.classList.add("fullscreen");
