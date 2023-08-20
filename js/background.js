const images = ["0.img.jpg", "1.img.jpg", "2.img.jpg", "3.img.jpg"];

const randomImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${randomImage}`;

document.body.appendChild(bgImage);
